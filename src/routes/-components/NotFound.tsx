
import { Link } from '@tanstack/solid-router'

const WHATSAPP_NUMBER = '254740772801'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I was looking at njored.com and hit a broken link"
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function NotFound() {
  return (
    <div
      class="bg-[#0D1B2A] text-white min-h-screen flex flex-col items-center justify-center px-8 text-center"
      style={{ 'font-family': "'Inter', sans-serif" }}
    >
      <div
        class="text-7xl sm:text-8xl font-bold text-teal-400/15 leading-none mb-4"
        style={{ 'font-family': "'Space Grotesk', sans-serif" }}
      >
        404
      </div>
      <h1
        class="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
        style={{ 'font-family': "'Space Grotesk', sans-serif" }}
      >
        This lead went unanswered.
      </h1>
      <p class="text-white/55 text-base max-w-[420px] mb-8 leading-relaxed">
        The page you're looking for doesn't exist or has moved. Let's get you back on track.
      </p>
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
          Tell us what broke →
        </a>
      </div>
    </div>
  )
}
