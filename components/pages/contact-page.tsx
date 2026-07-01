"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, ShieldAlert, ChevronDown } from "lucide-react";
import { Container } from "@/components/container";
import { SectionTitle, Eyebrow } from "@/components/section-title";
import { CTAButton } from "@/components/cta-button";


const offices = [
  { city: "Dubai", region: "Global HQ — EMEA", addr: "Sheikh Zayed Rd, Dubai, UAE", phone: "+971 4 555 0100" },
  { city: "Mumbai", region: "APAC", addr: "BKC, Mumbai, India", phone: "+91 22 5555 0100" },
  { city: "Singapore", region: "APAC", addr: "Marina Bay, Singapore", phone: "+65 6555 0100" },
  { city: "New York", region: "Americas", addr: "Madison Ave, NY 10016", phone: "+1 212 555 0100" },
];

const faqs = [
  { q: "How quickly can Karell engage?", a: "For most enterprise discovery engagements, a senior architect is on a call within 48 hours of intake." },
  { q: "Do you work vendor-neutral?", a: "Yes. We hold 30+ OEM certifications and recommend the right architecture, not the easiest one to source." },
  { q: "What does a managed services engagement look like?", a: "A short transition phase, then 24×7 NOC/SOC under contracted SLAs with quarterly business reviews." },
  { q: "Can you support multi-region delivery?", a: "Yes — delivery teams operate across APAC, EMEA and the Americas, with follow-the-sun coverage." },
  { q: "How is pricing structured?", a: "Project-based for transformations, subscription-based for managed services. Always transparent, never per-ticket." },
  { q: "Do you sign enterprise MSAs and NDAs?", a: "Standard. Our legal team can turn most enterprise paper in under two weeks." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep pt-36 pb-24 text-white">
        <img src="/images/contact-noc.jpg" alt="Karell Global 24x7 Network Operations Center" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep" />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-20" />
        <Container className="relative">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow><span className="text-cyan-accent">Let's talk</span></Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                transition={{ duration: 0.9 }}
                className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl"
              >
                Talk to an enterprise IT <span className="text-gradient-hero">expert.</span>
              </motion.h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Share a few details and a senior Karell architect — not a sales rep — will reach back within one business day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="https://wa.me/97145550100" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10">
                <MessageCircle className="h-4 w-4 text-cyan-accent" /> WhatsApp Chat
              </a>
              <a href="#book" className="inline-flex items-center gap-2 rounded-xl bg-cta-gradient px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.55)] hover:-translate-y-0.5 transition-transform">
                <Calendar className="h-4 w-4" /> Book a Meeting
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <motion.form
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 rounded-3xl border border-black/[0.06] bg-white p-8 shadow-soft md:p-10"
              onSubmit={(e) => { e.preventDefault(); alert("Thanks — a Karell architect will reach out shortly."); }}
              id="book"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-deep md:text-3xl">Tell us about your environment</h2>
              <p className="mt-2 text-sm text-muted-foreground">All fields are confidential. We'll respond within 1 business day.</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Full name" placeholder="Jane Doe" />
                <Field label="Work email" type="email" placeholder="jane@company.com" />
                <Field label="Company" placeholder="Acme Industries" />
                <Field label="Role" placeholder="Director of IT" />
                <Field label="Country" placeholder="United Arab Emirates" />
                <SelectField label="Interest" options={["Enterprise Infrastructure","Networking","Cybersecurity","Cloud","Data Centre","Managed Services","Other"]} />
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep">How can we help?</label>
                <textarea rows={5} className="mt-2 w-full rounded-xl border border-black/10 bg-surface/60 px-4 py-3 text-sm outline-none transition-colors focus:border-royal focus:bg-white" placeholder="Briefly describe your environment and goals…" />
              </div>
              <div className="mt-8 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">By submitting you agree to our privacy policy.</p>
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-navy-deep px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-royal hover:shadow-elevated">
                  Send message
                </button>
              </div>
            </motion.form>

            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl border border-black/[0.06] bg-white p-7 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Direct lines</div>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-royal" /> hello@karellglobal.com</li>
                  <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-royal" /> +1 (800) 555-0100</li>
                  <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-royal" /> Mon–Fri · 09:00–19:00 local</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-royal/20 bg-gradient-to-br from-navy-deep to-royal p-7 text-white">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 text-cyan-accent" />
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-accent">24×7 Emergency</div>
                </div>
                <h3 className="mt-4 font-display text-xl">Active incident or outage?</h3>
                <p className="mt-2 text-sm text-white/75">Our NOC/SOC is staffed around the clock. Existing customers — use your assigned incident hotline.</p>
                <a href="tel:+18005550199" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/15">
                  Call NOC · +1 (800) 555-0199
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-royal to-cyan-accent" />
                  <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-2xl bg-white/15 px-6 py-4 text-white backdrop-blur">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5" />
                        <div>
                          <div className="font-display text-sm font-semibold">Global HQ</div>
                          <div className="text-xs text-white/80">Sheikh Zayed Rd, Dubai, UAE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionTitle eyebrow="Offices" title="Local presence. Global standards." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-all"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-royal">{o.region}</div>
                <div className="mt-2 font-display text-xl font-semibold text-navy-deep">{o.city}</div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-royal" />{o.addr}</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-royal" />{o.phone}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTitle eyebrow="FAQs" title="Answers to what enterprise buyers ask first." />
          <div className="mt-12 mx-auto max-w-3xl space-y-3">
            {faqs.map((f, i) => <Faq key={i} {...f} />)}
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-black/10 bg-surface/60 px-4 py-3 text-sm outline-none transition-colors focus:border-royal focus:bg-white"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep">{label}</label>
      <select className="mt-2 w-full appearance-none rounded-xl border border-black/10 bg-surface/60 px-4 py-3 text-sm outline-none transition-colors focus:border-royal focus:bg-white">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border border-black/[0.06] bg-white px-6 transition-all ${open ? "shadow-elevated" : "shadow-soft"}`}>
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-base font-semibold text-navy-deep">{q}</span>
        <ChevronDown className={`h-4 w-4 text-royal transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}
