// import { awards, socialLinks } from '../data/portfolioData';

// const AwardExhibit = ({ award, index }) => (
//   <article data-aos="fade-up" data-aos-delay={String(index * 120)} className="group relative flex min-h-[330px] min-w-[min(84vw,460px)] snap-center flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111316] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-red-300/35 hover:shadow-[0_30px_80px_rgba(0,0,0,.4)] md:min-h-[410px] md:p-10">
//     <div aria-hidden="true" className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70 bg-[radial-gradient(circle_at_50%_38%,rgba(127,29,29,.25),transparent_42%)]" />
//     <div aria-hidden="true" className="absolute left-1/2 top-[43%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110 md:h-48 md:w-48"><span className="absolute inset-3 rounded-full border border-red-300/25" /><span className="absolute inset-7 rounded-full border border-white/10" /><span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-300 shadow-[0_0_24px_8px_rgba(248,113,113,.2)]" /></div>
//     <header className="relative flex items-start justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Award / {String(index + 1).padStart(2, '0')}</span><span className="font-mono text-sm font-bold tracking-[0.16em] text-red-300">{award.year}</span></header>
//     <div className="relative mt-28 border-t border-white/10 pt-5 md:mt-36"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{award.category}</p><h3 className="max-w-sm text-2xl font-black leading-tight text-white md:text-3xl">{award.name}</h3>{award.detail && <p className="mt-3 text-sm leading-relaxed text-white/55">{award.detail}</p>}</div>
//   </article>
// );

// const Certificates = () => (
//   <section id="leadership-awards" className="relative overflow-hidden bg-[#0b0c0e] px-6 py-24 text-white md:px-12 md:py-32">
//     <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
//     <div className="relative mx-auto max-w-7xl">
//       <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_.7fr] md:items-end">
//         <div data-aos="fade-up"><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-red-300">Recognition / Exhibition</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Awards & Recognition</h2></div>
//         <p data-aos="fade-up" data-aos-delay="100" className="max-w-lg text-sm leading-relaxed text-white/50 md:justify-self-end">Documented recognition for student volunteering and IEEE Day organizing. No certificates or award imagery are shown until real assets are provided.</p>
//       </header>
//       <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 [scrollbar-color:rgba(255,255,255,.25)_transparent]">
//         {awards.map((award, index) => <AwardExhibit key={award.id} award={award} index={index} />)}
//       </div>
//       <div className="mt-4 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
//         <p className="text-xs leading-relaxed text-white/40">Additional documented invitations are presented in the Leadership & Impact story.</p>
//         <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-red-300/50 hover:text-white">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
//       </div>
//     </div>
//   </section>
// );

// export default Certificates;