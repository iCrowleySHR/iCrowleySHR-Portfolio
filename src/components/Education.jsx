import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            Minha jornada educacional
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Formação <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Acadêmica</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Base educacional sólida que fundamenta minha expertise técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-5">
                {/* Avatar/logo */}
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-colors overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.school} className="w-9 h-9 object-contain" />
                  ) : (
                    <span className="text-lg">{item.icon}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-base">
                    {item.school}
                  </p>
                  <p className="text-zinc-500 text-sm font-medium mt-1">{item.year}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-3 mb-5">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-semibold border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
