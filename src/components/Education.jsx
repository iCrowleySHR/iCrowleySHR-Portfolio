import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            Minha jornada educacional
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Formação Acadêmica
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Minha base educacional sólida que fundamenta minha expertise técnica e capacidade de aprendizado contínuo.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start gap-6">
                {/* Logo/Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt={`Logo ${item.school}`}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <span>{item.icon}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-blue-600 font-semibold text-lg">
                      {item.school}
                    </p>
                    <p className="text-gray-500 font-medium">
                      {item.year}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-2 rounded-xl text-sm font-semibold border border-blue-200 hover:bg-blue-200 transition-colors duration-200 cursor-default"
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