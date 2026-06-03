import { ArrowRight } from 'lucide-react'
import { siteContent } from '../data/content'

const { pillars } = siteContent

export default function Pillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      style={{ padding: '2.5rem' }}
    >
      {/* Hidden heading for a11y */}
      <h2 id="pillars-heading" className="sr-only">Our pillars</h2>

      {/* Grid */}
      <div
        role="list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5px',
          background: 'rgba(255,255,255,0.1)',
          border: '1.5px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        {pillars.map((pillar) => (
          <div
            key={pillar.num}
            role="listitem"
            style={{ background: '#1a1a1a', padding: '2rem' }}
          >

            {/* Title */}
            <h3
              className="font-bold uppercase tracking-wide mb-3"
              style={{ fontSize: '1rem', letterSpacing: '0.05em', color: '#f5f0eb' }}
            >
              {pillar.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6' }}>
              {pillar.description}
            </p>

            {/* Link */}
            <a
              href={pillar.link.href}
              className="inline-flex items-center gap-1 font-semibold no-underline mt-5 transition-colors"
              style={{ fontSize: '13px', color: '#E91E8C', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#E91E8C')}
            >
              {pillar.link.label}
              <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
