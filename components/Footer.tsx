'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Indrajit Shaw</h4>
            <p className="text-sm text-muted-foreground">
              Android developer focused on building modern, production-level mobile applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:indrajitshaw55@gmail.com"
                  className="hover:text-primary transition"
                >
                  Email: indrajitshaw55@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+916290554317"
                  className="hover:text-primary transition"
                >
                  Phone: +91 629 055 4317
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Indrajit Shaw. All rights reserved.</p>
          <p>Built with modern web technologies | Next.js + React</p>
        </div>
      </div>
    </footer>
  )
}
