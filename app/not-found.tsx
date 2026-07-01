import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-navy-deep">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-navy-deep">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-navy-deep px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-royal"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
