"use client";

import { motion } from "framer-motion";
import {
  Server, Network, ShieldCheck, Cloud, Database, Wrench, Users, Monitor,
  CheckCircle2, Building2, HeartPulse, GraduationCap, Landmark, ShoppingBag,
  Banknote, Hotel, Truck, Quote, ArrowRight, Sparkles, Globe2, Award, Zap, ShieldHalf, Cpu
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionTitle, Eyebrow } from "@/components/section-title";
import { CTAButton } from "@/components/cta-button";
import { Counter } from "@/components/counter";


const services = [
  { icon: Server, title: "Enterprise Infrastructure", desc: "Compute, storage and server platforms engineered for mission-critical workloads." },
  { icon: Network, title: "Networking", desc: "SD-WAN, campus and data-centre fabrics built for performance and resilience." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Zero-trust architectures, SOC, threat detection and incident response." },
  { icon: Cloud, title: "Cloud", desc: "Hybrid and multi-cloud strategy, migration and FinOps optimization." },
  { icon: Database, title: "Data Centre", desc: "Design, build and modernization of resilient enterprise data centres." },
  { icon: Wrench, title: "Managed Services", desc: "24×7 NOC/SOC, proactive monitoring and lifecycle management." },
  { icon: Users, title: "IT Consulting", desc: "Strategic roadmaps, architecture reviews and digital transformation." },
  { icon: Monitor, title: "Collaboration", desc: "Unified communications, video, AV and modern digital workplace." },
];

const oems = [
  "Cisco","Dell EMC","HPE","Microsoft","VMware","Palo Alto","Fortinet","Juniper","Veeam","NetApp","Aruba","Check Point","CrowdStrike","Nutanix","IBM","Lenovo",
];

const industries = [
  { icon: Building2, name: "Manufacturing" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Government" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Banknote, name: "BFSI" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Truck, name: "Logistics" },
];

const reasons = [
  { icon: ShieldHalf, title: "Enterprise-Grade Engineering", desc: "Architectures designed to NIST, ISO 27001 and CIS benchmarks." },
  { icon: Globe2, title: "Global Delivery Capability", desc: "Engineers and partners across 24+ cities and four continents." },
  { icon: Cpu, title: "Multi-OEM Expertise", desc: "Certified competency across 30+ leading technology partners." },
  { icon: Zap, title: "Speed of Execution", desc: "Pre-engineered playbooks accelerate time-to-value by up to 60%." },
  { icon: Award, title: "Outcome-Driven", desc: "SLAs aligned to business KPIs, not vanity infrastructure metrics." },
  { icon: Sparkles, title: "Future-Ready Stack", desc: "AI, automation and zero-trust embedded from day one." },
];

const lifecycle = [
  { step: "01", title: "Consultation", desc: "Discovery, business outcomes and architecture audit." },
  { step: "02", title: "Planning", desc: "Roadmap, BOM, risk register and success metrics." },
  { step: "03", title: "Design", desc: "Low-level design, HA topology, security baseline." },
  { step: "04", title: "Implementation", desc: "Staged rollout with zero-disruption methodology." },
  { step: "05", title: "Support", desc: "24×7 NOC/SOC, patching and lifecycle management." },
  { step: "06", title: "Optimization", desc: "Continuous tuning, FinOps and modernization." },
];

const cases = [
  { sector: "BFSI", title: "Zero-Trust transformation for a top-5 regional bank", metric: "62% fewer security incidents", color: "from-royal/90 to-navy-deep" },
  { sector: "Manufacturing", title: "Smart-factory network across 14 plants", metric: "99.99% uptime SLA achieved", color: "from-navy-deep to-cyan-accent/70" },
  { sector: "Healthcare", title: "Hybrid-cloud EMR for a 1,200-bed hospital group", metric: "3× faster clinician workflows", color: "from-cyan-accent/80 to-royal" },
];

const testimonials = [
  { quote: "Karell didn't just deliver infrastructure — they reshaped how our IT organization thinks about resilience and scale.", name: "Aarav Mehta", role: "Group CIO, Global Manufacturing" },
  { quote: "Their zero-trust rollout was the most disciplined enterprise program we have run in a decade.", name: "Sara Iqbal", role: "CISO, Regional Bank" },
  { quote: "A real partner. Engineering depth that you usually only see inside hyperscalers.", name: "James Carter", role: "VP Infrastructure, Healthcare" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <OemPartners />
      <Industries />
      <WhyKarell />
      <Lifecycle />
      <CaseStudies />
      <Testimonials />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      {/* Photographic backdrop */}
      <img
        src="/images/hero-datacenter.jpg"
        alt="Karell Global enterprise data centre"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/50" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep" />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-15" />

      <Container className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 border-l-2 border-cyan-accent pl-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-accent"
            >
              Enterprise IT · Cybersecurity · Cloud
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-3xl font-display text-[44px] font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              Engineering the digital backbone of the modern enterprise.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              Karell Global is a trusted system integrator delivering infrastructure, cybersecurity, cloud and managed services to global organizations — engineered to enterprise standards, operated 24×7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <CTAButton href="/contact" variant="primary">Schedule a Consultation</CTAButton>
              <CTAButton href="/solutions" variant="secondary">Explore Solutions</CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded border border-white/10 bg-white/5 text-xs"
            >
              {[
                { l: "ISO 27001", s: "Aligned" },
                { l: "24×7", s: "NOC & SOC" },
                { l: "30+", s: "OEM partners" },
              ].map((b) => (
                <div key={b.l} className="bg-navy-deep/60 px-4 py-3">
                  <div className="font-display text-sm font-semibold text-white">{b.l}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/55">{b.s}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="overflow-hidden rounded border border-white/10 bg-white/[0.04] backdrop-blur"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-accent/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-accent" />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">Global Operations · Live</span>
                </div>
                <span className="text-[11px] text-white/40">v 2026.1</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                {[
                  { icon: ShieldCheck, label: "Threats blocked / mo", value: "2.4M" },
                  { icon: Cloud, label: "Workloads migrated", value: "18k+" },
                  { icon: Network, label: "Sites under management", value: "1,200+" },
                  { icon: Server, label: "Availability SLA", value: "99.99%" },
                ].map((c) => (
                  <div key={c.label} className="p-6">
                    <c.icon className="h-4 w-4 text-cyan-accent" />
                    <div className="mt-5 font-display text-2xl font-semibold tracking-tight">{c.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/55">{c.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 bg-navy-deep/40 px-6 py-3 text-[11px] text-white/55">
                Updated continuously by the Karell Global NOC
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}


function TrustedBy() {
  const logos = ["CISCO", "DELL EMC", "HPE", "MICROSOFT", "VMWARE", "PALO ALTO", "FORTINET", "VEEAM", "NETAPP", "ARUBA", "JUNIPER", "CHECKPOINT"];
  return (
    <section className="border-y border-black/[0.05] bg-white py-12">
      <Container>
        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by enterprises · Partnered with leading technology brands
        </p>
        <div className="mt-8 overflow-hidden">
          <div className="marquee flex w-[200%] gap-16">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="flex shrink-0 items-center justify-center font-display text-lg font-semibold tracking-[0.18em] text-navy-deep/40 hover:text-navy-deep transition-colors">
                {l}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Enterprise Projects", value: 850, suffix: "+" },
    { label: "Clients Globally", value: 320, suffix: "+" },
    { label: "Cities Served", value: 24, suffix: "" },
    { label: "Years of Engineering", value: 18, suffix: "" },
    { label: "OEM Partners", value: 30, suffix: "+" },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-white">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title={<>End-to-end services for the <span className="text-royal">modern enterprise</span>.</>}
          description="From core infrastructure to the cloud edge, Karell engineers the systems that keep global businesses running, secure and ahead."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="/solutions"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-royal/5 transition-all duration-700 group-hover:scale-150 group-hover:bg-royal/10" aria-hidden />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep text-white shadow-soft transition-colors group-hover:bg-royal">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-royal">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OemPartners() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <SectionTitle
          eyebrow="OEM ecosystem"
          title="30+ certified technology partnerships."
          description="Vendor-neutral architecture, deep certifications, and direct OEM escalation paths — so you get the right outcome, not the easiest one."
          align="center"
        />
        <div className="mt-14 overflow-hidden">
          <div className="marquee flex w-[200%] gap-4">
            {[...oems, ...oems].map((o, i) => (
              <div key={i} className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-black/[0.05] bg-white font-display text-sm font-semibold tracking-wide text-navy-deep/70 shadow-soft">
                {o}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Industries"
          title="Engineered for the realities of your sector."
          description="Domain expertise across regulated, mission-critical and distributed enterprises."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-black/[0.06] bg-gradient-to-br from-white to-surface p-6 transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <it.icon className="h-7 w-7 text-royal transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-5 left-6 right-6">
                <div className="font-display text-base font-semibold text-navy-deep">{it.name}</div>
                <div className="mt-1 h-0.5 w-6 bg-royal transition-all duration-500 group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyKarell() {
  return (
    <section className="relative overflow-hidden bg-surface py-28">
      <div aria-hidden className="absolute inset-0 dot-bg opacity-60" />
      <Container className="relative">
        <SectionTitle
          eyebrow="Why Karell"
          title={<>The partner enterprises pick when <span className="text-royal">failure isn't an option.</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-navy-deep text-white">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-navy-deep">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Lifecycle() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Project lifecycle"
          title="A disciplined, predictable delivery model."
          description="Six structured phases that have shipped 850+ enterprise programs on time and on outcome."
        />
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-royal/40 to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {lifecycle.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-royal/20 bg-white font-display text-sm font-semibold text-royal shadow-soft">
                  {p.step}
                </div>
                <h4 className="mt-5 font-display text-base font-semibold text-navy-deep">{p.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="bg-surface py-28">
      <Container>
        <SectionTitle
          eyebrow="Case studies"
          title="Outcomes that move the business."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-navy-deep text-white shadow-elevated transition-transform duration-500 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-90 transition-opacity duration-500 group-hover:opacity-100`} />
              <div aria-hidden className="absolute inset-0 grid-bg opacity-25" />
              <div className="relative flex h-full flex-col p-8">
                <span className="inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                  {c.sector}
                </span>
                <h3 className="mt-8 font-display text-2xl font-semibold leading-tight">{c.title}</h3>
                <div className="mt-auto pt-12">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/60">Outcome</div>
                  <div className="mt-2 font-display text-xl">{c.metric}</div>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan-accent">
                    Read case study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle eyebrow="Voices" title="What enterprise leaders say." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-soft"
            >
              <Quote className="h-6 w-6 text-royal/60" />
              <blockquote className="mt-5 text-base leading-relaxed text-ink">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-black/5 pt-5">
                <div className="font-display text-sm font-semibold text-navy-deep">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-12 text-white shadow-glow lg:p-20">
          <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
          <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--royal) 60%, transparent), transparent)" }} />
          <div aria-hidden className="absolute -bottom-24 -left-12 h-80 w-80 rounded-full" style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--cyan-accent) 35%, transparent), transparent)" }} />
          <div className="relative max-w-3xl">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              Let's build future-ready IT infrastructure — together.
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              Speak with a Karell solutions architect. We'll map your environment, identify the highest-impact moves, and put a roadmap on the table.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="/contact" variant="cta">Book a Consultation</CTAButton>
              <CTAButton href="/solutions" variant="secondary">View Solutions</CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
