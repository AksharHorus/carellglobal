export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      "Enterprise Infrastructure",
      "Networking",
      "Cybersecurity",
      "Cloud",
      "Data Centre",
      "Managed Services",
      "Collaboration",
      "IT Consulting",
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServices = [
  "Enterprise Infrastructure",
  "Networking",
  "Cybersecurity",
  "Cloud",
  "Data Centre",
  "Managed Services",
  "Collaboration",
  "IT Consulting",
] as const;

export const footerIndustries = [
  "Manufacturing",
  "Healthcare",
  "Education",
  "Government",
  "Retail",
  "BFSI",
  "Hospitality",
  "Logistics",
] as const;
