import { Link } from '@tanstack/solid-router'
import type { ErrorComponentProps } from '@tanstack/solid-router'

const WHATSAPP_NUMBER = '254740772801'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I ran into an error on njored.com"
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function ErrorPage(props: ErrorComponentProps) {
  return (
    <div
      class="bg-[#0D1B2A] text-white min-h-screen flex flex-col items-center justify-center px-8 text-center"
      style={{ 'font-family': "'Inter', sans-serif" }}
    >
      <div class="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-2xl">
        ⚠️
      </div>
      <h1
        class="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
        style={{ 'font-family': "'Space Grotesk', sans-serif" }}
      >
        Something didn't go through.
      </h1>
      <p class="text-white/55 text-base max-w-[420px] mb-8 leading-relaxed">
        An unexpected error occurred while loading this page. It's not you — try refreshing,
        or head back home.
      </p>

      {import.meta.env.DEV && props.error && (
        <pre class="bg-[#132234] border border-white/[0.08] rounded-lg p-4 text-xs text-red-300 text-left max-w-[600px] overflow-auto mb-8">
          {props.error.message}
        </pre>
      )}

      <div class="flex items-center gap-4 flex-wrap justify-center">
        <Link
          to="/"
          class="bg-teal-400 hover:bg-teal-500 text-[#0D1B2A] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
        >
          Back to homepage
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/70 hover:text-white text-sm transition-colors"
        >
          Report this issue →
        </a>
      </div>
    </div>
  )
}
