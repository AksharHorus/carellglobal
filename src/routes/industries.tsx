import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building2, HeartPulse, GraduationCap, Landmark, ShoppingBag, Banknote, Hotel,
  Truck, Antenna, Home, Check, ArrowRight,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { SectionTitle, Eyebrow } from "@/components/site/SectionTitle";
import { CTAButton } from "@/components/site/CTAButton";
import industriesHero from "@/assets/industries-network.jpg";
import { buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    buildPageSeo({
      path: "/industries",
      title: "Industries — Karell Global Enterprise IT Across Sectors",
      description:
        "Industry-specific enterprise IT, cybersecurity and cloud solutions across manufacturing, BFSI, healthcare, government and more.",
      ogTitle: "Industries we serve — Karell Global",
      ogDescription: "Domain expertise across regulated and mission-critical industries.",
      image: "/og/industries.jpg",
    }),
  component: IndustriesPage,
});

type Industry = {
  id: string;
  icon: any;
  name: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  caseStudy: { title: string; metric: string };
};

const industries: Industry[] = [
  {
    id: "manufacturing", icon: Building2, name: "Manufacturing",
    challenges: ["OT/IT convergence risk", "Plant downtime cost", "Legacy SCADA security"],
    solutions: ["Segmented OT networks", "Smart-factory SD-WAN", "ICS-aware threat detection"],
    benefits: ["Higher OEE", "Reduced downtime", "Compliant plant operations"],
    caseStudy: { title: "Smart-factory network across 14 plants", metric: "99.99% uptime SLA achieved" },
  },
  {
    id: "healthcare", icon: HeartPulse, name: "Healthcare",
    challenges: ["EMR availability", "Patient data privacy", "Connected medical devices"],
    solutions: ["Hybrid-cloud EMR", "Zero-trust for devices", "HIPAA-aligned controls"],
    benefits: ["Faster clinician workflows", "Audit-ready privacy", "Resilient critical care"],
    caseStudy: { title: "Hybrid-cloud EMR for a 1,200-bed group", metric: "3× faster clinician workflows" },
  },
  {
    id: "education", icon: GraduationCap, name: "Education",
    challenges: ["Campus-scale Wi-Fi", "Cyber hygiene at scale", "Hybrid learning"],
    solutions: ["High-density campus Wi-Fi", "Identity-led access", "Secure collaboration"],
    benefits: ["Reliable learning experiences", "Reduced phishing impact", "Lower IT operating cost"],
    caseStudy: { title: "Multi-campus Wi-Fi modernization", metric: "60k concurrent learners" },
  },
  {
    id: "government", icon: Landmark, name: "Government",
    challenges: ["Sovereign data residency", "Strict compliance", "Citizen-service uptime"],
    solutions: ["Sovereign cloud landing zones", "Zero-trust architecture", "DR-grade data centres"],
    benefits: ["Citizen trust", "Audit-ready posture", "Resilient digital services"],
    caseStudy: { title: "Sovereign cloud landing zone for a national agency", metric: "100% audit pass" },
  },
  {
    id: "retail", icon: ShoppingBag, name: "Retail",
    challenges: ["Store-to-cloud edge", "PCI-DSS scope", "Omnichannel performance"],
    solutions: ["Retail SD-WAN", "PCI-scoped segmentation", "Edge-to-cloud observability"],
    benefits: ["Faster checkout", "Reduced PCI scope", "Predictable peak performance"],
    caseStudy: { title: "Retail SD-WAN for 480 stores", metric: "42% faster transactions" },
  },
  {
    id: "bfsi", icon: Banknote, name: "BFSI",
    challenges: ["Regulatory pressure", "Sophisticated threats", "Always-on transactions"],
    solutions: ["Zero-trust banking", "SOC with threat hunting", "Active-active data centres"],
    benefits: ["Fewer security incidents", "Stronger regulator standing", "Customer trust"],
    caseStudy: { title: "Zero-Trust for a top-5 regional bank", metric: "62% fewer security incidents" },
  },
  {
    id: "hospitality", icon: Hotel, name: "Hospitality",
    challenges: ["Guest network experience", "Property-level reliability", "PMS integration"],
    solutions: ["Hospitality-grade Wi-Fi", "Managed property network", "PMS-aligned integration"],
    benefits: ["Higher guest satisfaction", "Lower TCO", "Brand-consistent experience"],
    caseStudy: { title: "Network refresh across a luxury hotel portfolio", metric: "+18 NPS points" },
  },
  {
    id: "logistics", icon: Truck, name: "Logistics",
    challenges: ["Warehouse density", "Cold-chain visibility", "Distributed sites"],
    solutions: ["Industrial Wi-Fi 6", "IoT data platforms", "SD-WAN to depots"],
    benefits: ["Real-time visibility", "Higher throughput", "Lower spoilage"],
    caseStudy: { title: "IoT visibility across cold-chain network", metric: "27% lower spoilage" },
  },
  {
    id: "telecom", icon: Antenna, name: "Telecom",
    challenges: ["Edge computing scale", "Network automation", "Carrier-grade SLA"],
    solutions: ["Edge fabric design", "Network automation playbooks", "Carrier SOC"],
    benefits: ["Faster service rollout", "Lower OPEX", "Improved availability"],
    caseStudy: { title: "Edge automation for a regional carrier", metric: "55% faster provisioning" },
  },
  {
    id: "real-estate", icon: Home, name: "Real Estate",
    challenges: ["Smart-building integration", "Multi-tenant security", "Sustainability reporting"],
    solutions: ["Building IoT platforms", "Tenant network isolation", "Energy analytics"],
    benefits: ["Lower energy cost", "Higher tenant retention", "Compliance-ready reporting"],
    caseStudy: { title: "Smart-building platform for a 30-tower portfolio", metric: "23% energy savings" },
  },
];

function IndustriesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep pt-36 pb-24 text-white">
        <img src={industriesHero} alt="Global enterprise network coverage" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep" />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-20" />
        <Container className="relative">
          <Eyebrow><span className="text-cyan-accent">Industries</span></Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.9 }}
            className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl"
          >
            Built for the <span className="text-gradient-hero">realities</span> of your industry.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Reference architectures, compliance posture and operating models tuned for the constraints and opportunities of each sector.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((it) => (
              <a key={it.id} href={`#${it.id}`} className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur transition-colors hover:bg-white/10">
                <it.icon className="h-4 w-4 text-cyan-accent" />
                <span className="text-sm text-white/85 group-hover:text-white">{it.name}</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-white">
        {industries.map((it, i) => (
          <IndustrySection key={it.id} ind={it} alt={i % 2 === 1} />
        ))}
      </div>

      <section className="py-24">
        <Container>
          <div className="rounded-3xl bg-navy-deep p-12 text-white lg:p-16">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <Eyebrow><span className="text-cyan-accent">Industry briefing</span></Eyebrow>
                <h2 className="mt-5 font-display text-3xl font-semibold md:text-4xl">Get a tailored briefing for your sector.</h2>
                <p className="mt-4 text-white/70 max-w-xl">Reference architectures, benchmarks and a clear 90-day plan — built around your industry.</p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <CTAButton to="/contact" variant="cta">Request Briefing</CTAButton>
                <CTAButton to="/solutions" variant="secondary">View Solutions</CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function IndustrySection({ ind, alt }: { ind: Industry; alt: boolean }) {
  return (
    <section id={ind.id} className={`scroll-mt-28 py-24 ${alt ? "bg-surface" : "bg-white"}`}>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-deep to-royal text-white shadow-elevated">
              <ind.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold text-navy-deep md:text-4xl">{ind.name}</h2>
            <p className="mt-4 text-muted-foreground">Engineered for the operating realities, regulatory pressure and customer expectations specific to {ind.name.toLowerCase()}.</p>

            <div className="mt-8 rounded-2xl border border-royal/20 bg-gradient-to-br from-royal/[0.05] to-cyan-accent/[0.05] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Featured case study</div>
              <h4 className="mt-2 font-display text-lg font-semibold text-navy-deep">{ind.caseStudy.title}</h4>
              <div className="mt-2 text-sm text-ink">{ind.caseStudy.metric}</div>
              <a href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">
                Request full study <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { label: "Industry Challenges", items: ind.challenges, tone: "navy" as const },
                { label: "Our Solutions", items: ind.solutions, tone: "royal" as const },
                { label: "Benefits", items: ind.benefits, tone: "cyan" as const },
              ].map((col) => (
                <div key={col.label} className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">{col.label}</div>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <CTAButton to="/contact" variant="primary">Discuss your {ind.name} environment</CTAButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
