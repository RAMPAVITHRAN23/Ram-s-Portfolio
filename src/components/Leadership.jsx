import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { leadershipData } from '../data/portfolioData';

const ImpactCounter = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(count, item.value, {
      duration: reduceMotion ? 0 : 1.4,
      delay: reduceMotion ? 0 : index * 0.12,
      ease: 'easeOut',
    });
    return () => controls.stop();
  }, [count, inView, index, item.value, reduceMotion]);

  return (
    <div ref={ref} className="border-t border-white/15 pt-5">
      <p className="text-4xl md:text-5xl font-black tracking-tight text-[#ff5555] tabular-nums">
        <span aria-hidden="true"><motion.span>{roundedCount}</motion.span>{item.suffix}</span>
        <span className="sr-only">{item.value}{item.suffix}</span>
      </p>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">{item.label}</p>
    </div>
  );
};

const NetworkMotif = () => (
  <svg aria-hidden="true" viewBox="0 0 520 360" fill="none" className="absolute inset-0 h-full w-full opacity-70">
    <path d="M78 176 166 88l95 36 91-74 91 83-44 111-98 40-98-25-87 69-61-79 23-73Z" stroke="url(#leadership-lines)" strokeWidth="1.2" />
    <path d="m166 88 37 171 58-135 99 96 44-187-143 91-163 52 260-56" stroke="url(#leadership-lines)" strokeWidth="1" />
    <circle cx="78" cy="176" r="5" fill="#fff" />
    <circle cx="166" cy="88" r="7" fill="#ff5555" />
    <circle cx="261" cy="124" r="5" fill="#fff" />
    <circle cx="352" cy="50" r="8" fill="#ff5555" />
    <circle cx="443" cy="133" r="5" fill="#fff" />
    <circle cx="399" cy="244" r="7" fill="#ff5555" />
    <circle cx="301" cy="284" r="5" fill="#fff" />
    <circle cx="203" cy="259" r="6" fill="#ff5555" />
    <circle cx="116" cy="328" r="5" fill="#fff" />
    <defs>
      <linearGradient id="leadership-lines" x1="78" y1="50" x2="443" y2="328" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff5555" stopOpacity=".9" />
        <stop offset="1" stopColor="#fff" stopOpacity=".12" />
      </linearGradient>
    </defs>
  </svg>
);

