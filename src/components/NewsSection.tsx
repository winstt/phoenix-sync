import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

const { news } = siteContent

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
            className="font-extrabold uppercase"
            style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6rem)', lineHeight: '0.95', letterSpacing: '-0.02em', color: '#f5f0eb' }}
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

      {/* Placeholder banner */}
      <div
        style={{
          textAlign: 'center',
          padding: '3.5rem 1.5rem',
          background: '#0d0d0d',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
        }}
      >
        <h3
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: 700,
            color: '#f5f0eb',
            marginBottom: '1rem',
          }}
        >
          More stories & updates coming soon
        </h3>
        <p style={{ color: 'rgba(245,240,235,0.6)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto' }}>
          We are building our archive of updates, stories and insights from communities across the UK. Check back soon.
        </p>
      </div>
    </section>
  )
}
