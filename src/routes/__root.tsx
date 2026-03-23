import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nettarion" },
      {
        name: "description",
        content: "Nettarion LLC — Software",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen font-[Outfit,system-ui,sans-serif] antialiased flex flex-col">
        {/* Header */}
        <header className="border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-2.5 text-sm font-800 tracking-[0.15em] uppercase text-text"
            >
              <img
                src="/logo.png"
                alt=""
                className="w-7 h-7 rounded-full"
              />
              Nettarion
            </a>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <span className="text-sm font-700 tracking-[0.15em] uppercase text-text-muted">
              Nettarion
            </span>
            <span className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Nettarion LLC
            </span>
          </div>
        </footer>

        <Scripts />
      </body>
    </html>
  );
}
