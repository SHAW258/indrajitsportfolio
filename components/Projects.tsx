'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Professional Android Application',
      description: 'Live project contribution with JWT authentication, API integration, push notifications, and UI enhancement. Worked on production-level feature implementation and debugging.',
      tech: ['Kotlin', 'Jetpack Compose', 'REST API', 'Firebase Messaging', 'JWT Auth'],
      period: 'Dec 2025 - May 2026',
      impact: 'Production-level mobile app',
      icon: '📱'
    },
    {
      title: 'Smart AIR Quality Monitoring System',
      description: 'AI-powered environmental monitoring application providing real-time air quality analysis and GenAI-based forecasts. Built cross-platform with React.js frontend, Flask backend, and Capacitor integration.',
      tech: ['React.js', 'Flask', 'Capacitor', 'GenAI', 'Real-time Data'],
      period: 'Jun 2024 - Jun 2025',
      impact: 'Environmental data insights for 24h and 7-day forecasts',
      icon: '🌍'
    },
    {
      title: 'Daily Tasks Manager App',
      description: 'Full-stack mobile task management application with create, read, update, and delete functionality. Built with React Native, Flask REST API, and SQLite database following clean architecture principles.',
      tech: ['React Native', 'Expo', 'Flask', 'SQLite', 'Clean Architecture'],
      period: '2024',
      impact: 'Complete task lifecycle management',
      icon: '✓'
    }
  ]

  return (
    <section
      id="projects"
      className="py-20 px-6 border-t border-border bg-card/30"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const colors = [
              'border-blue-500/50 hover:border-blue-500 hover:shadow-blue-500/20',
              'border-cyan-500/50 hover:border-cyan-500 hover:shadow-cyan-500/20',
              'border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500/20'
            ]
            return (
            <div
              key={index}
              className={`border ${colors[index % 3]} rounded-lg p-8 bg-gradient-to-br from-background to-card/50 hover:from-card/30 hover:to-card/80 transition group shadow-lg hover:shadow-2xl`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{project.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:via-primary group-hover:to-secondary transition">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-2">
                      Impact: {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-accent hover:border-primary transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
