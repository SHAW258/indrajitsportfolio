'use client'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 border-t border-border bg-card/30"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">About</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Professional Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Professional Experience</h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30 space-y-1">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_8px_rgba(var(--primary),0.5)] animate-pulse" />
                <p className="font-semibold text-foreground text-lg">Data Science & AI Intern</p>
                <p className="text-sm text-primary font-medium">PCS Global Pvt Ltd</p>
                <p className="text-xs text-muted-foreground">Joined Recently</p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  Gaining hands-on experience in Data Science and Artificial Intelligence solutions, working on data analysis, machine learning models, and algorithm implementations.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/30 space-y-1">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-1.5" />
                <p className="font-semibold text-foreground text-lg">Android Developer Trainee</p>
                <p className="text-sm text-secondary font-medium">Bangalore (Contract/Training)</p>
                <p className="text-xs text-muted-foreground">Dec 2025 - May 2026</p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  Contributed to production-level Android applications, implementing REST API integration, push notifications, and modern declarative UIs using Jetpack Compose.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Education & Certifications</h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-accent/30 space-y-1">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5" />
                <p className="font-semibold text-foreground text-lg">B.Tech in Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground">Seacom Engineering College (2022-2025)</p>
                <p className="text-xs text-accent font-semibold flex items-center gap-1">🏆 3rd Rank in CSE Department</p>
              </div>

              <div className="relative pl-6 border-l-2 border-accent/30 space-y-1">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                <p className="font-semibold text-foreground text-lg">Python, HTML/CSS & Oracle SQL Training</p>
                <p className="text-sm text-primary font-medium">QSpiders</p>
                <p className="text-xs text-muted-foreground">Completed Certified Course</p>
              </div>

              <div className="relative pl-6 border-l-2 border-accent/30 space-y-1">
                <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5" />
                <p className="font-semibold text-foreground text-lg">Diploma in Electronics & Telecommunication</p>
                <p className="text-sm text-muted-foreground">Ramakrishna Mission Shilpamandira (2018-2021)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/30 rounded-lg p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">What I do best</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-3 hover:text-foreground transition">
              <span className="text-primary text-lg">→</span>
              Build responsive, production-level Android applications with Kotlin
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-lg">→</span>
              Design modern UIs using Jetpack Compose with clean architecture
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-lg">→</span>
              Integrate REST APIs, handle JSON, and manage authentication
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-lg">→</span>
              Implement push notifications, debugging, and feature enhancements
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-lg">→</span>
              Work with MVVM architecture and Room databases for data persistence
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
