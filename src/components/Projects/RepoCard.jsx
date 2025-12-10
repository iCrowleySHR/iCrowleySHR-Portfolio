import { getRepoImage } from "./getRepoImage";

export default function RepoCard({ repo, username }) {
  return (
    <div
      key={repo.id}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={getRepoImage(username, repo.name)}
          alt={repo.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/600x300.png?text=Projeto+sem+Imagem";
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {repo.name}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {repo.description || "Sem descrição disponível."}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {repo.language && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-xl text-xs font-semibold border border-blue-200">
              {repo.language}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 text-center hover:shadow-lg"
            >
              Ver Demo
            </a>
          )}

          <a
            href={repo.html_url}
            target="_blank"
            className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-center"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  );
}
