import RepoCard from "./RepoCard";
import { useGithubRepos } from "./useGithubRepos";
import { projects } from "../../data/projects";

export default function Projects() {
  const { GITHUB_USER } = projects;
  const { repos, totalRepos, visible, loadMore, loading } = useGithubRepos(GITHUB_USER);

  return (
    <section id="projects" className="py-28 bg-zinc-900/50 relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></span>
            Meu trabalho em destaque
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Meus <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Repositórios carregados automaticamente do GitHub.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center gap-3 text-zinc-500 py-12">
            <div className="w-5 h-5 border-2 border-zinc-600 border-t-sky-500 rounded-full animate-spin"></div>
            Carregando projetos...
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              username={GITHUB_USER}
            />
          ))}
        </div>

        {!loading && visible < totalRepos && (
          <div className="text-center mt-14 fade-in">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-zinc-800 text-zinc-200 rounded-xl font-semibold hover:bg-zinc-700 hover:text-white transition-all duration-300 border border-zinc-700 hover:border-zinc-600 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Ver mais projetos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
