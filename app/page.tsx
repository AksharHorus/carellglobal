import { buildMetadata } from "@/lib/seo";
import HomePage from "@/components/pages/home-page";

export const metadata = buildMetadata({
  path: "/",
  title: "Karell Global — Future-Ready Enterprise IT Infrastructure",
  description:
    "Enterprise infrastructure, cybersecurity, cloud and managed services for global organizations.",
  ogTitle: "Karell Global — Enterprise IT Partner",
  ogDescription: "Future-ready infrastructure, security and cloud for enterprise scale.",
  image: "/og/home.jpg",
});

export default function Page() {
  return <HomePage />;
}
