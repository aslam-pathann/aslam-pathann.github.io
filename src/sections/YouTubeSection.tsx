import { Youtube, Play, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { profile } from "../data/content";

export default function YouTubeSection() {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();

  return (
    <section className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Community" title="Security Research on YouTube" />

        <Reveal delay={0.1}>
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            className="glass-card bracket-frame relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900/40 to-ink-950/40"
          >
            <span className="bracket-tr" aria-hidden="true" />
            <span className="bracket-bl" aria-hidden="true" />
            <span className="glass-card-sheen" aria-hidden="true" />
            <div className="section-grid absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative z-[1] flex flex-col items-center gap-5 p-7 text-center sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/10">
                <Youtube className="h-6 w-6 text-red-400" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="max-w-lg text-base leading-relaxed text-mist-300 sm:text-lg">
                Sharing cybersecurity learning, research, and security-focused content with the
                community.
              </p>
              <a
                href={profile.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="lift-hover group inline-flex items-center gap-2 rounded-full bg-mist-100 px-5 py-2.5 font-mono text-sm font-medium text-ink-950 hover:bg-white"
              >
                <Play className="h-4 w-4" aria-hidden="true" fill="currentColor" />
                Visit YouTube Channel
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
