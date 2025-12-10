import { useEffect, useState } from "react";
import { fetchAllGithubRepos } from "./githubService";

export function useGithubRepos(username, initialVisible = 5) {
  const [repos, setRepos] = useState([]);
  const [visible, setVisible] = useState(initialVisible);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAllGithubRepos(username);
        setRepos(data);
      } catch (error) {
        console.error("Erro ao carregar repositórios:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [username]);

  function loadMore() {
    setVisible((v) => v + 5);
  }

  return {
    repos: repos.slice(0, visible),
    totalRepos: repos.length,
    visible,
    loadMore,
    loading,
  };
}
