import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Compass, Target, Eye, ShieldCheck, Sparkles, Users, Globe2 } from "lucide-react";
import { Container } from "@/components/site/Container";
import { SectionTitle, Eyebrow } from "@/components/site/SectionTitle";
import { CTAButton } from "@/components/site/CTAButton";
import aboutHero from "@/assets/about-team.jpg";
import { buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildPageSeo({
      path: "/about",
      title: "About Karell Global — Enterprise IT Engineered for Trust",
      description:
        "The story, mission and engineering culture behind Karell Global, a trusted enterprise IT infrastructure partner.",
      ogTitle: "About Karell Global",
      ogDescription: "Engineering culture, mission and leadership behind Karell Global.",
      image: "/og/about.jpg",
    }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We do what we say. Documented, auditable, every time." },
  { icon: Sparkles, title: "Engineering Excellence", desc: "Architecture before activity. Quality is the only acceptable speed." },
  { icon: Users, title: "Customer Obsession", desc: "Your outcomes define ours. SLAs tied to business KPIs." },
  { icon: Globe2, title: "Global Mindset", desc: "Local presence, global standards, multi-region delivery." },
];

const timeline = [
  { year: "2007", title: "Founded", desc: "Karell Global incorporated as an enterprise infrastructure specialist." },
  { year: "2012", title: "Data centre practice", desc: "Built our first Tier-III data centre engagements." },
  { year: "2016", title: "Cybersecurity SOC", desc: "Launched 24×7 Security Operations Centre." },
  { year: "2019", title: "Cloud + FinOps", desc: "Multi-cloud transformation practice goes live." },
  { year: "2022", title: "Global expansion", desc: "Engineering teams across APAC, EMEA and the Americas." },
  { year: "2025", title: "AI & Zero-Trust", desc: "Embedded AI ops and zero-trust into every reference architecture." },
];

const leaders = [
  { name: "Rohan Karell", role: "Founder & Chief Executive" },
  { name: "Ananya Verma", role: "Chief Technology Officer" },
  { name: "Marcus Lee", role: "Chief Information Security Officer" },
  { name: "Diana Okafor", role: "Chief Customer Officer" },
];

const certs = ["ISO 27001", "ISO 9001", "SOC 2 Type II", "PCI DSS", "NIST CSF", "CIS Controls"];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep pt-36 pb-24 text-white">
        <img src={aboutHero} alt="Karell Global leadership and engineering team" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep" />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-20" />
        <Container className="relative">
          <Eyebrow><span className="text-cyan-accent">About Karell Global</span></Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.9 }}
            className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl"
          >
            An <span className="text-gradient-hero">engineering company</span> that happens to deliver enterprise IT.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/75"
          >
            For nearly two decades, Karell has been the partner that global organizations call when the environment must work — under pressure, at scale, without compromise.
          </motion.p>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Target, eyebrow: "Mission", title: "Engineer the digital backbone of the modern enterprise.", desc: "We bring deep technical craft and disciplined delivery to the most demanding IT environments in the world." },
              { icon: Eye, eyebrow: "Vision", title: "Be the world's most trusted enterprise IT partner.", desc: "Known for engineering integrity, multi-OEM mastery, and outcomes that hold up over decades." },
            ].map((c, i) => (
              <motion.div
                key={c.eyebrow}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl border border-black/[0.06] bg-white p-10 shadow-soft"
              >
                <c.icon className="h-7 w-7 text-royal" />
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-royal">{c.eyebrow}</div>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-deep md:text-3xl">{c.title}</h2>
                <p className="mt-4 text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface py-24">
        <Container>
          <SectionTitle eyebrow="Core values" title="The principles we engineer by." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <v.icon className="h-6 w-6 text-royal" />
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-deep">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <Container>
          <SectionTitle eyebrow="Our journey" title="Eighteen years of engineering trust." />
          <div className="relative mt-14">
            <div aria-hidden className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-royal/40 via-royal/15 to-transparent md:left-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col gap-4 pl-12 md:flex-row md:items-center md:pl-0 ${i % 2 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-royal/30 bg-white text-[10px] font-semibold text-royal shadow-soft md:left-1/2 md:-translate-x-1/2">
                    <Compass className="h-3.5 w-3.5" />
                  </div>
                  <div className="md:w-1/2 md:px-10">
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft">
                      <div className="font-display text-sm font-semibold tracking-[0.2em] text-royal">{t.year}</div>
                      <h4 className="mt-2 font-display text-lg font-semibold text-navy-deep">{t.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-surface py-24">
        <Container>
          <SectionTitle eyebrow="Leadership" title="Operators who've actually built things." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-soft"
              >
                <div className="relative aspect-[4/5] bg-gradient-to-br from-navy-deep via-royal to-cyan-accent">
                  <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-6">
                    <span className="font-display text-5xl font-semibold text-white/30">{l.name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-display text-base font-semibold text-navy-deep">{l.name}</div>
                  <div className="text-xs text-muted-foreground">{l.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <Container>
          <SectionTitle eyebrow="Certifications" title="Audited. Accredited. Accountable." />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {certs.map((c) => (
              <div key={c} className="flex items-center justify-center gap-2 rounded-xl border border-black/[0.06] bg-white px-4 py-6 text-sm font-semibold text-navy-deep shadow-soft">
                <Award className="h-4 w-4 text-royal" /> {c}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-navy-deep p-12 text-white lg:p-16">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <Eyebrow><span className="text-cyan-accent">Let's talk</span></Eyebrow>
                <h2 className="mt-5 font-display text-3xl font-semibold md:text-4xl">Bring us your hardest infrastructure problem.</h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <CTAButton to="/contact" variant="cta">Contact Karell</CTAButton>
                <CTAButton to="/solutions" variant="secondary">Our Solutions</CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
