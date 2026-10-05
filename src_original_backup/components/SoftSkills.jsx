import { softSkillsList } from '../data/portfolioData';

const SoftSkillIcon = ({ name }) => {
  const iconContent = {
    leadership: <><path d="m3 9 5 4 4-8 4 8 5-4-2 11H5L3 9Z" /><path d="M8 20h8" /></>,
    collaboration: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.4-3.5 2.4-5.5 6-5.5s5.6 2 6 5.5m1-5c2.8.1 4.4 1.7 4.8 4.5" /></>,
    communication: <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 9h8m-8 4h5" /></>,
    mentoring: <><path d="M12 7c-2-2-5-2-8-1v13c3-1 6-1 8 1 2-2 5-2 8-1V6c-3-1-6-1-8 1Z" /><path d="M12 7v13" /></>,
    'problem-solving': <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5m-13-11h5m-2.5-2.5v5" /></>,
    adaptability: <><path d="M4 8h13l-3-3m6 11H7l3 3" /><path d="M17 5h3v3M7 19H4v-3" /></>,
    coordination: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4m8-4v4M4 10h16m-11 4h2m3 0h2m-7 4h2" /></>,
    initiative: <><circle cx="12" cy="12" r="9" /><path d="m14.5 9.5-2 5-5 2 2-5 5-2Zm-2.2 2.2h.1" /></>,
    time: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
    creativity: <><path d="M9 18h6m-5 3h4m-2-20a7 7 0 0 0-4 12.7c.7.5 1 1.1 1 2.3h6c0-1.2.3-1.8 1-2.3A7 7 0 0 0 12 1Z" /></>,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      {iconContent[name]}
    </svg>
  );
};

const SoftSkillCard = ({ skill, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-[#f8f8f8] border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_45px_rgba(255,42,42,0.08)] transition-all duration-300 group flex flex-col items-start text-left min-h-[240px]"
  >
    <div className="flex flex-col items-start">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#ff2a2a] shadow-sm transition-colors duration-300 group-hover:bg-[#ff2a2a] group-hover:text-white">
        <SoftSkillIcon name={skill.icon} />
      </div>
      <h3 className="text-gray-900 text-base md:text-lg font-black tracking-tight mb-2">
        {skill.name}
      </h3>
      <p className="text-gray-500 text-sm font-medium leading-relaxed">
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Top paper divider (torn SVG transition from dark section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Professional Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            How I Work
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            The collaboration, ownership, and practical habits I bring to engineering and community work.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
