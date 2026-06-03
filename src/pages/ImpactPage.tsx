import PageHero from '../components/PageHero'
import CountUp from '../components/CountUp'

import antiRacistCumbriaPhoto from '../assets/impact-partners/anti_racistt_cumbriaa.png.asset.json'
import inclusiveNorthPhoto from '../assets/impact-partners/inclusive_northh.png.asset.json'
import impactHubYorkshirePhoto from '../assets/impact-partners/impact_hub_yorkshire.png.asset.json'
import ubeleInitiativePhoto from '../assets/impact-partners/the_ubele_initiativee.png.asset.json'
import blackSouthWestNetworkPhoto from '../assets/impact-partners/black_south_west_network_new.png.asset.json'
import southAsianHealthActionPhoto from '../assets/impact-partners/south_asian_health_action.png.asset.json'

import funderAntiracist from '../assets/funders/antiracist.png.asset.json'
import funderComfun from '../assets/funders/comfun.png.asset.json'
import funderImpactHub from '../assets/funders/impact_hub.png.asset.json'
import funderUbele from '../assets/funders/the_ubele.png.asset.json'
import funderBswn from '../assets/funders/bs_wn.png.asset.json'
import funderSouthAsian from '../assets/funders/south_asian.png.asset.json'
import funderInclusiveNorth from '../assets/funders/inclusive_north_funder2.png.asset.json'

const funderLogos: { name: string; url: string; href?: string }[] = [
  { name: 'Anti Racist Cumbria', url: funderAntiracist.url, href: 'https://antiracistcumbria.org' },
  { name: 'Community Fund', url: funderComfun.url },
  { name: 'Impact Hub Yorkshire', url: funderImpactHub.url, href: 'https://yorkshire.impacthub.net' },
  { name: 'The Ubele Initiative', url: funderUbele.url, href: 'https://ubele.org' },
  { name: 'Black South West Network', url: funderBswn.url, href: 'https://www.blacksouthwestnetwork.org' },
  { name: 'South Asian Health Action', url: funderSouthAsian.url, href: 'https://www.sahauk.org' },
  { name: 'Inclusive North', url: funderInclusiveNorth.url, href: 'https://www.inclusivenorth.org.uk' },
]

const stats = [
  { num: '3000+', label: 'community members impacted' },
  { num: '200+', label: 'community organisations in our network' },
  { num: '£4M', label: 'upcoming grants round in collaboration with TNLCF' },
  { num: '2026', label: 'upcoming opportunity for communities to get involved' },
]

const regions = ['North East & Cumbria', 'Yorkshire & Humber', 'North West', 'East Midlands', 'West Midlands', 'East of England', 'South West', 'Greater London', 'South East']

const partners: { name: string; region: string; tagline: string; desc: string; image: string; href?: string }[] = [
  { name: 'Anti Racist Cumbria', region: 'North East & Cumbria', tagline: 'DISMANTLING RACISM, ADVANCING JUSTICE.', desc: 'Anti Racist Cumbria is a community-led network building collective power across Cumbria.', image: antiRacistCumbriaPhoto.url, href: 'https://antiracistcumbria.org' },
  { name: 'Inclusive North', region: 'North West', tagline: 'CHAMPIONING RACIAL UNITY.', desc: 'Inclusive North is a community-led organisation driving change for Global Majority communities across Lancashire through research, policy innovation and investment.', image: inclusiveNorthPhoto.url, href: 'https://www.inclusivenorth.org.uk' },
  { name: 'Impact Hub Yorkshire', region: 'Yorkshire & Humber', tagline: 'POWERING POSITIVE CHANGE IN YORKSHIRE.', desc: 'A collaborative community connecting entrepreneurs, innovators, and organisations driving positive social and environmental change across Yorkshire.', image: impactHubYorkshirePhoto.url, href: 'https://yorkshire.impacthub.net' },
  { name: 'The Ubele Initiative', region: 'Greater London, South East and East of England', tagline: 'ADVOCATING FOR EQUITY & JUSTICE IN COMMUNITIES.', desc: 'The Ubele Initiative empowers Global Majority communities in the UK to act as catalysts for social and economic change.', image: ubeleInitiativePhoto.url, href: 'https://ubele.org' },
  { name: 'Black South West Network', region: 'South West', tagline: 'BUILDING POWER. CREATING CHANGE.', desc: 'Black South West Network works across the South West to advance racial justice, amplify Black voices, and build lasting opportunities for equity.', image: blackSouthWestNetworkPhoto.url, href: 'https://www.blacksouthwestnetwork.org' },
  { name: 'South Asian Health Action', region: 'East & West Midlands', tagline: 'IMPROVING HEALTH. ADVANCING EQUITY.', desc: 'South Asian Health Action works to improve health outcomes and reduce inequalities for South Asian communities through research, advocacy, and action.', image: southAsianHealthActionPhoto.url, href: 'https://www.sahauk.org' },
]

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        heading="Uniting people and organisations across the UK."
        description="We are linking communities and leaders across the UK to amplify collective strength in our communities — championing the leadership and innovation already thriving within Global Majority communities nationwide."
        imageUrl={`${import.meta.env.BASE_URL}images/impact.jpeg`}
      />

      {/* Stats bar - 2x2 grid */}
      <div style={{ background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div
              key={s.num}
              style={{
                padding: '2.5rem 1.5rem',
                minHeight: '200px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <CountUp value={s.num} style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 800, color: '#E8570A', lineHeight: 1, display: 'block', fontVariantNumeric: 'tabular-nums' }} />
              <p style={{ fontSize: '14px', color: 'rgba(245,240,235,0.6)', marginTop: '14px', lineHeight: 1.4 }}>{s.label}</p>
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
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: '#E8570A', marginBottom: '0.45rem', textTransform: 'uppercase' }}>{p.name}</p>
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
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p className="font-semibold uppercase mb-10" style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#E8570A' }}>Our current partners and funders</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', alignItems: 'stretch', justifyItems: 'stretch' }}>
            {funderLogos.map(l => {
              const img = <img src={l.url} alt={l.name} loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              const boxStyle = { height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: '#161616', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' } as const
              return l.href ? (
                <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.name} style={{ ...boxStyle, cursor: 'pointer' }}>{img}</a>
              ) : (
                <div key={l.name} style={boxStyle}>{img}</div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}
