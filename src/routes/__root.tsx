import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'

import { HydrationScript } from 'solid-js/web'
import { Suspense } from 'solid-js'

import styleCss from '../styles.css?url'
import { NotFound } from './-components/NotFound'
import { ErrorPage } from './-components/ErrorPage'

export const Route = createRootRouteWithContext()({
  head: () => ({
    links: [{ rel: 'stylesheet', href: styleCss }],
  }),
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
  shellComponent: RootComponent,
})

function RootComponent() {
  return (
    <html>
      <head>
        <HydrationScript />
        <HeadContent />
      </head>
      <body>
        <Suspense>
          <Outlet />
          <TanStackRouterDevtools />
        </Suspense>
        <Scripts />
      </body>
    </html>
  )
}
