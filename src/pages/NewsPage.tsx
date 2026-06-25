import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        heading="News & updates."
        description="Stories, updates and insights from our work - and from the communities and leaders at the heart of this movement."
        imageUrl={`${import.meta.env.BASE_URL}images/news.jpeg`}
        imagePosition="center top"
      />

      <section style={{ padding: '4rem 2.5rem 2rem', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Announcement */}
          <article
            style={{
              background: '#1a1a1a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderLeft: '3px solid #E8570A',
              borderRadius: '8px',
              padding: '1.75rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
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
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5f0eb', lineHeight: 1.3, margin: 0 }}>
              New grants are now open: The Step Forward Fund
            </h2>
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
        </div>
      </section>

      <section style={{ padding: '2rem 2.5rem 4rem', background: '#0d0d0d' }}>
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '1rem' }}>More stories & updates coming soon</h3>
          <p style={{ color: 'rgba(245,240,235,0.6)', fontSize: '0.95rem' }}>We are building our archive of updates, stories and insights from communities across the UK. Check back soon.</p>
        </div>
      </section>
    </>
  )
}