const LeadershipCard = ({ role, index, reduceMotion }) => (
  <motion.article
    id={`role-${role.id}`}
    data-aos="fade-up"
    data-aos-delay={String((index % 3) * 90)}
    whileHover={reduceMotion ? undefined : { y: -7, rotateX: 2, rotateY: index % 2 ? -1 : 1 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    className={`relative min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] hover:border-red-300/35 hover:bg-white/[0.06] ${index % 3 === 1 ? 'md:translate-y-8' : ''}`}
  >
    <span aria-hidden="true" className="absolute -right-3 -top-10 font-serif text-[8rem] leading-none text-white/[0.035]">{String(index + 1).padStart(2, '0')}</span>
    <div className="relative flex h-full flex-col">
      <p className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-300/85">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,.8)]" />{role.category}
      </p>
      <h3 className="max-w-sm text-xl font-bold leading-tight text-white md:text-2xl">{role.title}</h3>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/45">{role.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-white/65">{role.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">{role.badge}</span>
        {role.verificationNote && <span className="rounded-full border border-amber-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber-200">Role to verify</span>}
      </div>
    </div>
  </motion.article>
);

const Leadership = () => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const orbitTilt = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-7, 7]);
  const orbitLift = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [18, -18]);

  return (
    <section ref={sectionRef} id="leadership" className="relative isolate overflow-hidden bg-[#090b0d] px-6 py-28 font-sans text-white md:px-12 md:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_9%,rgba(127,29,29,.22),transparent_38%),linear-gradient(180deg,#090b0d,#0c0d10_48%,#08090b)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="mx-auto max-w-7xl">
        <header className="grid items-end gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div data-aos="fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-red-300">{leadershipData.intro.eyebrow} / IEEE</p>
            <h2 className="text-5xl font-black leading-[.92] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block">LEADERSHIP</span>
              <span className="mt-3 block font-serif text-4xl font-normal italic text-white/75 sm:text-6xl lg:text-7xl">{leadershipData.intro.headline}</span>
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="120" className="max-w-xl border-l border-red-400/60 pl-5 text-base leading-relaxed text-white/60 md:text-lg">{leadershipData.intro.description}</p>
        </header>

        <div className="mt-20 grid items-center gap-10 lg:mt-28 lg:grid-cols-[1fr_.8fr]">
          <div className="relative mx-auto aspect-[1.3/1] w-full max-w-[620px]" style={{ perspective: '1200px' }}>
            <motion.div style={{ rotateY: orbitTilt, y: orbitLift, transformStyle: 'preserve-3d' }} className="absolute inset-0" aria-hidden="true"><NetworkMotif /></motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute left-1/2 top-1/2 w-[min(78%,390px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-[#101316]/85 p-6 shadow-[0_35px_100px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl font-black tracking-[0.2em] text-white">{leadershipData.identity.organization}</span>
                <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_5px_rgba(248,113,113,.35)]" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-red-300">{leadershipData.identity.descriptor}</p>
              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">{leadershipData.identity.role}</h3>
              <p className="mt-2 text-sm text-white/65">{leadershipData.identity.branch}</p>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                <span>{leadershipData.identity.period}</span><span>Student Branch</span>
              </div>
            </motion.div>
          </div>
          <div className="max-w-xl lg:pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/35">A community built together</p>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{leadershipData.identity.description}</p>
            <a href="#leadership-roles" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-white transition-colors hover:text-red-300">Explore the journey <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-3 md:mt-32 md:gap-12">
          {leadershipData.impact.map((item, index) => <ImpactCounter key={item.label} item={item} index={index} />)}
        </div>

        <div className="mt-32 md:mt-44">
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-red-300">The journey</p><h3 className="text-3xl font-black tracking-tight md:text-5xl">Milestones, not titles.</h3></div>
            <p className="max-w-md text-sm leading-relaxed text-white/45">A few markers in a wider story of volunteering, student leadership, recognition, and technical contribution.</p>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute left-3 top-4 hidden h-px w-[calc(100%-24px)] bg-gradient-to-r from-red-400/80 via-white/20 to-red-400/50 lg:block" />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leadershipData.milestones.map((milestone, index) => (
                <li key={`${milestone.year}-${milestone.title}`} data-aos="fade-up" data-aos-delay={String(index * 90)} className="relative pt-8">
                  <span aria-hidden="true" className="absolute left-0 top-0 h-6 w-6 rounded-full border border-red-300/50 bg-[#090b0d] p-[6px]"><span className="block h-full w-full rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,.8)]" /></span>
                  <p className="font-mono text-xs font-bold tracking-[0.18em] text-red-300">{milestone.year}</p>
                  <h4 className="mt-3 text-lg font-bold text-white">{milestone.title}</h4>
                  <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/40">{milestone.detail}</p>
                  <a href={milestone.href} className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-red-300">View detail <span className="ml-2" aria-hidden="true">↗</span></a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div id="leadership-roles" className="mt-32 scroll-mt-24 md:mt-44">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-red-300">IEEE / Community / Programmes</p><h3 className="text-3xl font-black tracking-tight md:text-5xl">A constellation of roles.</h3></div>
            <p className="text-sm leading-relaxed text-white/50">Branch leadership, section volunteering, technical programmes, creative work, and community coordination.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {leadershipData.roles.map((role, index) => <LeadershipCard key={role.id} role={role} index={index} reduceMotion={reduceMotion} />)}
          </div>
        </div>

        <div className="mt-32 border-y border-white/10 py-16 md:mt-44 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-red-300">Leadership × Technology</p><h3 className="text-3xl font-black leading-tight md:text-5xl">Teams that make things.</h3><p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">Technical contribution documented alongside the leadership journey.</p></div>
            <div className="relative grid gap-4 sm:grid-cols-3">
              <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-gradient-to-r from-white/10 via-red-300/60 to-white/10 sm:block" />
              {leadershipData.technicalContributions.map((item, index) => (
                <a key={item.roleId} href={`#role-${item.roleId}`} className="group relative rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all hover:-translate-y-1 hover:border-red-300/35 hover:bg-white/[0.05]">
                  <span aria-hidden="true" className="relative mb-5 flex h-3 w-3 rounded-full border border-red-300 bg-[#090b0d] shadow-[0_0_12px_rgba(248,113,113,.5)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/35">0{index + 1} / TECH</span>
                  <h4 className="mt-3 text-lg font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.contribution}</p>
                  <span className="mt-5 inline-block text-xs font-bold text-red-300">See role ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-28 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-red-300">Invited & Guest</p><h3 className="text-3xl font-black tracking-tight md:text-5xl">A seat in the room.</h3><p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">Only documented invitations are included here; no event names or appearances have been inferred.</p></div>
          {leadershipData.appearances.map((appearance) => (
            <article key={appearance.id} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 md:p-10">
              <div aria-hidden="true" className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-red-300/15" /><div aria-hidden="true" className="absolute -right-2 -top-10 h-44 w-44 rounded-full border border-white/10" />
              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-red-300">{appearance.role}</p><h4 className="relative mt-4 text-2xl font-black md:text-4xl">{appearance.event}</h4><p className="relative mt-3 max-w-lg text-sm leading-relaxed text-white/60">{appearance.detail}</p>
            </article>
          ))}
        </div> */}

        <div className="mt-28 border-t border-white/10 pt-14 md:mt-36">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-red-300">Recognition wall</p><h3 className="text-2xl font-black md:text-3xl">The moments behind the milestones.</h3></div>
            <p className="max-w-md text-xs leading-relaxed text-white/40">Frames are intentionally empty until real photos or certificates are added.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {leadershipData.assets.map((asset) => <div key={asset.id} className="flex aspect-[4/3] flex-col justify-between border border-dashed border-white/20 bg-white/[0.02] p-3"><span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">{asset.category}</span><span className="text-xs font-semibold leading-snug text-white/55">{asset.label}</span><span className="text-[9px] font-bold uppercase tracking-[0.16em] text-red-300"></span></div>)}
          </div>
        </div>

        <footer className="py-24 text-center md:py-36">
          <p data-aos="fade-up" className="text-3xl font-black leading-tight sm:text-5xl md:text-6xl">Leadership was never just a title.</p>
          <p data-aos="fade-up" data-aos-delay="100" className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-xl">It was about building people, teams, platforms, and opportunities.</p>
          <p className="mt-10 font-mono text-xs font-bold uppercase tracking-[0.28em] text-red-300">IEEE <span className="px-2 text-white/25">•</span> Leadership <span className="px-2 text-white/25">•</span> Impact</p>
          <a href="#leadership-awards" className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/65 transition-all hover:border-red-300/50 hover:text-white">View recognition <span aria-hidden="true">↓</span></a>
        </footer>
      </div>
    </section>
  );
};

export default Leadership;