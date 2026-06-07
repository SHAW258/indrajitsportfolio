export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
}

export async function fetchGitHubProjects(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      console.error('[v0] GitHub API error:', response.statusText)
      return []
    }

    const repos: GitHubRepo[] = await response.json()
    // Filter out forked repos and empty descriptions for cleaner display
    return repos.filter(repo => !repo.fork).slice(0, 12) // Limit to 12 projects
  } catch (error) {
    console.error('[v0] Failed to fetch GitHub projects:', error)
    return []
  }
}
