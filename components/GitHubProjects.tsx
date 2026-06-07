'use client'

import { useEffect, useState } from 'react'
import { GitHubRepo } from '@/lib/github'

export default function GitHubProjects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/github')
        if (!response.ok) throw new Error('Failed to fetch projects')
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        console.error('[v0] Error fetching GitHub projects:', err)
        setError('Failed to load projects')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="github-projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            GitHub Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore my latest projects on GitHub. Click any project to view the repository and code.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin text-3xl">🔄</div>
            <p className="text-muted-foreground mt-4">Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="p-6 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
            {error}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No projects found. Visit{' '}
            <a
              href="https://github.com/SHAW258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              my GitHub
            </a>{' '}
            to see all repositories.
          </div>
        )}

        {!loading && projects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const colors = [
                'border-blue-500/50 hover:border-blue-500 hover:shadow-blue-500/20',
                'border-cyan-500/50 hover:border-cyan-500 hover:shadow-cyan-500/20',
                'border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500/20',
                'border-purple-500/50 hover:border-purple-500 hover:shadow-purple-500/20',
                'border-orange-500/50 hover:border-orange-500 hover:shadow-orange-500/20',
                'border-green-500/50 hover:border-green-500 hover:shadow-green-500/20',
              ]
              const colorClass = colors[index % colors.length]

              return (
                <a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border ${colorClass} rounded-lg p-6 bg-gradient-to-br from-background to-card/50 hover:from-card/30 hover:to-card/80 transition group shadow-lg hover:shadow-2xl transform hover:scale-105 flex flex-col h-full`}
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition flex-1">
                        {project.name}
                      </h3>
                      <span className="text-2xl">🔗</span>
                    </div>

                    {project.description && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    )}

                    {project.topics && project.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    {project.language && (
                      <div className="flex items-center gap-1">
                        <span>💻</span>
                        {project.language}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      {project.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🍴</span>
                      {project.forks_count}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        )}

        <div className="text-center pt-8">
          <a
            href="https://github.com/SHAW258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
          >
            <span>🐙</span>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
