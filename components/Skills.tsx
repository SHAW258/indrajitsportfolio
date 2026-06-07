'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Android Development',
      skills: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'MVVM Architecture', 'Android UI Development'],
      color: 'bg-blue-500/20 border-blue-500/50 hover:border-blue-500'
    },
    {
      title: 'APIs & Integrations',
      skills: ['REST API', 'API Integration', 'JSON Handling', 'Firebase Messaging', 'Push Notifications'],
      color: 'bg-cyan-500/20 border-cyan-500/50 hover:border-cyan-500'
    },
    {
      title: 'Databases & Backend',
      skills: ['Room Database', 'SQLite', 'SQL', 'DBMS/RDBMS', 'Query Writing'],
      color: 'bg-purple-500/20 border-purple-500/50 hover:border-purple-500'
    },
    {
      title: 'Programming Languages',
      skills: ['Kotlin', 'Java', 'Python', 'JavaScript', 'SQL'],
      color: 'bg-green-500/20 border-green-500/50 hover:border-green-500'
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React.js', 'Responsive Design', 'Flask Backend'],
      color: 'bg-orange-500/20 border-orange-500/50 hover:border-orange-500'
    },
    {
      title: 'Core Concepts',
      skills: ['OOP', 'DBMS', 'Design Patterns', 'Debugging', 'Problem Solving'],
      color: 'bg-pink-500/20 border-pink-500/50 hover:border-pink-500'
    }
  ]

  return (
    <section
      id="skills"
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`border ${category.color} rounded-lg p-6 transition transform hover:scale-105 hover:shadow-lg`}
            >
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm text-foreground hover:border-primary transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background/50 border border-border rounded-lg p-8">
          <h3 className="text-lg font-semibold mb-4">Professional Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-muted-foreground mt-2">Programming Languages</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">3+</p>
              <p className="text-muted-foreground mt-2">Full-Stack Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">6mo</p>
              <p className="text-muted-foreground mt-2">Live Project Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
