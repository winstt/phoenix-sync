import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageHero from '../components/PageHero'
import { siteContent } from '../data/content'

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const cards = siteContent.news.cards
  const article = cards.find(c => c.slug === slug)

  if (!article) return <Navigate to="/news" replace />

  const others = cards.filter(c => c.slug !== slug)

  return (
    <>
      <PageHero
        eyebrow={article.tag}
        heading={article.title}
        description={article.date}
        imageUrl={`${import.meta.env.BASE_URL}images/news.jpeg`}
        imagePosition="center top"
      />

      <article style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 no-underline"
            style={{ color: '#E8570A', fontSize: '13px', fontWeight: 600, marginBottom: '2rem' }}
          >
            <ArrowLeft size={14} /> Back to all news
          </Link>

          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8570A', marginBottom: '0.75rem' }}>
            {article.tag}
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#f5f0eb', lineHeight: 1.2, marginBottom: '1rem' }}>
            {article.title}
          </h1>
          <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.5)', marginBottom: '2.5rem' }}>{article.date}</p>

          {article.body?.map((para, i) => (
            <p key={i} style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(245,240,235,0.85)', marginBottom: '1.25rem' }}>
              {para}
            </p>
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#f5f0eb', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
            More news
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {others.map(card => (
              <Link
                key={card.slug}
                to={card.href}
                className="news-card-link block no-underline"
                style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', color: 'inherit' }}
              >
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8570A', marginBottom: '0.5rem' }}>{card.tag}</p>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, color: '#f5f0eb', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', lineHeight: 1.5 }}>{card.description}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.4)', marginTop: '0.75rem' }}>{card.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
