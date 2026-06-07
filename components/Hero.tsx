'use client'

export default function Hero() {
  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full space-y-8 text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Indrajit Shaw
          </h1>
          <p className="text-xl md:text-2xl bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent font-semibold">
            Android Developer & Full-Stack Builder
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          I build modern, production-level Android applications using Kotlin and Jetpack Compose.
          Passionate about clean code, intuitive UI/UX, and turning ideas into polished digital products.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition flex items-center gap-2"
          >
            Get in touch
            <span className="text-lg">→</span>
          </button>
          <a
            href="#projects"
            className="px-8 py-3 border border-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/10 hover:border-accent transition"
          >
            View my work
          </a>
        </div>

        <div className="pt-8 flex gap-6 justify-center md:justify-start">
          <a
            href="mailto:indrajitshaw55@gmail.com"
            className="text-muted-foreground hover:text-primary transition flex items-center gap-2"
          >
            <span>📧 Email</span>
          </a>
          <a
            href="tel:+916290554317"
            className="text-muted-foreground hover:text-primary transition flex items-center gap-2"
          >
            <span>📱 +91 629 055 4317</span>
          </a>
        </div>
      </div>
    </section>
  )
}
