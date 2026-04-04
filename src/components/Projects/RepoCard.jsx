import { getRepoImage } from "./getRepoImage";

export default function RepoCard({ repo, username }) {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800/60 hover:border-zinc-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 group">
      {/* Image */}
      <div className="h-44 relative overflow-hidden bg-zinc-800">
        <img
          src={getRepoImage(username, repo.name)}
          alt={repo.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x300.png?text=Projeto";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
          {repo.name}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {repo.description || "Sem descrição disponível."}
        </p>

        {/* Language tag */}
        {repo.language && (
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-400"></span>
            <span className="text-xs font-mono text-zinc-500">{repo.language}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-sky-500 to-violet-500 text-white py-2.5 px-4 rounded-xl font-semibold text-sm text-center hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
            >
              Demo
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-zinc-800 text-zinc-300 py-2.5 px-4 rounded-xl font-semibold text-sm text-center hover:bg-zinc-700 hover:text-white transition-all duration-300 border border-zinc-700/60"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  );
}
