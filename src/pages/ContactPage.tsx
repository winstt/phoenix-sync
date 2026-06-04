import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Linkedin, ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'

// Bluesky icon (not in lucide-react)
function BlueSkyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C3.566 1.6 1.5 1.028 1.5 4.43c0 .661.375 5.551.6 6.34.8 2.685 3.72 3.558 6.32 3.193-.074.016-.149.034-.222.055-2.562.717-5.126 2.23-2.444 5.45 3.046 3.628 7.53-1.22 8.246-3.438.716 2.217 5.2 7.066 8.246 3.438 2.682-3.22.118-4.733-2.444-5.45-.073-.021-.148-.039-.222-.055 2.6.365 5.52-.508 6.32-3.193.225-.789.6-5.679.6-6.34 0-3.402-2.066-2.83-3.702-1.625C16.046 4.747 13.087 8.686 12 10.8Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Instagram', icon: <Instagram size={18} />, href: 'https://www.instagram.com/phoenixcommunitytrustuk/' },
  { label: 'Facebook', icon: <Facebook size={18} />, href: 'https://www.facebook.com/people/The-Phoenix-Community-Trust/61589475597509/?mibextid=wwXIfr&rdid=gpNaLbJCTXkxTGvk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ECVV5eixA%2F%3Fmibextid%3DwwXIfr%26ref%3D1' },
  { label: 'YouTube', icon: <Youtube size={18} />, href: 'https://youtube.com/@phoenixcommunitytrustuk?si=cyn3uT-Z511GlECm' },
  { label: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/phoenix-way-uk?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { label: 'Bluesky', icon: <BlueSkyIcon size={18} />, href: 'https://bsky.app/profile/phoenix-trust.bsky.social' },
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

      <section style={{ padding: '1.5rem 2.5rem 3rem', background: '#0d0d0d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left - info */}
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
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Right - form */}
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

      <FAQSection />
    </>
  )
}

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Why has the name of the organisation changed?',
    a: "Our new name marks the beginning of an exciting new chapter. As we move into this next phase of our journey, we wanted a name that truly reflects who we are - honouring the deep roots of everything that came before, while capturing the renewed energy and ambition we have for the future. The Phoenix Community Trust feels like us: it puts community front and centre. Exactly where it should be.",
  },
  {
    q: 'Who does The Phoenix Community Trust serve?',
    a: "We serve socially and economically disadvantaged Black and Global Majority communities across the UK - communities that hold the expertise and vision to direct their own futures, who have been systematically underfunded and underserved.\n\nOur work is about redistributing power and resources, building community infrastructure, and dismantling the structural barriers that have kept funding from flowing where it's needed most. We exist not to manage inequality, but to change the conditions that create it.",
  },
  {
    q: 'Who leads The Phoenix Community Trust?',
    a: (
      <>
        We're guided by an incredible and passionate team of trustees who bring a wealth of expertise and lived experience to everything we do. They are the heart of our governance and the backbone of our mission. You can find out more about each of them on the{' '}
        <Link to="/impact" style={{ color: '#E8570A', textDecoration: 'none' }}>Our Impact</Link> page.
      </>
    ),
  },
  {
    q: 'How do communities shape your decisions?',
    a: "Community-led decision making isn't an aspiration for us, it's a founding commitment. Our board of trustees is made up of people with deep roots in and alongside Black and Global Majority communities, bringing lived experience into the heart of our governance.\n\nWe're also honest that we're still building. As we grow, we are actively developing the structures and processes that ensure communities don't just inform our decisions - they direct them. We'll be sharing more about how that takes shape as we move forward.",
  },
]

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section style={{ padding: '1.5rem 2.5rem 6rem', background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.5rem' }}>Frequently asked questions</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', marginBottom: '2.5rem' }}>Answers to some of the questions we hear most often.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} style={{ background: '#1a1a1a', border: `1px solid ${isOpen ? 'rgba(232,87,10,0.4)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.25s ease' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.25rem 1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: '#f5f0eb', fontSize: '1rem', fontWeight: 600, transition: 'background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} style={{ flexShrink: 0, color: '#E8570A', transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'rgba(245,240,235,0.75)', fontSize: '0.95rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                      {item.a}
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
