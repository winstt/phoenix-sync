import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { siteContent } from '../data/content'

const { impact } = siteContent

export default function ImpactSection() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      aria-labelledby="impact-heading"
      style={{ padding: '4rem 2.5rem' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left — text + stats */}
        <div>
          <p
            className="font-semibold uppercase mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}
          >
            {impact.label}
          </p>
          <h2
            id="impact-heading"
            className="font-bold uppercase mb-5"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              letterSpacing: '-0.01em',
              color: '#f5f0eb',
            }}
          >
            {impact.title}
          </h2>
          <p style={{ color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {impact.description}
          </p>
          <a
            href={impact.mapCta.href}
            className="inline-flex items-center gap-2 font-semibold no-underline transition-all"
            style={{
              background: 'transparent',
              color: '#f5f0eb',
              padding: '14px 28px',
              fontSize: '15px',
              border: '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#E8570A'
              e.currentTarget.style.color = '#E8570A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#f5f0eb'
            }}
          >
            {impact.mapCta.label}
            <ArrowRight size={16} />
          </a>

          {/* Stats */}
          <div
            ref={statsRef}
            aria-label="Impact statistics"
            className="counter-group"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            {impact.stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  background: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                }}
              >
                <div
                  className="font-extrabold"
                  style={{ fontSize: '1.8rem', color: '#E8570A', fontVariantNumeric: 'tabular-nums' }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)', marginTop: '4px', lineHeight: '1.4' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — map placeholder + regions */}
        <div
          style={{
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '2rem',
            minHeight: '320px',
            position: 'relative',
          }}
        >
          <p
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,235,0.6)',
            }}
          >
            Our regions
          </p>


          {/* Region list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {impact.regions.map((region) => (
              <div
                key={region}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(232,87,10,0.06)',
                  border: '1px solid rgba(232,87,10,0.15)',
                  borderRadius: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#f5f0eb', fontWeight: 500 }}>{region}</span>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#E8570A',
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
