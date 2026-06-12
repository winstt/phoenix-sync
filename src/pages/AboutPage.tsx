import { useState } from 'react'
import PageHero from '../components/PageHero'
import trusteesContent from '../../content/trustees.json'
import partnersContent from '../../content/partners.json'

const BASE = import.meta.env.BASE_URL
const logoByName: Record<string, string> = {
  'Anti Racist Cumbria': `${BASE}images/partners/anti-racist-cumbria-logo.png`,
  'National Lottery Community Fund': `${BASE}images/partners/national-lottery-community-fund.png`,
  'Impact Hub Yorkshire': `${BASE}images/partners/impact-hub-yorkshire-logo.png`,
  'The Ubele Initiative': `${BASE}images/partners/the-ubele-logo.png`,
  'Black South West Network': `${BASE}images/partners/black-south-west-network-logo.png`,
  'South Asian Health Action': `${BASE}images/partners/south-asian-health-action-logo.png`,
  'Inclusive North': `${BASE}images/partners/inclusive-north-logo.png`,
}

const trustees = trusteesContent.trustees

const values = [
  { title: 'Community Power', text: 'We believe Global Majority communities hold the expertise, knowledge and vision to direct their own futures. We shift power from traditional funders to communities, ensuring those closest to the challenges lead the solutions.' },
  { title: 'Radical Trust and Transparency', text: 'We communicate openly and honestly, even when it\'s difficult. We share information early, explain our constraints clearly, and build and sustain trust through consistent action, presence, kind conflict, truth-telling and follow-through.' },
  { title: 'Collective Accountability', text: 'We hold ourselves and our partners to high standards while recognising that we are accountable to communities first. We balance governance responsibilities with our commitment to do things differently, setting realistic and achievable goals.' },
  { title: 'Intersectionality, Equity and Reciprocity', text: 'We recognise that racial justice cannot exist in isolation. Our partnerships are grounded in fairness, inclusivity and shared power, challenging extractive practices, meeting communities where they are, and ensuring independence and respect in every relationship.' },
  { title: 'Innovation Through Learning', text: 'We test, learn and evolve, knowing we are building something unprecedented. We embrace experimentation and accept imperfection as part of progress. Reflection and iteration are core to how we grow.' },
  { title: 'Sustainable Transformation', text: 'We work beyond traditional grant-making towards models that build community wealth, reduce dependency and create lasting economic power. We prioritise long-term sustainability over short-term cycles.' },
  { title: 'Legacy and Liberation', text: 'We honour the work and relationships that created this movement, carrying their lessons forward as we build what comes next. We exist to change the structures that create inequality, not to manage their symptoms.' },
]

const partners = partnersContent.funders

export default function AboutPage() {
  const [openValue, setOpenValue] = useState<number | null>(0)
  return (

    <>
      <PageHero
        eyebrow="About us"
        heading="Who we are & what we stand for."
        description="The Phoenix Way is a Global Majority movement for funding justice and systems change, rooted in lived experience and community-led decision making, ending funding inequity by redistributing power and resources to our communities."
        imageUrl={`${import.meta.env.BASE_URL}images/about-us.jpeg`}
      />

      {/* Trustees */}
      <section id="trustees-h2" style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Our leaders</p>
        <h2 className="font-bold uppercase mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Board of Trustees</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '700px', marginBottom: '3rem' }}>
          The Phoenix Community Trust is guided by leaders already shaping their fields, united by deep professional experience, lived insight, and a shared dedication to fostering meaningful collaboration across the UK.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {trustees.map(t => (
            <div key={t.name} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.75rem' }}>
              <div style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.25rem', background: '#0d0d0d' }}>
                <img src={t.photo} alt={t.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.name === 'Shelley Bishton' ? 'center 6%' : 'center', display: 'block' }} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.75rem' }}>{t.name}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6' }}>{t.bio}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <a href={`${import.meta.env.BASE_URL}opportunities`} style={{ fontSize: '14px', color: '#E91E8C', textDecoration: 'none' }}>
            Click here for opportunities to work with us →
          </a>
        </div>
      </section>

      {/* Values */}
      <section id="values" style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>What we stand for</p>
        <h2 className="font-bold uppercase mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Our values</h2>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          {values.map((v, i) => {
            const isOpen = openValue === i
            return (
              <div key={v.title} style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <button
                  type="button"
                  onClick={() => setOpenValue(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.4rem 0.25rem', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: '#f5f0eb' }}
                >
                  <h3 style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f5f0eb', margin: 0 }}>{v.title}</h3>
                  <span aria-hidden style={{ fontSize: '1.5rem', fontWeight: 300, color: '#E8570A', transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', lineHeight: 1, flexShrink: 0 }}>+</span>
                </button>
                <div style={{ overflow: 'hidden', display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.35s ease' }}>
                  <div style={{ minHeight: 0 }}>
                    <p style={{ fontSize: '14px', color: 'rgba(245,240,235,0.7)', lineHeight: '1.7', padding: '0 0 1.4rem', maxWidth: '760px' }}>{v.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </section>

      {/* Origin */}
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Our origin story</p>
        <h2 className="font-bold uppercase mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>How Phoenix was born</h2>
        <div style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            'The Phoenix Community Trust emerged as a community-led response to the structural inequalities confronting Global Majority communities in the UK. In the midst of the COVID-19 pandemic, the Phoenix Fund mobilised emergency funding support for grassroots groups, getting resources to communities at pace, when they were needed most.',
            'As the work grew from The Phoenix Fund with the National Lottery Community Fund, some of the partners came together as The Phoenix Way - working with a shared ambition to dismantle systemic racism in philanthropy and drive lasting, community-led, transformative change.',
            'A new chapter began when Phoenix was incorporated as an independent Global Majority-led organisation, with a newly appointed independent Board, to steward the next phase of the work. The new structure lays the foundation for long term investment in community infrastructure and the development of a lasting model for change.',
            'We honour the roots of The Phoenix Community Trust and the communities and partners who shaped its early momentum, while looking forward with renewed energy and excitement to what comes next.',
          ].map((p, i) => (
            <p key={i} style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.7)', lineHeight: '1.75' }}>{p}</p>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="font-semibold uppercase mb-10" style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#E8570A' }}>Our current partners and funders</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', alignItems: 'stretch', justifyItems: 'stretch' }}>
          {partners.map(p => {
            const img = (
              <img
                src={logoByName[p.name] ?? `${BASE}${(p.logo || '').replace(/^\//, '')}`}
                alt={p.name}
                loading="lazy"
                style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
                onError={(e) => {
                  const el = e.currentTarget
                  el.style.display = 'none'
                  const parent = el.parentElement
                  if (parent && !parent.querySelector('[data-logo-fallback]')) {
                    const span = document.createElement('span')
                    span.setAttribute('data-logo-fallback', 'true')
                    span.textContent = p.name
                    span.style.cssText = 'color:#f5f0eb;font-size:12px;font-weight:600;text-align:center;line-height:1.3;'
                    parent.appendChild(span)
                  }
                }}
              />
            )
            const boxStyle = { height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: '#161616', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' } as const
            return p.href ? (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.name} style={{ ...boxStyle, cursor: 'pointer' }}>{img}</a>
            ) : (
              <div key={p.name} style={boxStyle}>{img}</div>
            )
          })}
        </div>
      </section>
    </>
  )
}
