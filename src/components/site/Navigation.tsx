import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Phone, Mail, Globe2 } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Solutions", to: "/solutions", dropdown: [
      "Enterprise Infrastructure",
      "Networking",
      "Cybersecurity",
      "Cloud",
      "Data Centre",
      "Managed Services",
      "Collaboration",
      "IT Consulting",
    ]
  },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Corporate utility bar */}
      <div className="hidden border-b border-white/10 bg-navy-deep text-white lg:block">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-6 text-[11px] lg:px-10">
          <div className="flex items-center gap-6 text-white/70">
            <span className="inline-flex items-center gap-2"><Globe2 className="h-3 w-3 text-cyan-accent" /> Global presence · 24 cities</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-3 w-3 text-cyan-accent" /> hello@karellglobal.com</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+18005550199" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Phone className="h-3 w-3 text-cyan-accent" /> 24×7 NOC · +1 (800) 555-0199
            </a>
            <a href="#" className="text-white/60 hover:text-white">Partners</a>
            <a href="#" className="text-white/60 hover:text-white">Careers</a>
            <a href="#" className="text-white/60 hover:text-white">Support</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={cn(
        "border-b bg-white transition-shadow duration-300",
        scrolled ? "border-black/[0.08] shadow-soft" : "border-black/[0.05]"
      )}>
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
          <Logo variant="header" />

          <nav className="hidden items-center lg:flex">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <div key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className={cn(
                      "relative inline-flex items-center gap-1 px-4 py-6 text-[13px] font-medium tracking-wide transition-colors",
                      active ? "text-navy-deep" : "text-ink/75 hover:text-navy-deep"
                    )}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-3 w-3 opacity-60" />}
                    {active && <span className="absolute inset-x-4 bottom-0 h-[2px] bg-royal" />}
                  </Link>
                  {item.dropdown && (
                    <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded border border-black/[0.06] bg-white shadow-elevated">
                        {item.dropdown.map((d) => (
                          <Link
                            key={d}
                            to="/solutions"
                            hash={d.toLowerCase().replace(/\s+/g, "-")}
                            className="block border-l-2 border-transparent px-5 py-2.5 text-[13px] text-ink transition-colors hover:border-royal hover:bg-surface hover:text-navy-deep"
                          >
                            {d}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-royal"
            >
              Talk to an Expert
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-black/10 text-navy-deep lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-black/5 bg-white lg:hidden">
          <div className="px-6 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block border-b border-black/5 px-1 py-3 text-[14px] font-medium text-ink last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-3 inline-flex w-full items-center justify-center rounded-sm bg-navy-deep px-5 py-3 text-[13px] font-semibold text-white">
              Talk to an Expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
