import PageHero from '../components/PageHero'

const stats = [
  { num: '9', label: 'regions across the UK' },
  { num: '100+', label: 'community organisations in our network' },
  { num: '£4M', label: 'upcoming grants round in collaboration with TNLCF' },
  { num: '2026', label: 'upcoming opportunity for communities to get involved' },
]

const regions = ['North East & Cumbria', 'Yorkshire & Humber', 'North West', 'East Midlands', 'West Midlands', 'East of England', 'South West', 'Greater London', 'South East']

const partners = [
  { name: 'Anti Racist Cumbria', region: 'North East & Cumbria', tagline: 'DISMANTLING RACISM, ADVANCING JUSTICE.', desc: 'Anti Racist Cumbria is a community-led network building collective power across Cumbria.' },
  { name: 'Inclusive North', region: 'North West', tagline: 'CHAMPIONING RACIAL UNITY.', desc: 'Inclusive North is a community-led organisation driving change for Global Majority communities across Lancashire through research, policy innovation and investment.' },
  { name: 'Impact Hub Yorkshire', region: 'Yorkshire & Humber', tagline: 'POWERING POSITIVE CHANGE IN YORKSHIRE.', desc: 'A collaborative community connecting entrepreneurs, innovators, and organisations driving positive social and environmental change across Yorkshire.' },
  { name: 'The Ubele Initiative', region: 'Greater London, South East & East of England', tagline: 'ADVOCATING FOR EQUITY & JUSTICE IN COMMUNITIES.', desc: 'The Ubele Initiative empowers Global Majority communities in the UK to act as catalysts for social and economic change.' },
  { name: 'Black South West Network', region: 'South West', tagline: 'BUILDING POWER. CREATING CHANGE.', desc: 'Black South West Network works across the South West to advance racial justice, amplify Black voices, and build lasting opportunities for equity.' },
  { name: 'South Asian Health Action', region: 'East & West Midlands', tagline: 'IMPROVING HEALTH. ADVANCING EQUITY.', desc: 'South Asian Health Action works to improve health outcomes and reduce inequalities for South Asian communities through research, advocacy, and action.' },
]

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        heading="Uniting people and organisations across the UK."
        description="We are linking communities and leaders across the UK to amplify collective strength in our communities — championing the leadership and innovation already thriving within Global Majority communities nationwide."
        imageUrl="/phoenix/images/impact.jpeg"
      />

      {/* Stats bar */}
      <div style={{ background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '2rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', maxWidth: '900px' }}>
          {stats.map(s => (
            <div key={s.num}>
              <p style={{ fontSize: '2.4rem', fontWeight: 800, color: '#E8570A', lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)', marginTop: '6px', lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Regions */}
      <section id="regions" style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Where we work</p>
        <h2 className="font-bold uppercase mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Our current active regions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {regions.map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1rem', background: '#1a1a1a', border: '1px solid rgba(232,87,10,0.2)', borderRadius: '8px' }}>
              <span style={{ fontSize: '14px', color: '#f5f0eb', fontWeight: 500 }}>{r}</span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8570A', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section id="partners-section" style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Our network</p>
        <h2 className="font-bold uppercase mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Our current partners</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {partners.map(p => (
            <div key={p.name} style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.75rem' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#E8570A', marginBottom: '0.4rem' }}>{p.region}</p>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.4rem' }}>{p.name}</h3>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(245,240,235,0.4)', marginBottom: '0.75rem' }}>{p.tagline}</p>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
