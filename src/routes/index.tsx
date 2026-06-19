import { createFileRoute } from '@tanstack/solid-router'
import { createSignal, onMount, For } from 'solid-js'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Njored — WhatsApp Lead Management for Real Estate Agencies in Kenya' },
      {
        name: 'description',
        content:
          'Njored automatically captures, assigns, and tracks WhatsApp leads for real estate agencies in Nairobi. Instant lead acknowledgment, round-robin agent assignment, and full conversation history. Book a free demo.',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Njored Conglomerate Ltd' },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Njored — Never Lose a WhatsApp Lead Again' },
      {
        property: 'og:description',
        content:
          'Automatic WhatsApp lead capture, agent assignment, and conversation history for Kenyan real estate agencies.',
      },
      { property: 'og:url', content: 'https://njored.com' },
      { property: 'og:site_name', content: 'Njored' },
      { property: 'og:image', content: 'https://njored.com/og-image.png' },
      { property: 'og:locale', content: 'en_KE' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Njored — Never Lose a WhatsApp Lead Again' },
      {
        name: 'twitter:description',
        content: 'Automatic WhatsApp lead capture and agent assignment for Kenyan SMEs.',
      },
      { name: 'twitter:image', content: 'https://njored.com/og-image.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://njored.com' }],
  }),
  component: Home,
})

