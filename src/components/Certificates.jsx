import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            Credenciais profissionais
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Certificações
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Certificações que comprovam minha expertise e compromisso com a excelência técnica e aprendizado contínuo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  {cert.logo ? (
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <span>{cert.icon}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {cert.level}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {cert.category}
                </span>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-medium">
                  Válido: {cert.valid}
                </span>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center gap-1 group/link"
                >
                  Ver Certificado
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}