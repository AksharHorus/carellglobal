import { buildMetadata } from "@/lib/seo";
import ContactPage from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  path: "/contact",
  title: "Contact Karell Global — Talk to an Enterprise IT Expert",
  description:
    "Speak with a Karell Global solutions architect. Global offices and 24×7 emergency support.",
  ogTitle: "Contact Karell Global",
  ogDescription: "Reach a solutions architect — global offices, 24×7 emergency support.",
  image: "/og/contact.jpg",
});

export default function Page() {
  return <ContactPage />;
}
