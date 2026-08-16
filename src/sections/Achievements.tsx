import { Radar } from "lucide-react";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { achievement } from "../data/content";

export default function Achievements() {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();

  return (
    <section className="border-b border-mist-100/[0.06] py-[clamp(2.5rem,4vw,3.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            className="glass-card bracket-frame relative overflow-hidden rounded-2xl border-signal/20 bg-gradient-to-br from-signal-soft via-ink-900/40 to-ink-900/40 p-6 sm:p-7"
          >
            <span className="bracket-tr" aria-hidden="true" />
            <span className="bracket-bl" aria-hidden="true" />
            <span className="glass-card-sheen" aria-hidden="true" />
            <div className="section-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative z-[1] flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-signal/30 bg-ink-950/60">
                  <Radar className="h-6 w-6 text-signal-bright" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-signal-bright sm:text-4xl">
                    {achievement.value}
                  </p>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.2em] text-mist-400">
                    {achievement.label}
                  </p>
                </div>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-mist-300 sm:text-right">
                {achievement.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
