import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-blue-100 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              {profile.greeting || "Available for new projects"}
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mt-10 lg:mt-0 mb-6 text-gray-900 leading-tight">

              {profile.name.split(' ').map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h1>

            <div className="relative inline-block mt-12 md:mt-8 mb-12 md:mb-8">
              <p className="text-2xl lg:text-3xl font-bold text-blue-600 relative z-10">
                {profile.title}
              </p>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-0"></div>
            </div>


            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profile.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {profile.buttons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  target={btn.target || "_self"}
                  className={`
                    group relative overflow-hidden px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 min-w-[160px]
                    ${btn.type === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1'
                      : btn.type === 'secondary'
                        ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-1'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {btn.icon && <span className="text-xl">{btn.icon}</span>}
                    {btn.text}
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 mt-16 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{profile.yearExperience}</div>
                <div className="text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{profile.projectCompleted}</div>
                <div className="text-gray-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{profile.clientSatisfaction}</div>
                <div className="text-gray-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-[3rem] p-8 shadow-2xl">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-96 lg:h-[480px] object-cover rounded-[2rem] shadow-lg"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Available</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">🌟</div>
                  <div className="text-xs text-gray-600 font-medium">Top Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}