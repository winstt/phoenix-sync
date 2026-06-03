import { useEffect, useRef } from 'react'
import { siteContent } from '../data/content'
import CountUp from './CountUp'

const { impact } = siteContent

export default function ImpactSection() {
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = groupRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])




  return (
    <section
      aria-labelledby="impact-heading"
      style={{ padding: '2rem clamp(1rem, 5vw, 2.5rem)' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left - text + stats */}
        <div>
          <p
            className="font-semibold uppercase mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}
          >
            {impact.label}
          </p>
          <h2
            id="impact-heading"
            className="font-extrabold uppercase mb-5"
            style={{
              fontSize: 'clamp(2.75rem, 7.5vw, 6rem)',
              lineHeight: '0.95',
              letterSpacing: '-0.02em',
              color: '#f5f0eb',
            }}
          >
            {impact.title}
          </h2>
          <p style={{ color: 'rgba(245,240,235,0.7)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.05rem', maxWidth: '560px' }}>
            {impact.description}
          </p>

          {/* Stats */}
          <div
            aria-label="Impact statistics"
            ref={groupRef}
            className="counter-group"


            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 'clamp(0.65rem, 2.5vw, 1rem)',
              marginTop: '2rem',
              width: '100%',
              overflow: 'hidden',
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
                  padding: 'clamp(0.85rem, 3vw, 1.25rem)',
                  minWidth: 0,
                }}
              >
                <CountUp
                  value={stat.num}
                  noCount={stat.num === '2026'}
                  className="font-extrabold a11y-no-scale"
                  style={{ fontSize: 'clamp(1.9rem, 8.4vw, 3rem)', color: '#E8570A', fontVariantNumeric: 'tabular-nums', display: 'block', lineHeight: 1 }}
                />

                <div style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)', marginTop: '4px', lineHeight: '1.4' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - regions box */}
        <div
          style={{
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '2rem',
            position: 'relative',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,235,0.6)',
              marginBottom: '1rem',
            }}
          >
            Our regions
          </p>

          {/* Region list */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '10px',
            }}
          >
            {impact.regions.map((region) => (
              <div
                key={region}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.85rem',
                  background: 'rgba(232,87,10,0.06)',
                  border: '1px solid rgba(232,87,10,0.15)',
                  borderRadius: '6px',
                  minHeight: '44px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#f5f0eb', fontWeight: 500, lineHeight: '1.4' }}>
                  {region}
                </span>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#E8570A',
                    flexShrink: 0,
                    marginLeft: '8px',
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
