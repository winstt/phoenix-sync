import PageHero from '../components/PageHero'
import { PoundSterling, MapPin, Calendar, Check, ArrowRight } from 'lucide-react'

export default function GrantsPage() {
  const eligibility = [
    'Received £20,000 or less from The National Lottery Community Fund between April 2023 and March 2026',
    'Applied to Reaching Communities (England) between April 2023 and March 2026 and were unsuccessful',
    'Have a board or leadership team where most members are from Global Majority and racially minoritised communities',
    'Prioritise services and activities for Global Majority and racially minoritised communities',
    'Have an annual income under £300,000, based on a 3-year average',
  ]

  const facts = [
    { icon: <PoundSterling size={20} />, num: '£100k–£225k', label: 'Over 2–3 years' },
    { icon: <MapPin size={20} />, num: 'England', label: 'Project location' },
    { icon: <Calendar size={20} />, num: '11 Sep 2026', label: 'Application deadline' },
  ]

  return (
    <>
      <PageHero
        eyebrow="Grants"
        heading="Funding justice in action."
        description="The Phoenix Community Trust is committed to redistributing power and resources to Global Majority communities across the UK - through grants, investment, and long-term community infrastructure."
        imageUrl={`${import.meta.env.BASE_URL}images/grants.jpeg`}
      />

      {/* Statement band */}
      <div style={{ background: '#E8570A', padding: '2rem 2.5rem' }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0d0d0d', maxWidth: '900px', margin: '0 auto', textAlign: 'center', lineHeight: 1.5 }}>
          By investing in Global Majority communities, we dismantle structural racism and strengthen the collective power of our communities
        </p>
      </div>

      {/* Step Forward Fund */}
      <section style={{ padding: '5rem 2.5rem', background: '#0d0d0d', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Status pill */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(232,87,10,0.12)', border: '1px solid rgba(232,87,10,0.4)',
            color: '#E8570A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '7px 14px 7px 12px', borderRadius: '999px',
            marginBottom: '1.75rem'
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8570A', flexShrink: 0 }} aria-hidden="true" />
            Open for applications now
          </span>

          {/* Header: title/description + facts grid */}
          <div className="fund-header-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'start', marginBottom: '3rem' }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, textTransform: 'uppercase',
                letterSpacing: '-0.01em', color: '#f5f0eb', lineHeight: 1.1, marginBottom: '1.25rem'
              }}>
                The <span style={{ color: '#E91E8C' }}>Step Forward</span> Fund
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(245,240,235,0.6)', lineHeight: 1.8, maxWidth: '560px' }}>
                For grassroots groups from Global Majority communities who are ready to take their next step forward, but haven't yet had sufficient investment to get there.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', marginTop: '1.1rem' }}>
                Delivered in collaboration with <strong style={{ color: '#f5f0eb', fontWeight: 600 }}>The National Lottery Community Fund</strong>.
              </p>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.5px',
              background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: '12px', overflow: 'hidden', alignSelf: 'start'
            }}>
              {facts.map(f => (
                <div key={f.label} style={{ background: '#1a1a1a', padding: '1.5rem 1.25rem' }}>
                  <div style={{ color: '#E8570A', marginBottom: '0.75rem' }}>{f.icon}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f5f0eb', lineHeight: 1.2 }}>{f.num}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(245,240,235,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Body: Who can apply / Eligibility */}
          <div className="fund-body-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '3rem',
            paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div>
              <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#E8570A', marginBottom: '1.25rem' }}>Who can apply</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: 1.8, marginBottom: '1rem' }}>
                The Step Forward Fund is intended <strong style={{ color: '#f5f0eb', fontWeight: 600 }}>specifically</strong> for groups and organisations that have previously benefited from smaller National Lottery grants (£20,000 and under) but have been unsuccessful in applying to Reaching Communities.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: 1.8 }}>
                The scheme comes as part of TNLCF's £50 million award to us at The Phoenix Community Trust (formerly The Phoenix Way) over five years to support Global Majority and racially minoritised communities across England.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#E8570A', marginBottom: '1.25rem' }}>Eligibility</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', padding: 0, margin: 0 }}>
                {eligibility.map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'rgba(245,240,235,0.6)', lineHeight: 1.55 }}>
                    <Check size={15} style={{ color: '#E91E8C', flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#E8570A', color: '#0d0d0d', textDecoration: 'none',
                padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 700
              }}
            >
              How to apply <ArrowRight size={16} aria-hidden="true" />
            </a>
            <span style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)' }}>
              Applications close <strong style={{ color: '#f5f0eb' }}>11th September 2026</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Register interest */}
      <section style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 className="font-bold uppercase mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Register your interest</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '640px', marginBottom: '2rem' }}>
          Be part of a national movement strengthening leadership and collaboration across the UK — register your interest to receive updates on upcoming grants, events, and opportunities to engage with The Phoenix Community Trust.
        </p>
        <a
          href="/contact"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C2185B', color: 'white', textDecoration: 'none', padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 600 }}
        >
          Click here to register your interest →
        </a>
      </section>

      {/* Responsive: collapse 2-col grids on smaller viewports */}
      <style>{`
        @media (max-width: 900px) {
          .fund-header-grid { grid-template-columns: 1fr !important; }
          .fund-body-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 600px) {
          .fund-header-grid > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
