import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

const { news } = siteContent

// Placeholder SVG images for news cards (matching original design)
const cardSvgs = [
  // Orange circle accent
  <svg key="a" width="100%" height="140" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="300" height="140" fill="#1a1a1a" />
    <circle cx="60" cy="70" r="80" fill="none" stroke="#E8570A" strokeWidth="40" opacity="0.15" />
  </svg>,
  // Pink circle accent
  <svg key="b" width="100%" height="140" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="300" height="140" fill="#1a1a1a" />
    <circle cx="240" cy="70" r="80" fill="none" stroke="#C2185B" strokeWidth="40" opacity="0.15" />
  </svg>,
  // Mixed accents
  <svg key="c" width="100%" height="140" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="300" height="140" fill="#1a1a1a" />
    <circle cx="150" cy="140" r="100" fill="none" stroke="#E8570A" strokeWidth="30" opacity="0.12" />
    <circle cx="50" cy="20" r="40" fill="none" stroke="#C2185B" strokeWidth="20" opacity="0.1" />
  </svg>,
]

export default function NewsSection() {
  return (
    <section
      aria-labelledby="news-heading"
      style={{
        padding: '2rem 2.5rem',
        background: '#1a1a1a',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <p
            className="font-semibold uppercase mb-2"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}
          >
            {news.label}
          </p>
          <h2
            id="news-heading"
            className="font-bold uppercase"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', letterSpacing: '-0.01em', color: '#f5f0eb' }}
          >
            {news.title}
          </h2>
        </div>
        <a
          href={news.allNewsCta.href}
          className="inline-flex items-center gap-2 font-semibold no-underline transition-all"
          style={{
            background: 'transparent',
            color: '#f5f0eb',
            padding: '10px 20px',
            fontSize: '13px',
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
          {news.allNewsCta.label}
          <ArrowRight size={14} />
        </a>
      </div>

      {/* Card grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {news.cards.map((card, i) => (
          <Link
            key={card.title}
            to={card.href}
            className="news-card-link block no-underline"
            style={{
              background: '#0d0d0d',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              color: 'inherit',
            }}
          >
            {/* Card image */}
            <div style={{ height: '140px', overflow: 'hidden' }}>
              {cardSvgs[i % cardSvgs.length]}
            </div>

            {/* Card body */}
            <div style={{ padding: '1.25rem' }}>
              <p
                className="font-semibold uppercase mb-2"
                style={{ fontSize: '11px', letterSpacing: '0.08em', color: '#E8570A' }}
              >
                {card.tag}
              </p>
              <h3
                className="font-semibold mb-2"
                style={{ fontSize: '0.95rem', lineHeight: '1.4', color: '#f5f0eb' }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', lineHeight: '1.5' }}>
                {card.description}
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)', marginTop: '0.75rem' }}>
                {card.date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
