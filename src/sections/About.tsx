import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { profile } from "../data/content";

const interests = [
  "Web Application Security",
  "API Security Testing",
  "Bug Bounty Hunting",
  "AI Security — Learning",
  "Offensive Security",
];

export default function About() {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();

  return (
    <section id="about" className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title="Who is Aslam Pathan?" />

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-mist-200">{profile.aboutLong}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div ref={ref} onMouseMove={onMouseMove} className="glass-card rounded-2xl p-6">
              <span className="glass-card-sheen" aria-hidden="true" />
              <h3 className="relative z-[1] font-mono text-xs uppercase tracking-[0.2em] text-mist-500">
                Primary Interests
              </h3>
              <ul className="relative z-[1] mt-4 space-y-3">
                {interests.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-mist-100/[0.05] pb-3 text-sm text-mist-300 last:border-none last:pb-0"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
