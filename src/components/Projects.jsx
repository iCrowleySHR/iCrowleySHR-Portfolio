import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <div className="absolute top-20 right-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            Meu trabalho em destaque
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Meus Projetos
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e soluções criativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >

              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>
                )}
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Destaque
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-xl text-xs font-semibold border border-blue-200 hover:bg-blue-200 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Ver Demo
                  </a>
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-center"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interessado em trabalhar juntos?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Vamos transformar sua ideia em um projeto incrível!
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Iniciar Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}