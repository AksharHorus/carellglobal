import { buildMetadata } from "@/lib/seo";
import AboutPage from "@/components/pages/about-page";

export const metadata = buildMetadata({
  path: "/about",
  title: "About Karell Global — Enterprise IT Engineered for Trust",
  description:
    "Learn about Karell Global's mission, engineering culture and enterprise IT delivery model.",
  ogTitle: "About Karell Global",
  ogDescription: "Engineering culture, mission and leadership behind Karell Global.",
  image: "/og/about.jpg",
});

export default function Page() {
  return <AboutPage />;
}
