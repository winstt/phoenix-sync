import PageHero from '../components/PageHero'
import CountUp from '../components/CountUp'
import partnersContent from '../../content/partners.json'

const BASE = import.meta.env.BASE_URL
const logoByName: Record<string, string> = {
  'Anti Racist Cumbria': `${BASE}images/partners-new/antiracist.png`,
  'National Lottery Community Fund': `${BASE}images/partners-new/comfun.png`,
  'Impact Hub Yorkshire': `${BASE}images/partners-new/impact_hub.png`,
  'The Ubele Initiative': `${BASE}images/partners-new/the_ubele.png`,
  'Black South West Network': `${BASE}images/partners-new/bs_wn.png`,
  'South Asian Health Action': `${BASE}images/partners-new/south_asian.png`,
  'Inclusive North': `${BASE}images/partners-new/inclusive_north.png`,
}

const funderLogos = partnersContent.funders.map(f => ({
  name: f.name,
  url: logoByName[f.name] ?? `${BASE}${(f.logo || '').replace(/^\//, '')}`,
  href: f.href,
}))

const stats = [
  { num: '3000+', label: 'community members impacted' },
  { num: '200+', label: 'community organisations in our network' },
  { num: '£4M', label: 'upcoming grants round in collaboration with TNLCF' },
  { num: '2026', label: 'upcoming opportunity for communities to get involved in our work' },
]

const regions = ['North East & Cumbria', 'Yorkshire & Humber', 'North West', 'East Midlands', 'West Midlands', 'East of England', 'South West', 'Greater London', 'South East']

const partnerImageByName: Record<string, string> = {
  'Black South West Network': `${BASE}images/impact-partners/black_south_west_network_new.png`,
}

const partners = partnersContent.networkPartners.map(p => ({
  name: p.name,
  region: p.region,
  tagline: p.tagline,
  desc: p.desc,
  image: partnerImageByName[p.name] ?? `${BASE}${(p.image || '').replace(/^\//, '')}`,
  href: p.href,
}))

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        heading="Uniting people and organisations across the UK."
        description="We are linking communities and leaders across the UK to amplify collective strength in our communities - championing the leadership and innovation already thriving within Global Majority communities nationwide."
        imageUrl={`${import.meta.env.BASE_URL}images/impact.jpeg`}
      />

      {/* Stats bar - 2x2 grid */}
      <div style={{ background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', width: '100%', overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div
              key={s.num}
              style={{
                padding: 'clamp(1rem, 3vw, 2rem) clamp(0.9rem, 2vw, 1.5rem)',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                minWidth: 0,
              }}
            >
              <CountUp value={s.num} noCount={s.num === '2026'} className="a11y-no-scale" style={{ fontSize: 'clamp(2.5rem, 9vw, 3.75rem)', fontWeight: 800, color: '#E8570A', lineHeight: 1, display: 'block', fontVariantNumeric: 'tabular-nums' }} />
              <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', marginTop: '8px', lineHeight: 1.35 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Regions */}
      <section id="regions" style={{ padding: '4rem 2.5rem 2rem', background: '#0d0d0d' }}>
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
      <section id="partners-section" style={{ padding: '4rem 2rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Our network</p>
          <h2 className="font-bold uppercase mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#f5f0eb' }}>Our current partners</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 0, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', overflow: 'hidden', background: '#0d0d0d' }}>
            {partners.map(p => (
              <article key={p.name} style={{ background: '#0d0d0d', borderRight: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: '#161616' }}>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.name} style={{ display: 'block', width: '100%', height: '100%', cursor: 'pointer' }}>
                      <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.name === 'Impact Hub Yorkshire' ? '22% center' : 'center', display: 'block' }} />
                    </a>
                  ) : (
                    <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                  )}
                </div>
                <div style={{ padding: '1.4rem 1.45rem 1.55rem' }}>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: '#E8570A', marginBottom: '0.45rem', textTransform: 'uppercase', display: 'inline-block', textDecoration: 'underline', textDecorationColor: '#E8570A', textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>{p.name}</a>
                  ) : (
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: '#E8570A', marginBottom: '0.45rem', textTransform: 'uppercase' }}>{p.name}</p>
                  )}
                  <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(245,240,235,0.62)', marginBottom: '0.9rem', textTransform: 'uppercase' }}>{p.region}</p>
                  <h3 style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', fontWeight: 800, color: '#f5f0eb', marginBottom: '0.8rem', lineHeight: 1.35, textTransform: 'uppercase' }}>{p.tagline}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.68)', lineHeight: '1.65', maxWidth: '62ch' }}>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Funders */}
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="font-semibold uppercase mb-10" style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#E8570A' }}>Our current partners and funders</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', alignItems: 'stretch', justifyItems: 'stretch' }}>
          {funderLogos.map(l => {
            const img = <img src={l.url} alt={l.name} loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }} />
            const boxStyle = { height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: '#161616', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' } as const
            return l.href ? (
              <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.name} style={{ ...boxStyle, cursor: 'pointer' }}>{img}</a>
            ) : (
              <div key={l.name} style={boxStyle}>{img}</div>
            )
          })}
        </div>
      </section>
    </>
  )
}
