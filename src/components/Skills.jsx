import { frontend, backend, otherSkills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            Tecnologias e ferramentas
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Habilidades Técnicas
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Domino uma ampla gama de tecnologias modernas para desenvolvimento web completo e soluções escaláveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl">
                ⚛️
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Frontend</h3>
            </div>
            
            <div className="space-y-6">
              {frontend.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-6 h-6 rounded-sm"
                      />
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{skill.value}</span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-blue-700"
                      style={{ width: skill.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-xl">
                🖥️
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Backend</h3>
            </div>
            
            <div className="space-y-6">
              {backend.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-6 h-6 rounded-sm"
                      />
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{skill.value}</span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:from-green-600 group-hover:to-green-700"
                      style={{ width: skill.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
              🛠️
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Outras Ferramentas</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-6 h-6 rounded-sm"
                    />
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-gray-500 font-medium">{skill.value}</span>
                </div>
                <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:from-purple-600 group-hover:to-purple-700"
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
