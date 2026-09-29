# njored-frontend

The website for **Njored** ([njored.com](https://njored.com)), a WhatsApp lead-management tool for real estate agencies in Kenya. Njored captures WhatsApp leads automatically, assigns them to agents round-robin, and keeps the full conversation history.

The site is currently a marketing landing page with an animated demo conversation and a "Book a demo" call to action that opens WhatsApp.

## Tech stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routing, SSR)
- [Solid.js](https://www.solidjs.com)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Vite](https://vitejs.dev) 8
- [Bun](https://bun.sh) as the package manager and runtime
- Deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) via Wrangler

## Getting started

```bash
bun install
bun --bun run dev      # http://localhost:3000
```

## Scripts

| Command                  | Description                                     |
|--------------------------|-------------------------------------------------|
| `bun --bun run dev`      | Start the dev server on port 3000               |
| `bun --bun run build`    | Production build                                |
| `bun run preview`        | Preview the production build                    |
| `bun run test`           | Run tests with Vitest                           |
| `bun run generate-routes`| Regenerate the TanStack route tree              |
| `bun run deploy`         | Build and deploy to Cloudflare Workers          |

## Project layout

```
src/
├── router.tsx               # Router setup
├── styles.css               # Tailwind entry / global styles
└── routes/
    ├── __root.tsx           # Root layout (shared across all pages)
    ├── index.tsx            # Landing page
    └── -components/         # Non-route components (ErrorPage, NotFound)
public/                      # Static assets (favicon, logos, manifest, robots.txt, sitemap.xml)
```

Routes are file-based. Add a file under `src/routes/` to create a new page. Files and folders prefixed with `-` are ignored by the router.

## Deployment

The app deploys to Cloudflare Workers using the Cloudflare Vite plugin and `wrangler.jsonc`. The Worker is named `njored`.

```bash
bunx wrangler login    # first time only
bun run deploy
```

Add secrets with `wrangler secret put <NAME>`. Put public variables under `vars` in `wrangler.jsonc`.

## Related

- Backend API: [njored-backend](https://github.com/Edmound766/njored-backend)
