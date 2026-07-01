import { buildMetadata } from "@/lib/seo";
import SolutionsPage from "@/components/pages/solutions-page";

export const metadata = buildMetadata({
  path: "/solutions",
  title: "Solutions — Karell Global Enterprise IT, Cloud & Cybersecurity",
  description:
    "Infrastructure, networking, cybersecurity, cloud, data centre and managed services from Karell Global.",
  ogTitle: "Karell Global Solutions",
  ogDescription: "End-to-end enterprise IT solutions built for scale and resilience.",
  image: "/og/solutions.jpg",
});

export default function Page() {
  return <SolutionsPage />;
}
