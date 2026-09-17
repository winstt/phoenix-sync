import PageHero from '../components/PageHero'

export default function GrantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Grants"
        heading="Funding justice in action."
        description="The Phoenix Community Trust is committed to redistributing power and resources to Global Majority and racially minoritised communities across the UK - through grants, investment, and long-term community infrastructure."
        imageUrl={`${import.meta.env.BASE_URL}images/grants.jpeg`}
      />

      {/* Statement band */}
      <div style={{ background: '#E8570A', padding: '2rem 2.5rem' }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0d0d0d', maxWidth: '900px', margin: '0 auto', textAlign: 'center', lineHeight: 1.5 }}>
          By investing in Global Majority and racially minoritised communities, we dismantle structural racism and strengthen the collective power of our communities
        </p>
      </div>

      {/* Register interest */}
      <section style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 className="font-bold uppercase mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Register your interest</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '640px', marginBottom: '2rem' }}>
          Be part of a national movement strengthening leadership and collaboration across the UK — register your interest to receive updates on upcoming grants, events, and opportunities to engage with The Phoenix Community Trust.
        </p>
        <a
          href="/contact"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C2185B', color: 'white', textDecoration: 'none', padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 600 }}
        >
          Click here to register your interest →
        </a>
      </section>
    </>
  )
}
