import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { absoluteUrl, getGoogleSiteVerification } from "../lib/seo";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-navy-deep">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-navy-deep">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy-deep px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-royal"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-navy-deep">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-navy-deep px-4 py-2 text-sm font-medium text-white hover:bg-royal"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const googleVerification = getGoogleSiteVerification();
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Karell Global — Enterprise IT Infrastructure, Cybersecurity & Cloud" },
        {
          name: "description",
          content:
            "Karell Global is a trusted Enterprise IT Infrastructure, Cybersecurity, Cloud & Digital Transformation partner for ambitious organizations.",
        },
        { name: "author", content: "Karell Global" },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "Karell Global" },
        { property: "og:locale", content: "en_US" },
        { property: "og:image", content: absoluteUrl("/og/default.jpg") },
        { name: "twitter:card", content: "summary_large_image" },
        ...(googleVerification
          ? [{ name: "google-site-verification", content: googleVerification }]
          : []),
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
        },
        { rel: "stylesheet", href: appCss },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
