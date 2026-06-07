'use client'

import { useState } from 'react'
import { sendContactMessage } from '@/lib/email-service'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const success = await sendContactMessage(formData)
      
      if (success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error('[v0] Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank')
        },
        (error) => {
          console.warn('Geolocation error, falling back to Howrah search:', error)
          window.open('https://www.google.com/maps/search/?api=1&query=Howrah,+West+Bengal,+India', '_blank')
        }
      )
    } else {
      window.open('https://www.google.com/maps/search/?api=1&query=Howrah,+West+Bengal,+India', '_blank')
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground">
            I&apos;m always open to discussing new projects, opportunities, or just having a chat about tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition text-foreground resize-none"
                  placeholder="Your message..."
                />
              </div>

              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? '✓ Message sent!' : loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:indrajitshaw55@gmail.com"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-background/50 transition group"
                >
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">indrajitshaw55@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916290554317"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-background/50 transition group"
                >
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">+91 629 055 4317</p>
                  </div>
                </a>

                <button
                  onClick={handleLocationClick}
                  type="button"
                  className="w-full text-left flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-background/50 transition group cursor-pointer"
                >
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold group-hover:text-primary transition">Howrah, West Bengal, India</p>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SHAW258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition text-xl"
                  title="GitHub"
                >
                  🐙
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition text-xl"
                  title="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