const WHATSAPP_NUMBER = '254740772801'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'd like to book a demo of Njored")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function DemoConversation() {
  const [stage, setStage] = createSignal(0)

  onMount(() => {
    const sequence = [600, 1800, 2800, 6800]
    const timers: number[] = []

    function runCycle() {
      setStage(0)
      sequence.forEach((delay, i) => {
        timers.push(window.setTimeout(() => setStage(i + 1), delay))
      })
    }

    runCycle()
    const interval = window.setInterval(runCycle, 7600)

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(interval)
    }
  })

  return (
    <div class="max-w-[420px] mx-auto px-6 mb-20">
      <div class="bg-[#132234] border border-white/[0.08] rounded-[20px] p-6">
        <div class="flex items-center gap-2.5 pb-4 border-b border-white/[0.06] mb-4">
          <div class="w-9 h-9 bg-teal-500/15 rounded-full flex items-center justify-center text-xs font-semibold text-teal-400">
            NK
          </div>
          <div>
            <div class="text-sm font-semibold text-white">Nakuru Homes</div>
            <div class="text-xs text-teal-400">● Online</div>
          </div>
        </div>
        <div class="flex flex-col gap-2.5 min-h-[140px]">
          <div
            class="px-3.5 py-2.5 text-sm leading-relaxed max-w-[80%] self-start bg-white/[0.08] rounded-tr-xl rounded-bl-xl rounded-br-xl transition-all duration-500"
            classList={{
              'opacity-0 translate-y-2': stage() < 1,
              'opacity-100 translate-y-0': stage() >= 1,
            }}
          >
            Hi, I'm looking for a 3-bedroom in Kilimani under 15M
          </div>
          <div
            class="px-3.5 py-2.5 text-sm font-medium leading-relaxed max-w-[80%] self-end bg-teal-400 text-[#0D1B2A] rounded-tl-xl rounded-bl-xl rounded-br-xl transition-all duration-500"
            classList={{
              'opacity-0 translate-y-2': stage() < 2,
              'opacity-100 translate-y-0': stage() >= 2,
            }}
          >
            Thanks for reaching out! 👋 One of our agents will be with you shortly.
          </div>
          <div
            class="text-xs text-center text-[#8899AA] py-1 transition-opacity duration-500"
            classList={{
              'opacity-0': stage() < 3,
              'opacity-100': stage() >= 3,
            }}
          >
            Lead assigned to <span class="text-teal-400 font-semibold">Jane Wanjiku</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Logo(props: { size?: 'sm' | 'md' }) {
  const isSmall = props.size === 'sm'
  return (
    <div class="flex items-center gap-2.5">
      <div
        class="bg-teal-400 rounded-lg flex items-center justify-center"
        classList={{ 'w-6 h-6': isSmall, 'w-8 h-8': !isSmall }}
      >
        <svg viewBox="0 0 18 18" fill="none" width={isSmall ? 12 : 18} height={isSmall ? 12 : 18}>
          <path
            d="M2 3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V11C16 11.55 15.55 12 15 12H10L6 16V12H3C2.45 12 2 11.55 2 11V3Z"
            fill="#0D1B2A"
          />
          <path d="M6 6H12M6 9H10" stroke="#0D1B2A" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>
      <span
        class="font-bold tracking-tight text-white"
        classList={{ 'text-sm': isSmall, 'text-lg': !isSmall }}
        style={{ 'font-family': "'Space Grotesk', sans-serif" }}
      >
        Njored
      </span>
    </div>
  )
}

const PROBLEMS = [
  { icon: '🌙', title: 'After-hours silence', desc: "A lead messages at 9pm. Nobody replies until morning. They've already called someone else." },
  { icon: '👥', title: 'No clear ownership', desc: 'Two agents see the same message. Each assumes the other is handling it. Nobody does.' },
  { icon: '📱', title: 'History on one phone', desc: 'An agent leaves. Every conversation they had with leads leaves with them.' },
  { icon: '📊', title: 'Zero visibility', desc: 'As a manager you have no idea how many leads came in this week or who followed up.' },
]

const STEPS = [
  { num: '01', title: 'Instant acknowledgment', desc: 'The lead receives an automatic reply within seconds — day or night, weekend or holiday.' },
  { num: '02', title: 'Agent assigned', desc: 'The lead is automatically assigned to the next available agent using round-robin distribution. No confusion, clear ownership.' },
  { num: '03', title: 'Conversation logged', desc: 'Every message is stored permanently. Full history, always accessible, never lost when an agent leaves.' },
]

const FEATURES = [
  'Unlimited WhatsApp leads captured',
  'Automatic agent assignment (round-robin)',
  'Instant lead acknowledgment messages',
  'Full conversation history',
  'Multi-agent support',
  '48-hour setup and go-live',
  'Direct support via WhatsApp',
]

function Home() {
  return (
    <div class="bg-[#0D1B2A] text-white min-h-screen" style={{ 'font-family': "'Inter', sans-serif" }}>
      {/* JSON-LD structured data for search engines */}
      <script type="application/ld+json" innerHTML={JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Njored',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'WhatsApp lead management platform for real estate agencies and SMEs in Kenya. Automatic lead capture, agent assignment, and conversation history.',
        offers: {
          '@type': 'Offer',
          price: '3500',
          priceCurrency: 'KES',
          priceValidUntil: '2026-12-31',
        },
        provider: {
          '@type': 'Organization',
          name: 'Njored Conglomerate Ltd',
          areaServed: 'KE',
        },
      })} />

      <nav class="flex items-center justify-between px-8 py-5 border-b border-white/[0.06]">
        <Logo />
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          class="bg-teal-400 hover:bg-teal-500 text-[#0D1B2A] text-sm font-semibold px-5 py-2 rounded-md transition-colors">
          Book a demo
        </a>
      </nav>

      <section class="pt-20 pb-16 px-8 text-center max-w-[760px] mx-auto">
        <div class="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-5 px-3.5 py-1.5 border border-teal-400/30 rounded-full">
          WhatsApp Lead Management
        </div>
        <h1 class="text-[2rem] sm:text-5xl font-bold leading-tight tracking-tight mb-5"
          style={{ 'font-family': "'Space Grotesk', sans-serif" }}>
          Every lead <span class="text-teal-400">captured</span>.
          <br />
          Every agent <span class="text-teal-400">accountable</span>.
        </h1>
        <p class="text-base text-white/65 max-w-[520px] mx-auto mb-10 leading-relaxed">
          Njored turns your WhatsApp inbox into a structured lead pipeline — instant responses,
          automatic agent assignment, full conversation history.
        </p>
        <div class="flex items-center justify-center gap-4 flex-wrap">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            class="bg-teal-400 hover:bg-teal-500 text-[#0D1B2A] font-bold px-8 py-3.5 rounded-lg text-base transition-colors">
            Book a free demo
          </a>
          <a href="#how" class="text-white/70 hover:text-white text-sm transition-colors">
            See how it works ↓
          </a>
        </div>
      </section>

      <DemoConversation />

      <section class="px-8 pb-16">
        <div class="max-w-[900px] mx-auto">
          <div class="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3">The problem</div>
          <h2 class="text-2xl sm:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{ 'font-family': "'Space Grotesk', sans-serif" }}>
            Leads are slipping through<br />every day
          </h2>
          <p class="text-white/55 text-base max-w-[480px] mb-12">
            Most real estate agencies in Kenya manage WhatsApp manually. The result is predictable.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <For each={PROBLEMS}>
              {(p) => (
                <div class="bg-[#132234] border border-white/[0.06] rounded-xl p-5">
                  <div class="w-9 h-9 bg-red-500/10 rounded-lg flex items-center justify-center mb-3.5 text-lg">{p.icon}</div>
                  <div class="text-sm font-semibold mb-1.5">{p.title}</div>
                  <div class="text-xs text-[#8899AA] leading-relaxed">{p.desc}</div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section id="how" class="px-8 py-16 border-t border-white/[0.06]">
        <div class="max-w-[900px] mx-auto">
          <div class="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3">How it works</div>
          <h2 class="text-2xl sm:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{ 'font-family': "'Space Grotesk', sans-serif" }}>
            Three things happen<br />the moment a lead messages
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <For each={STEPS}>
              {(s) => (
                <div class="p-6">
                  <div class="text-5xl font-bold text-teal-400/10 leading-none mb-2"
                    style={{ 'font-family': "'Space Grotesk', sans-serif" }}>{s.num}</div>
                  <div class="text-sm font-semibold mb-1.5">{s.title}</div>
                  <div class="text-sm text-[#8899AA] leading-relaxed">{s.desc}</div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="px-8 py-16 border-t border-white/[0.06]">
        <div class="max-w-[900px] mx-auto">
          <div class="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-3 text-center">Pricing</div>
          <h2 class="text-2xl sm:text-4xl font-bold tracking-tight text-center mb-2"
            style={{ 'font-family': "'Space Grotesk', sans-serif" }}>
            Simple, honest pricing
          </h2>
          <p class="text-white/55 text-base text-center max-w-[480px] mx-auto mb-10">
            No hidden fees. No long contracts. Cancel any time.
          </p>
          <div class="bg-[#132234] border border-teal-400/20 rounded-2xl p-8 max-w-[480px] mx-auto">
            <div class="flex items-start justify-between mb-6">
              <div style={{ 'font-family': "'Space Grotesk', sans-serif" }}>
                <div class="text-4xl font-bold text-teal-400 leading-none">KES 3,500</div>
                <div class="text-xs text-[#8899AA] mt-1">per month</div>
              </div>
              <div class="bg-teal-400/10 text-teal-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-400/20">
                First 2 weeks free
              </div>
            </div>
            <div class="text-sm text-[#8899AA] mb-6">
              One-time setup fee: <strong class="text-white/80">KES 10,000</strong> — includes full configuration, testing, and onboarding
            </div>
            <ul class="flex flex-col gap-2.5 mb-8">
              <For each={FEATURES}>
                {(f) => (
                  <li class="flex items-center gap-2.5 text-sm text-white/75">
                    <span class="text-teal-400 font-bold">✓</span>{f}
                  </li>
                )}
              </For>
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              class="block w-full text-center bg-teal-400 hover:bg-teal-500 text-[#0D1B2A] font-bold py-3.5 rounded-lg transition-colors">
              Book a free demo
            </a>
            <div class="text-center text-xs text-[#8899AA] mt-3.5">
              No payment required to see it working on your number
            </div>
          </div>
        </div>
      </section>

      <section class="px-8 py-20 text-center border-t border-white/[0.06]">
        <div class="max-w-[900px] mx-auto">
          <div class="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4 px-3.5 py-1.5 border border-teal-400/30 rounded-full">
            Ready to stop losing leads?
          </div>
          <h2 class="text-2xl sm:text-4xl font-bold tracking-tight mb-3"
            style={{ 'font-family': "'Space Grotesk', sans-serif" }}>
            See it live on your<br />WhatsApp number
          </h2>
          <p class="text-white/55 mb-8">
            Send us a message and we'll have a demo running for you within 24 hours.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            class="inline-block bg-teal-400 hover:bg-teal-500 text-[#0D1B2A] font-bold px-10 py-4 rounded-lg text-base transition-colors">
            WhatsApp us to book →
          </a>
        </div>
      </section>

      <footer class="px-8 py-6 border-t border-white/[0.06] flex justify-between items-center text-xs text-[#8899AA]">
        <Logo size="sm" />
        <span>© 2026 Njored. Nairobi, Kenya.</span>
      </footer>
    </div>
  )
}
