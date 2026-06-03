import PageHero from '../components/PageHero'

export default function GrantsPage() {

  return (
    <>
      <PageHero
        eyebrow="Grants"
        heading="Funding justice in action."
        description="The Phoenix Community Trust is committed to redistributing power and resources to Global Majority communities across the UK - through grants, investment, and long-term community infrastructure."
        imageUrl={`${import.meta.env.BASE_URL}images/grants.jpeg`}
      />

      {/* Statement band */}
      <div style={{ background: '#E8570A', padding: '2rem 2.5rem' }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0d0d0d', maxWidth: '900px', margin: '0 auto', textAlign: 'center', lineHeight: 1.5 }}>
          By investing in Global Majority communities, we dismantle structural racism and strengthen the collective power of our communities
        </p>
      </div>

      {/* TNLCF section */}
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Our grants</p>
        <h2 className="font-bold uppercase mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>
          In collaboration with The National Lottery Community Fund
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              We are working with The National Lottery Community Fund (TNLCF) - one of the UK's largest funders of community projects that help people connect and build a better future - to deliver our 2026 grants round.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.75' }}>
              This collaboration reflects our commitment to redistributing power and resources to Global Majority communities, and to building a funding system that truly reflects the communities it serves.
            </p>
          </div>
          {/* Grant card */}
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '2rem' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8570A', marginBottom: '0.75rem' }}>2026 Grants Round</p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '1rem' }}>New grants round - coming soon</h3>
            <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Details of our 2026 grants round with TNLCF will be announced soon. Register your interest below to be among the first to hear when applications open.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Applications opening 2026 - register interest now', 'Open to organisations across all UK regions', 'Targeted at Global Majority community-led organisations', '£4M available in collaboration with TNLCF'].map(item => (
                <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#E8570A', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Register interest */}
      <section style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Register your interest</p>
        <h2 className="font-bold uppercase mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Explore our latest grants</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '640px', marginBottom: '2rem' }}>
          Be part of a national movement strengthening leadership and collaboration across the UK. Register your interest to receive updates on upcoming grants, events, and opportunities to engage with The Phoenix Community Trust.
        </p>
        <a href={`${import.meta.env.BASE_URL}#/contact`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C2185B', color: 'white', textDecoration: 'none', padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 600 }}
        >
          Register your interest →
        </a>
      </section>
    </>
  )
}
