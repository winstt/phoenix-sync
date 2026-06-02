import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { siteContent } from '../data/content'

const filters = ['All', 'Announcements', 'Community', 'Grants']

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = siteContent.news.cards.filter(card =>
    activeFilter === 'All' || card.tag === activeFilter || card.tag === activeFilter.replace(/s$/, '')
  )

  return (
    <>
      <PageHero
        eyebrow="News"
        heading="News & updates."
        description="Stories, updates and insights from our work — and from the communities and leaders at the heart of this movement."
        imageUrl={`${import.meta.env.BASE_URL}images/news.jpeg`}
        imagePosition="center top"
      />

      {/* Filters */}
      <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: 600,
              border: '1px solid',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: activeFilter === f ? '#E8570A' : 'transparent',
              borderColor: activeFilter === f ? '#E8570A' : 'rgba(255,255,255,0.15)',
              color: activeFilter === f ? 'white' : 'rgba(245,240,235,0.6)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* News grid */}
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        {filtered.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((card, i) => (
              <a
                key={card.title}
                href="#"
                className="news-card-link block no-underline"
                style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', color: 'inherit' }}
              >
                <div style={{ height: '140px', overflow: 'hidden' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/news-${(i % 3) + 1}.svg`}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8570A', marginBottom: '0.5rem' }}>{card.tag}</p>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: '1.4', color: '#f5f0eb', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', lineHeight: '1.5' }}>{card.description}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.4)', marginTop: '0.75rem' }}>{card.date}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '1rem' }}>More stories & updates coming soon</h3>
            <p style={{ color: 'rgba(245,240,235,0.6)', fontSize: '0.95rem' }}>We are building our archive of updates, stories and insights from communities across the UK. Check back soon.</p>
          </div>
        )}
      </section>
    </>
  )
}
