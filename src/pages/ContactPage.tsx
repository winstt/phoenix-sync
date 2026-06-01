import { useState } from 'react'
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react'
import PageHero from '../components/PageHero'

const socialLinks = [
  { label: 'Instagram', icon: <Instagram size={18} />, href: '#' },
  { label: 'Facebook', icon: <Facebook size={18} />, href: '#' },
  { label: 'YouTube', icon: <Youtube size={18} />, href: '#' },
  { label: 'X', icon: <Twitter size={18} />, href: '#' },
  { label: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Get in touch."
        description="We welcome collaboration, conversation and connection. Reach out to learn more about our work and how you can be part of the movement."
      />

      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.75rem' }}>Email us</h3>
              <a href="mailto:info@phoenix-trust.co.uk" style={{ color: '#E8570A', fontSize: '0.95rem', textDecoration: 'none' }}>info@phoenix-trust.co.uk</a>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '1rem' }}>Follow us</h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,240,235,0.6)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E8570A'; (e.currentTarget as HTMLElement).style.color = '#E8570A' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,235,0.6)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.75rem' }}>Media & press enquiries</h3>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6' }}>
                For press releases, interview requests, or media coverage of The Phoenix Community Trust, please contact us directly at{' '}
                <a href="mailto:info@phoenix-trust.co.uk" style={{ color: '#E8570A', textDecoration: 'none' }}>info@phoenix-trust.co.uk</a>{' '}
                with the subject line <em>Media Enquiry</em>.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '1.75rem' }}>Send us a message</h2>
            {sent ? (
              <div style={{ background: 'rgba(232,87,10,0.1)', border: '1px solid rgba(232,87,10,0.3)', borderRadius: '12px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#E8570A', marginBottom: '0.75rem' }}>Message sent</h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6' }}>Thank you for getting in touch. We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { id: 'name', label: 'Your name', type: 'text', placeholder: 'Full name' },
                  { id: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com' },
                  { id: 'org', label: 'Organisation (optional)', type: 'text', placeholder: 'Your organisation' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#f5f0eb', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder}
                      required={f.id !== 'org'}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      style={{ width: '100%', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', padding: '0.75rem 1rem', color: '#f5f0eb', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#f5f0eb', marginBottom: '0.4rem' }}>Message</label>
                  <textarea id="message" required rows={5} placeholder="Your message..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ width: '100%', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', padding: '0.75rem 1rem', color: '#f5f0eb', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                  />
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.4)' }}>Your details will not be shared with third parties.</p>
                <button type="submit" style={{ background: '#C2185B', color: 'white', border: 'none', borderRadius: '6px', padding: '14px 28px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}>
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
