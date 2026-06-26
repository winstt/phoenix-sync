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

      {/* Announcement */}
      <article
        style={{
          background: '#0d0d0d',
          border: '1px solid rgba(255,255,255,0.1)',
          borderLeft: '3px solid #E8570A',
          borderRadius: '8px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}
      >
        <span
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#E8570A', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}
        >
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8570A' }} aria-hidden="true" />
          Announcement
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5f0eb', lineHeight: 1.3, margin: 0 }}>
          New grants are now open: The Step Forward Fund
        </h3>
        <p style={{ color: 'rgba(245,240,235,0.7)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
          Applications are open for grassroots groups from Global Majority communities across England. Find eligibility, deadlines and how to apply on our Grants page.
        </p>
        <Link
          to="/grants"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: '#E8570A', fontWeight: 700, textDecoration: 'none',
            fontSize: '0.9rem', marginTop: '0.25rem',
          }}
        >
          Read more on our Grants page <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </article>

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
