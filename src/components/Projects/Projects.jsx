import RepoCard from "./RepoCard";
import { useGithubRepos } from "./useGithubRepos";
import { projects } from "../../data/projects";

export default function Projects() {

  const { GITHUB_USER } = projects;

  const { repos, totalRepos, visible, loadMore, loading } =
    useGithubRepos(GITHUB_USER);

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
            Projetos carregados automaticamente do meu GitHub.
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Carregando projetos...</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              username={GITHUB_USER}
            />
          ))}
        </div>

        {!loading && visible < totalRepos && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Ver mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
