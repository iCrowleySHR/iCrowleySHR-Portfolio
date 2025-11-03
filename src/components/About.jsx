import { about } from "../data/about";

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    border: "border-blue-200",
    hover: "hover:bg-blue-200",
    accent: "bg-blue-500",
    textAccent: "text-blue-600"
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
    hover: "hover:bg-green-200",
    accent: "bg-green-500",
    textAccent: "text-green-600"
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    border: "border-purple-200",
    hover: "hover:bg-purple-200",
    accent: "bg-purple-500",
    textAccent: "text-purple-600"
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    border: "border-amber-200",
    hover: "hover:bg-amber-200",
    accent: "bg-amber-500",
    textAccent: "text-amber-600"
  },
  gray: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
    hover: "hover:bg-gray-200",
    accent: "bg-gray-500",
    textAccent: "text-gray-600"
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-orange-200",
    hover: "hover:bg-orange-200",
    accent: "bg-orange-500",
    textAccent: "text-orange-600"
  }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-700"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              {about.badge.text}
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
              {about.title}
            </h2>

            {/* Description */}
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {about.skills.map((skill, index) => {
                const color = colorClasses[skill.color] || colorClasses.blue;
                return (
                  <span
                    key={index}
                    className={`${color.bg} ${color.text} ${color.border} ${color.hover} px-4 py-3 rounded-xl text-sm font-semibold border transition-colors cursor-default`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {about.experiences.map((exp, index) => {
              const color = colorClasses[exp.color] || colorClasses.blue;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 ${color.accent} rounded-full mt-2 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{exp.title}</h4>
                      <p className={`${color.textAccent} font-semibold mb-2`}>
                        {exp.company} • {exp.period}
                      </p>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
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