import { useState } from 'react'
import { Banknote, Calendar, Newspaper, Users, Lock, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Banknote,
    title: 'Grants & funding',
    desc: 'Be among the first to hear when new grant rounds open, including eligibility criteria and how to apply.',
  },
  {
    icon: Calendar,
    title: 'Events & convenings',
    desc: 'Information about our national and regional gatherings, training sessions, and community-led events.',
  },
  {
    icon: Newspaper,
    title: 'News & insight',
    desc: 'Stories from our network and community updates.',
  },
  {
    icon: Users,
    title: 'Community opportunities',
    desc: 'Partnerships, collaborations, and resources to help strengthen your organisation and its impact.',
  },
]

// Mailchimp audience (public embed values only - no private API keys)
const MC_BASE = 'https://thephoenixwayuk.us9.list-manage.com/subscribe/post-json'
const MC_U = 'e7750f68b25e6311a52e9aebc'
const MC_ID = 'b558fe8950'
const MC_F_ID = '001de8e3f0'
const MC_HONEYPOT = `b_${MC_U}_${MC_ID}`

type MailchimpResponse = { result: 'success' | 'error'; msg: string }

function subscribeViaJsonp(params: Record<string, string>): Promise<MailchimpResponse> {
  return new Promise((resolve, reject) => {
    const callbackName = `mcCallback_${Date.now()}_${Math.floor(Math.random() * 1e6)}`
    const query = new URLSearchParams({
      u: MC_U,
      id: MC_ID,
      f_id: MC_F_ID,
      ...params,
      [MC_HONEYPOT]: '',
      c: callbackName,
    })

    const script = document.createElement('script')
    const timeout = window.setTimeout(() => {
      cleanup()
      reject(new Error('timeout'))
    }, 15000)

    function cleanup() {
      window.clearTimeout(timeout)
      delete (window as unknown as Record<string, unknown>)[callbackName]
      script.remove()
    }

    ;(window as unknown as Record<string, unknown>)[callbackName] = (data: MailchimpResponse) => {
      cleanup()
      resolve(data)
    }

    script.src = `${MC_BASE}?${query.toString()}`
    script.onerror = () => {
      cleanup()
      reject(new Error('network'))
    }
    document.body.appendChild(script)
  })
}

function stripHtml(html: string) {
  const el = document.createElement('div')
  el.innerHTML = html
  return el.textContent || el.innerText || ''
}

export default function NewsletterPage() {
  const [form, setForm] = useState({ FNAME: '', LNAME: '', EMAIL: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const FNAME = form.FNAME.trim()
    const LNAME = form.LNAME.trim()
    const EMAIL = form.EMAIL.trim()

    if (!FNAME || !EMAIL) {
      setError('Please fill in the required fields.')
      return
    }
    if (FNAME.length > 100 || LNAME.length > 100 || EMAIL.length > 255) {
      setError('Please shorten your details and try again.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EMAIL)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const data = await subscribeViaJsonp({ EMAIL, FNAME, LNAME })
      if (data.result === 'success') {
        setStatus('success')
      } else {
        setStatus('idle')
        const msg = stripHtml(data.msg || '').replace(/^\d+\s*-\s*/, '')
        setError(
          /already subscribed/i.test(msg)
            ? 'This email address is already subscribed.'
            : msg || 'We could not complete your subscription. Please try again.',
        )
      }
    } catch {
      setStatus('idle')
      setError('Something went wrong. Please check your connection and try again.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#0d0d0d',
          padding: '6rem 2.5rem 1.25rem',
        }}
      >
        <p
          className="font-semibold uppercase mb-6"
          style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#E8570A' }}
        >
          Newsletter
        </p>
        <h1
          className="font-extrabold uppercase leading-none mb-4 text-cream a11y-no-scale"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            letterSpacing: '-0.02em',
            marginBottom: '1.75rem',
            maxWidth: '900px',
          }}
        >
          Join the <span style={{ color: '#E8570A' }}>movement.</span>
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(245,240,235,0.65)',
            lineHeight: 1.7,
            maxWidth: '620px',
          }}
        >
          Be part of something bigger. Sign up to receive updates on Phoenix's journey, grants, events, and
          insights from across the movement - plus opportunities to get involved.
        </p>
      </section>

      {/* Body */}
      <section
        style={{
          background: '#0d0d0d',
          padding: '1.5rem 2.5rem 6rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto',
            alignItems: 'start',
          }}
        >
          {/* Benefits */}
          <div>
            <p
              className="font-semibold uppercase mb-6"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#f5f0eb' }}
            >
              What you'll receive
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {benefits.map(b => (
                <li key={b.title} style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'rgba(232,87,10,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E8570A',
                    }}
                  >
                    <b.icon size={18} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#f5f0eb',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {b.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(245,240,235,0.6)',
                        lineHeight: 1.6,
                      }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
              }}
            >
              <Lock size={14} style={{ color: '#E8570A', marginTop: '3px', flexShrink: 0 }} />
              <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.5)', lineHeight: 1.6 }}>
                We will never sell or share your details with third parties. You can unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: '#1a1a1a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '2.25rem',
            }}
          >
            {status === 'success' ? (
              <div>
                <h2
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#E8570A',
                    marginBottom: '0.75rem',
                  }}
                >
                  You're in. Welcome to the movement.
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: 1.6 }}>
                  Thanks for signing up. Look out for our next update in your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p
                  className="font-semibold uppercase mb-2"
                  style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#f5f0eb' }}
                >
                  Sign up
                </p>
                <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.45)', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#E8570A' }}>*</span> Required field
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <Field
                    id="FNAME"
                    label="First name"
                    required
                    placeholder="e.g. Sofia"
                    value={form.FNAME}
                    onChange={v => setForm(f => ({ ...f, FNAME: v }))}
                  />
                  <Field
                    id="LNAME"
                    label="Surname"
                    placeholder="e.g. Johnson"
                    value={form.LNAME}
                    onChange={v => setForm(f => ({ ...f, LNAME: v }))}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <Field
                    id="EMAIL"
                    label="Email address"
                    type="email"
                    required
                    placeholder="e.g. sofia@organisation.org"
                    value={form.EMAIL}
                    onChange={v => setForm(f => ({ ...f, EMAIL: v }))}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: '13px', color: '#ff6b6b', marginBottom: '1rem' }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    width: '100%',
                    background: '#C2185B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 28px',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                >
                  {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                  {status !== 'loading' && <ArrowRight size={16} />}
                </button>

                <p
                  style={{
                    fontSize: '12px',
                    color: 'rgba(245,240,235,0.5)',
                    marginTop: '1.25rem',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  By subscribing you agree to receive emails from The Phoenix Community Trust.
                  Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="uppercase"
        style={{
          display: 'block',
          fontSize: '11px',
          letterSpacing: '0.12em',
          fontWeight: 600,
          color: 'rgba(245,240,235,0.7)',
          marginBottom: '0.5rem',
        }}
      >
        {label} {required && <span style={{ color: '#E8570A' }}>*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        maxLength={255}
        style={{
          width: '100%',
          background: '#0d0d0d',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '8px',
          padding: '0.85rem 1rem',
          color: '#f5f0eb',
          fontSize: '14px',
          outline: 'none',
        }}
      />
    </div>
  )
}
