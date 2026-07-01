import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { absoluteUrl, getGoogleSiteVerification, getSiteUrl } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-family",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const googleVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: getSiteUrl() ? new URL(getSiteUrl()) : undefined,
  title: {
    default: "Karell Global — Enterprise IT Infrastructure, Cybersecurity & Cloud",
    template: "%s | Karell Global",
  },
  description:
    "Karell Global delivers enterprise IT infrastructure, cybersecurity, cloud and managed services for global organizations.",
  authors: [{ name: "Karell Global" }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Karell Global",
    locale: "en_US",
    type: "website",
    images: [{ url: absoluteUrl("/og/default.jpg") }],
  },
  twitter: { card: "summary_large_image" },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        <Navigation />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
