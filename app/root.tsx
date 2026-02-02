import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Loading from "./components/loading";
import NotFound from "./routes/not-found";
import { ThemeProvider } from "./lib/theme";

const themeScript = `
(function() {
  var theme = localStorage.getItem('theme');
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
`;

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <Loading />;
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // Jika error berupa Response (throw new Response)
  if (isRouteErrorResponse(error)) {
    // 404 → render halaman NotFound langsung
    if (error.status === 404) {
      return <NotFound />;
    }

    // Error response lain (mis. 401, 500, dsb)
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-theme">
        <h1 className="text-5xl font-bold text-theme-accent mb-4">
          {error.status}
        </h1>

        <p className="text-theme-muted text-lg mb-6">
          {error.statusText || "Terjadi kesalahan"}
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-subtle hover:bg-theme-hover text-theme-accent transition"
        >
          ← Kembali ke beranda
        </a>
      </main>
    );
  }

  // Jika error dari exception JS (runtime error)
  const devDetails =
    import.meta.env.DEV && error instanceof Error ? error.stack : null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-theme">
      <h1 className="text-5xl font-bold text-theme-accent mb-4">Error</h1>

      <p className="text-theme-muted text-lg mb-6">
        Terjadi kesalahan tak terduga
      </p>

      <a
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-subtle hover:bg-theme-hover text-theme-accent transition"
      >
        ← Kembali ke beranda
      </a>

      {devDetails && (
        <pre className="mt-8 w-full max-w-2xl text-left bg-theme-subtle p-4 rounded-lg overflow-x-auto text-sm text-theme-subtle border-theme border">
          {devDetails}
        </pre>
      )}
    </main>
  );
}
