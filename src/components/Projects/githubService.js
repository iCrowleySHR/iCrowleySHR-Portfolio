import { projects } from "../../data/projects"; 

export async function fetchAllGithubRepos(username) {
  let page = 1;
  let allRepos = [];
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
    );

    const data = await response.json();
    allRepos = [...allRepos, ...data];

    if (data.length < 100) {
      hasMore = false;
    } else {
      page++;
    }
  }

  const FEATURED_REPOS = projects.FEATURED_REPOS;

  allRepos.sort((a, b) => {
    const aFeatured = FEATURED_REPOS.includes(a.name);
    const bFeatured = FEATURED_REPOS.includes(b.name);

    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;

    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  return allRepos;
}
