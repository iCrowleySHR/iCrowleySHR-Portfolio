import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
            Credenciais profissionais
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Certi<span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">ficações</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Certificações que comprovam minha expertise e compromisso com aprendizado contínuo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-amber-500/30 transition-all overflow-hidden">
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.issuer} className="w-7 h-7 object-contain" />
                  ) : (
                    <span className="text-amber-400">{cert.icon}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors truncate text-[15px]">
                    {cert.title}
                  </h3>
                  <p className="text-amber-400 font-semibold text-xs mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-semibold border border-amber-500/20">
                  {cert.level}
                </span>
                <span className="bg-zinc-800 text-zinc-400 px-3 py-1 rounded-lg text-xs font-semibold">
                  {cert.category}
                </span>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-zinc-800/60">
                <span className="text-xs text-zinc-500 font-medium">Válido: {cert.valid}</span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors flex items-center gap-1 group/link"
                >
                  Ver <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
