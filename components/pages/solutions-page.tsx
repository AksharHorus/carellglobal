"use client";

import { motion } from "framer-motion";
import {
  Server, Network, ShieldCheck, Cloud, Database, HardDriveDownload, Layers,
  Wrench, Camera, Monitor, Users, Check, ArrowRight,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionTitle, Eyebrow } from "@/components/section-title";
import { CTAButton } from "@/components/cta-button";

type Sol = {
  id: string;
  icon: any;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: string[];
};

const solutions: Sol[] = [
  {
    id: "enterprise-infrastructure", icon: Server, title: "Enterprise Infrastructure",
    problem: "Legacy compute and storage stacks throttle business growth and create unpredictable downtime risk.",
    solution: "Modern, software-defined compute and storage platforms designed for high availability and linear scale.",
    benefits: ["Up to 99.999% availability", "30–50% lower TCO", "Predictable performance at scale", "Single-pane observability"],
    process: ["Architecture assessment", "Reference design & BOM", "Phased migration", "Lifecycle support"],
  },
  {
    id: "networking", icon: Network, title: "Networking",
    problem: "Branch, campus and cloud edges have diverged — leaving inconsistent performance and security policy.",
    solution: "Unified SD-WAN, campus and data-centre fabrics with centralised policy and segmentation.",
    benefits: ["Application-aware routing", "Zero-touch site rollout", "Encrypted east-west traffic", "Visibility from edge to cloud"],
    process: ["Discovery & traffic baseline", "Topology & policy design", "Cutover with zero downtime", "24×7 operations"],
  },
  {
    id: "cybersecurity", icon: ShieldCheck, title: "Cybersecurity",
    problem: "Perimeter-era controls don't survive a hybrid, identity-driven attack surface.",
    solution: "Zero-trust architecture spanning identity, endpoint, network, cloud and data — with a 24×7 SOC.",
    benefits: ["Continuous threat detection", "Mean-time-to-respond under 15 min", "Compliance-aligned controls", "Phishing & breach reduction"],
    process: ["Risk & maturity assessment", "Zero-trust roadmap", "Controls implementation", "SOC, IR & tabletop exercises"],
  },
  {
    id: "cloud", icon: Cloud, title: "Cloud",
    problem: "Cloud spend grows faster than business value, and migrations stall halfway through.",
    solution: "Hybrid and multi-cloud strategy, application modernization and FinOps-driven optimization.",
    benefits: ["Validated landing zones", "Up to 35% cost reduction", "Faster release velocity", "Resilient multi-region patterns"],
    process: ["Cloud readiness review", "Landing-zone build", "Migration waves", "Continuous FinOps"],
  },
  {
    id: "data-centre", icon: Database, title: "Data Centre",
    problem: "Aging facilities can't meet density, power and resilience demands of modern workloads.",
    solution: "Design, build and modernization of Tier-III/IV equivalent data centres with HCI and software-defined fabric.",
    benefits: ["Higher rack density", "Energy-efficient cooling", "DR & active-active design", "Vendor-neutral architecture"],
    process: ["Feasibility & site survey", "Design & engineering", "Build & commissioning", "Operations transition"],
  },
  {
    id: "backup", icon: HardDriveDownload, title: "Backup & DR",
    problem: "Recovery objectives are aspirational, not tested. Ransomware exposure is high.",
    solution: "Immutable backups, air-gapped copies, and validated DR runbooks tested every quarter.",
    benefits: ["RTO/RPO defined & tested", "Ransomware-resilient", "Cross-region replication", "Audit-ready evidence"],
    process: ["Data classification", "DR design", "Implementation", "Tabletop & live drills"],
  },
  {
    id: "virtualization", icon: Layers, title: "Virtualization",
    problem: "Hypervisor lock-in and complex licensing inflate cost and limit portability.",
    solution: "Modern HCI and container platforms aligned to your application portfolio.",
    benefits: ["License optimization", "Operational simplicity", "Container-ready", "Workload mobility"],
    process: ["Workload profiling", "Platform selection", "Cutover & validation", "Optimization"],
  },
  {
    id: "managed-services", icon: Wrench, title: "Managed Services",
    problem: "Internal teams firefight instead of innovating; vendor sprawl makes accountability fuzzy.",
    solution: "24×7 NOC/SOC with SLA-backed operations across infrastructure, network, security and cloud.",
    benefits: ["SLA-backed outcomes", "Single accountable partner", "Predictable OPEX", "Continuous improvement"],
    process: ["Transition & runbooks", "Operate & monitor", "Quarterly reviews", "Continuous optimization"],
  },
  {
    id: "physical-security", icon: Camera, title: "Physical Security",
    problem: "Physical and cyber security operate in silos — leaving blind spots and slow response.",
    solution: "Unified physical security: surveillance, access control and analytics, integrated with cyber SOC.",
    benefits: ["Unified incident view", "AI-based analytics", "Compliance-grade audit trails", "Faster response"],
    process: ["Site assessment", "System design", "Installation & integration", "Managed monitoring"],
  },
  {
    id: "collaboration", icon: Monitor, title: "Collaboration",
    problem: "Hybrid work tools are fragmented and underused, hurting productivity.",
    solution: "Unified communications, video, AV and modern workplace — secure by default.",
    benefits: ["Frictionless meetings", "Single identity & policy", "Enterprise-grade AV", "Higher adoption"],
    process: ["Workplace assessment", "Design & pilot", "Rollout & adoption", "Managed support"],
  },
  {
    id: "it-consulting", icon: Users, title: "IT Consulting",
    problem: "Transformation initiatives stall without an architecture-led, outcome-driven plan.",
    solution: "Architecture, advisory and program leadership from engineers who've built it before.",
    benefits: ["Outcome-aligned roadmap", "Risk-adjusted plan", "Independent advice", "Board-ready artifacts"],
    process: ["Discovery", "Roadmap", "Business case", "Execution oversight"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-mesh pt-36 pb-24 text-white">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
        <Container className="relative">
          <Eyebrow><span className="text-cyan-accent">Solutions</span></Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.9 }}
            className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl"
          >
            Eleven practices. One <span className="text-gradient-hero">engineering</span> standard.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Each Karell practice is led by senior engineers, validated against reference architectures, and operated under a single delivery model.
          </p>

          <div className="mt-12 flex flex-wrap gap-2">
            {solutions.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur transition-colors hover:bg-white/10 hover:text-white">
                {s.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-white">
        {solutions.map((s, i) => (
          <SolutionSection key={s.id} sol={s} alt={i % 2 === 1} />
        ))}
      </div>

      <section className="py-24">
        <Container>
          <div className="rounded-3xl bg-navy-deep p-12 text-white lg:p-16">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Not sure which solution fits?</h2>
            <p className="mt-4 max-w-2xl text-white/70">A 30-minute architecture call with a Karell senior engineer — no slideware, just a clear next step.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/contact" variant="cta">Book Architecture Call</CTAButton>
              <CTAButton href="/industries" variant="secondary">Browse by Industry</CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function SolutionSection({ sol, alt }: { sol: Sol; alt: boolean }) {
  return (
    <section id={sol.id} className={`scroll-mt-28 py-24 ${alt ? "bg-surface" : "bg-white"}`}>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-deep to-royal text-white shadow-elevated">
              <sol.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-navy-deep md:text-4xl">{sol.title}</h2>

            <div className="mt-8 space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Problem</div>
                <p className="mt-2 text-muted-foreground">{sol.problem}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Solution</div>
                <p className="mt-2 text-muted-foreground">{sol.solution}</p>
              </div>
            </div>

            <div className="mt-8">
              <CTAButton href="/contact" variant="primary">Talk to a specialist</CTAButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Benefits</div>
                <ul className="mt-5 space-y-3">
                  {sol.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Process</div>
                <ol className="mt-5 space-y-3">
                  {sol.process.map((p, i) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-deep text-[10px] font-semibold text-white">{i + 1}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-royal/20 bg-gradient-to-br from-royal/[0.04] to-cyan-accent/[0.05] p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Outcome</div>
                  <p className="mt-2 max-w-md text-sm text-ink">A reference architecture and engagement plan, sized to your environment, with measurable success criteria.</p>
                </div>
                <a href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-royal">
                  Start an engagement <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
