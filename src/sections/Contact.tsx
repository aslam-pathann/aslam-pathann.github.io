import { Linkedin, Youtube, Trophy } from "lucide-react";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="section-grid bg-radial-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-mist-100/10 bg-mist-100/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist-400">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-bright animate-blink" aria-hidden="true" />
            Open to conversations
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold text-mist-100 sm:text-5xl text-balance">
            Let&rsquo;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-mist-300">
            Interested in cybersecurity, bug bounty research, responsible disclosure, or
            collaboration? Let&rsquo;s connect.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-mist-500">
            Have a security question, collaboration idea, or just want to say hello? Reach out on
            LinkedIn — that&rsquo;s the fastest way to reach {profile.name.split(" ")[0]}.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="lift-hover btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm font-semibold"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
            </a>
            <a
              href={profile.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="lift-hover btn-secondary inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              YouTube
            </a>
            <a
              href="#hall-of-fame"
              className="lift-hover btn-secondary inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm"
            >
              <Trophy className="h-4 w-4" aria-hidden="true" />
              View Hall of Fame
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
