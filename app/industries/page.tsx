import { buildMetadata } from "@/lib/seo";
import IndustriesPage from "@/components/pages/industries-page";

export const metadata = buildMetadata({
  path: "/industries",
  title: "Industries — Karell Global Enterprise IT Across Sectors",
  description:
    "Industry-specific IT, cybersecurity and cloud solutions for regulated and mission-critical sectors.",
  ogTitle: "Industries we serve — Karell Global",
  ogDescription: "Domain expertise across manufacturing, BFSI, healthcare, government and more.",
  image: "/og/industries.jpg",
});

export default function Page() {
  return <IndustriesPage />;
}
