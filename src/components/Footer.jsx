import { footer } from "../data/footer";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-20 w-5 h-5 bg-blue-300 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <h3 className="text-3xl font-black text-gray-900 relative z-10">
              {footer.name}
            </h3>
            <div className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0"></div>
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-900">{footer.title}</span> • {footer.description}
          </p>

          <div className="flex justify-center gap-8 mb-12">
            {footer.social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-100 hover:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-xl text-gray-600 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            ))}
          </div>
          <div className="pt-8 border-t border-gray-300">
            <p className="text-gray-500 font-medium">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}