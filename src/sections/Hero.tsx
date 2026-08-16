import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Linkedin, Trophy } from "lucide-react";
import ProfilePhoto from "../components/ProfilePhoto";
import { useGlassHover } from "../hooks/useGlassHover";
import { profile, statusItems } from "../data/content";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref: statusRef, onMouseMove: onStatusMove } = useGlassHover<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-mist-100/[0.06] pt-[clamp(6.5rem,11vw,8rem)] pb-[clamp(3rem,6vw,4.5rem)]"
    >
      {/* Centered ambient glow — unifies the composition instead of scattering
          light in the corners of two separate columns */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-violet/20 opacity-25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[10%] top-10 h-[300px] w-[300px] rounded-full bg-cyan/20 opacity-20 blur-[110px]"
        aria-hidden="true"
      />

      {/* Subtle scanline sweep — the site's signature ambient motion, disabled for reduced motion */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-signal/[0.06] to-transparent animate-scanline"
          aria-hidden="true"
        />
      )}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* One unified glass "stage" — identity and photo read as a single
            composition rather than two loosely floating columns */}
        <div className="glass-card rounded-[28px] p-6 sm:p-9 lg:p-11">
          <span className="glass-card-sheen" aria-hidden="true" />
          <div className="relative z-[1] grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-mist-100/10 bg-mist-100/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist-400">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-bright animate-blink" aria-hidden="true" />
                Available for responsible disclosure &amp; research
              </div>

              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] text-mist-100 sm:text-5xl lg:text-[3.4rem] text-balance">
                {profile.name}
              </h1>

              <p className="mt-3 font-display text-xl font-medium text-signal-bright sm:text-2xl">
                {profile.primaryTitle}
              </p>

              <p className="mt-2.5 font-mono text-xs uppercase tracking-[0.14em] text-mist-500 sm:text-[13px]">
                {profile.tagline}
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
                {profile.heroDescription}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#focus"
                  className="lift-hover btn-primary group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm font-semibold"
                >
                  View Security Research
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift-hover btn-secondary inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  Connect on LinkedIn
                </a>
                <a
                  href="#hall-of-fame"
                  className="btn-ghost lift-hover inline-flex items-center gap-2 px-2 py-2.5 font-mono text-sm"
                >
                  <Trophy className="h-4 w-4" aria-hidden="true" />
                  Explore Hall of Fame
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5"
            >
              <ProfilePhoto />

              <div
                ref={statusRef}
                onMouseMove={onStatusMove}
                className="glass-card w-full max-w-[320px] rounded-2xl p-4"
              >
                <span className="glass-card-sheen" aria-hidden="true" />
                <div className="relative z-[1] flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist-500">
                    Security Researcher
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-signal-bright">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-bright animate-blink" aria-hidden="true" />
                    active
                  </span>
                </div>
                <ul className="relative z-[1] mt-3 space-y-1.5">
                  {statusItems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-mist-300">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-signal/70" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
