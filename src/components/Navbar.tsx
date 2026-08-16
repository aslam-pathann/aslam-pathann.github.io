import { useEffect, useState } from "react";
import { Menu, X, Linkedin, ShieldCheck } from "lucide-react";
import { nav, profile } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink-950/75 backdrop-blur-xl border-b border-mist-100/[0.07]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-mist-100"
        >
          <ShieldCheck className="h-5 w-5 text-signal" strokeWidth={1.75} aria-hidden="true" />
          <span>
            ASLAM<span className="text-signal">.</span>PATHAN
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`rounded-full px-4 py-2 font-mono text-[13px] transition-colors ${
                  active === item.href
                    ? "text-signal-bright"
                    : "text-mist-400 hover:text-mist-100"
                }`}
                aria-current={active === item.href ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-mist-100/15 bg-mist-100/[0.03] px-4 py-2 font-mono text-[13px] text-mist-100 transition-colors hover:border-signal/40 hover:text-signal-bright"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist-100/15 text-mist-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-b border-mist-100/[0.07] bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 font-mono text-sm ${
                  active === item.href ? "text-signal-bright" : "text-mist-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-mist-100/15 px-4 py-3 font-mono text-sm text-mist-100"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
