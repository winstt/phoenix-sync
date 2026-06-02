import { siteContent } from '../data/content'

const { origin } = siteContent

export default function OriginSection() {
  return (
    <section
      aria-labelledby="origin-heading"
      style={{
        padding: '0.5rem 2.5rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        background: '#1a1a1a',
      }}
    >
      <div className="origin-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Left — title */}
        <div>
          <h2
            id="origin-heading"
            className="font-extrabold uppercase"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: '#f5f0eb',
              lineHeight: '1.1',
              marginBottom: '4rem',
            }}
          >
            {origin.title}
          </h2>
        </div>

        {/* Right — timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: '1.5rem' }}>
          {origin.entries.map((entry, i) => (
            <div
              key={entry.year}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '1.5rem',
                padding: i === 0 ? '0 0 2rem' : '2rem 0',
                borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                alignItems: 'start',
              }}
            >
              <span
                className="font-extrabold"
                style={{
                  fontSize: '13px',
                  color: entry.isToday ? '#E91E8C' : '#E8570A',
                  letterSpacing: '0.06em',
                  paddingTop: '3px',
                }}
              >
                {entry.year}
              </span>
              <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.75', margin: 0 }}>
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
