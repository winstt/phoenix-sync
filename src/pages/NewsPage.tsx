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

      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '1rem' }}>More stories & updates coming soon</h3>
          <p style={{ color: 'rgba(245,240,235,0.6)', fontSize: '0.95rem' }}>We are building our archive of updates, stories and insights from communities across the UK. Check back soon.</p>
        </div>
      </section>
    </>
  )
}
