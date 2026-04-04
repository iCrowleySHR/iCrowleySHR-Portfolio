import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative hero-gradient overflow-hidden noise">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating orbs */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></span>
              {profile.greeting || "Available for new projects"}
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mt-8 lg:mt-0 mb-6 text-white leading-[1.05] tracking-tight">
              {profile.name.split(' ').map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-8">
              {profile.title}
            </p>

            <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {profile.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {profile.buttons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  target={btn.target || "_self"}
                  className={`
                    relative overflow-hidden px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 min-w-[160px]
                    ${btn.type === 'primary'
                      ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white hover:shadow-xl hover:shadow-sky-500/25 hover:-translate-y-1'
                      : btn.type === 'secondary'
                        ? 'bg-zinc-800 text-white hover:bg-zinc-700 hover:-translate-y-1 hover:shadow-lg'
                        : 'border border-zinc-700 text-zinc-300 hover:border-sky-500/50 hover:text-white hover:bg-zinc-800/50'
                    }
                  `}
                >
                  {btn.icon && <span className="text-xl">{btn.icon}</span>}
                  {btn.text}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-16 justify-center lg:justify-start">
              <div>
                <div className="text-3xl font-bold text-white">{profile.yearExperience}</div>
                <div className="text-zinc-500 text-sm mt-1">Anos Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{profile.projectCompleted}</div>
                <div className="text-zinc-500 text-sm mt-1">Projetos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{profile.clientSatisfaction}</div>
                <div className="text-zinc-500 text-sm mt-1">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative float-slow">
              {/* Glow ring */}
              <div className="glow-ring">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-96 lg:h-[480px] object-cover rounded-[2rem] shadow-2xl relative z-10"
                />
              </div>

              {/* Available badge */}
              <div className="absolute -top-3 -right-3 bg-zinc-900/90 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-lg border border-zinc-800 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  <span className="text-sm font-semibold text-zinc-200">Disponível</span>
                </div>
              </div>

              {/* Tech badge */}
              <div className="absolute -bottom-4 -left-4 bg-zinc-900/90 backdrop-blur-xl px-5 py-3 rounded-xl shadow-lg border border-zinc-800 z-20 float-fast">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-xs text-zinc-400 font-medium">React + AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
