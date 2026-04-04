import { about } from "../data/about";

const colorMap = {
  blue:  { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20", dot: "bg-sky-400", accent: "text-sky-300", hover: "hover:bg-sky-500/15" },
  green: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-400", accent: "text-emerald-300", hover: "hover:bg-emerald-500/15" },
  purple:{ bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20", dot: "bg-violet-400", accent: "text-violet-300", hover: "hover:bg-violet-500/15" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", dot: "bg-amber-400", accent: "text-amber-300", hover: "hover:bg-amber-500/15" },
  gray:  { bg: "bg-zinc-500/10", text: "text-zinc-400", border: "border-zinc-500/20", dot: "bg-zinc-400", accent: "text-zinc-300", hover: "hover:bg-zinc-500/15" },
  orange:{ bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", dot: "bg-orange-400", accent: "text-orange-300", hover: "hover:bg-orange-500/15" },
};

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* accent line */}
      <div className="absolute top-0 left-6 w-px h-24 bg-gradient-to-b from-sky-500/60 to-transparent"></div>
      <div className="absolute bottom-0 right-6 w-px h-24 bg-gradient-to-t from-violet-500/60 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></span>
            {about.badge.text}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Mim</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text + Skills */}
          <div className="fade-in">
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-zinc-400 text-lg leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {about.skills.map((skill, index) => {
                const c = colorMap[skill.color] || colorMap.blue;
                return (
                  <span
                    key={index}
                    className={`${c.bg} ${c.text} ${c.border} ${c.hover} border px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-default`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right - Experience timeline */}
          <div className="space-y-4">
            {about.experiences.map((exp, index) => {
              const c = colorMap[exp.color] || colorMap.blue;
              return (
                <div
                  key={index}
                  className={`bg-zinc-900/60 backdrop-blur-sm p-7 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-2.5 h-2.5 ${c.dot} rounded-full mt-2 flex-shrink-0 shadow-lg`} style={{ boxShadow: `0 0 8px currentColor` }}></div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{exp.title}</h4>
                      <p className={`${c.accent} font-semibold mb-2`}>
                        {exp.company} • <span className="text-zinc-500">{exp.period}</span>
                      </p>
                      <p className="text-zinc-400 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
