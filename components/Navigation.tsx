'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setIsDark(savedTheme === 'dark')
    applyTheme(savedTheme === 'dark')
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold text-primary hover:text-accent transition"
        >
          IS
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('github-projects')}
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            GitHub
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground hover:text-primary hover:bg-card/50 rounded-lg transition"
            title="Toggle dark/light mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex gap-3 items-center">
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground hover:text-primary hover:bg-card/50 rounded-lg transition"
            title="Toggle dark/light mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5"
          >
            <div className={`w-6 h-0.5 bg-foreground transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground transition ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card p-6 space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('github-projects')}
            className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition"
          >
            GitHub
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition font-medium"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}
