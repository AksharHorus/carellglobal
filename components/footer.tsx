import Link from "next/link";
import { ArrowRight, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { footerIndustries, footerServices } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="footer" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Enterprise IT infrastructure, cybersecurity, cloud and digital transformation for
              organizations that need reliability at scale.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/75">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-accent" />
                Global HQ — Dubai · India · APAC
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-accent" />
                +1 (800) 555-0100
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-accent" />
                hello@karellglobal.com
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-5 lg:grid-cols-2">
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                Services
              </h4>
              <ul className="mt-5 space-y-3">
                {footerServices.map((item) => (
                  <li key={item}>
                    <Link href="/solutions" className="text-sm text-white/65 transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                Industries
              </h4>
              <ul className="mt-5 space-y-3">
                {footerIndustries.map((item) => (
                  <li key={item}>
                    <Link href="/industries" className="text-sm text-white/65 transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-white/65">
              Monthly insights on infrastructure, security and cloud operations.
            </p>
            <form className="mt-5 flex overflow-hidden rounded-xl border border-white/15 bg-white/5 focus-within:border-cyan-accent/60">
              <input
                type="email"
                placeholder="work@company.com"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center px-4 text-white transition-colors hover:bg-white/10"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-accent">24×7 NOC</div>
              <div className="mt-2 font-display text-lg">Emergency Support</div>
              <a href="tel:+18005550199" className="mt-2 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                +1 (800) 555-0199
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/55 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Karell Global. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
