import { ShieldCheck, Linkedin, Youtube } from "lucide-react";
import { nav, profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist-100/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 font-display text-base font-semibold text-mist-100">
              <ShieldCheck className="h-5 w-5 text-signal" strokeWidth={1.75} aria-hidden="true" />
              {profile.name}
            </a>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-mist-500">
              {profile.primaryTitle}
            </p>
            <p className="mt-4 max-w-sm text-sm text-mist-400">
              Research responsibly. Learn continuously. Secure everything.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-mist-400 transition-colors hover:text-signal-bright">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-mist-500">Connect</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-mist-400 transition-colors hover:text-signal-bright"
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-mist-400 transition-colors hover:text-signal-bright"
                >
                  <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-mist-100/[0.06] pt-6 text-xs text-mist-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. Built for security research &amp; responsible disclosure.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-600">
            status: <span className="text-signal-bright">online</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
