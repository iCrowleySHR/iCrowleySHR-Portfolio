import { frontend, backend, otherSkills } from '../data/skills';

export default function Skills() {
  const sections = [
    { title: 'Frontend', icon: '⚛️', skills: frontend, from: 'from-sky-500', to: 'to-blue-600', accent: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/10' },
    { title: 'Backend', icon: '🖥️', skills: backend, from: 'from-emerald-500', to: 'to-green-600', accent: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/10' },
  ];

  return (
    <section id="skills" className="py-28 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></span>
            Tecnologias e ferramentas
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Habilidades <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Técnicas</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Domino tecnologias modernas para desenvolvimento web completo e soluções escaláveis.
          </p>
        </div>

        {/* Frontend + Backend */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {sections.map((section, i) => (
            <div key={i} className={`bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/60`}>
              <div className={`flex items-center gap-3 mb-8 ${section.bg} ${section.border} border rounded-xl p-4`}>
                <div className="text-2xl">{section.icon}</div>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <div className="space-y-5">
                {section.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 rounded-sm opacity-70" />
                        <span className="font-semibold text-zinc-200 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-zinc-500 text-sm font-medium">{skill.value}</span>
                    </div>
                    <div className="bg-zinc-800/80 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${section.from} ${section.to} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: skill.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other tools */}
        <div className={`bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/60`}>
          <div className="bg-violet-500/10 border border-violet-500/10 rounded-xl p-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🛠️</div>
              <h3 className="text-xl font-bold text-white">Outras Ferramentas</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {otherSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5 rounded-sm opacity-70" />
                    <span className="font-semibold text-zinc-200 text-sm">{skill.name}</span>
                  </div>
                  <span className="text-zinc-500 text-sm font-medium">{skill.value}</span>
                </div>
                <div className="bg-zinc-800/80 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
