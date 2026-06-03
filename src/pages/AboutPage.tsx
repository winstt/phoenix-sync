import { useState } from 'react'
import PageHero from '../components/PageHero'

import funderAntiracist from '../assets/funders/antiracist.png.asset.json'
import funderComfun from '../assets/funders/comfun.png.asset.json'
import funderImpactHub from '../assets/funders/impact_hub.png.asset.json'
import funderUbele from '../assets/funders/the_ubele.png.asset.json'
import funderBswn from '../assets/funders/bs_wn.png.asset.json'
import funderSouthAsian from '../assets/funders/south_asian.png.asset.json'
import funderInclusiveNorth from '../assets/funders/inclusive_north_funder2.png.asset.json'

import amnaPhoto from '../assets/trustees/Amna-Abdullatif.jpg.asset.json'
import abdouPhoto from '../assets/trustees/Abdou-Sidibe-scaled.jpeg.asset.json'
import anishPhoto from '../assets/trustees/Anish-Saxena.png.asset.json'
import bilalPhoto from '../assets/trustees/Bilal-Malik.jpeg.asset.json'
import florencePhoto from '../assets/trustees/Florence-Nyasamo-e1779710467947.jpg.asset.json'
import shelleyPhoto from '../assets/trustees/Shelley-Bishton-scaled.jpg.asset.json'
import tayshanPhoto from '../assets/trustees/Tayshan-Hayden-Smith.avif.asset.json'

const trustees = [
  { name: 'Amna Abdullatif', photo: amnaPhoto.url, bio: 'Amna is a community psychologist with over 15 years\' experience in the voluntary sector, leading national and international work to support women and children. A Vital Voices Visionary, she is an international speaker and writer whose published work explores women\'s lived experience, social change, and cultures of silence around abuse. Amna was elected as a local Councillor in Manchester in 2019, becoming the first visibly Muslim woman of Arab heritage to serve in the city. She also co-founded The Three Hijabis, a platform tackling racism, Islamophobia and misogyny using football as a catalyst for wider change.' },
  { name: 'Abdou Sidibe', photo: abdouPhoto.url, bio: 'Abdou is Director of Grants at the Paul Hamlyn Foundation, where he oversees an annual portfolio exceeding £40 million. A steering group member of the Funders for Race Equality Alliance, Abdou worked at The National Lottery Community Fund during the landmark £50 million investment for racial justice whilst leading the England Partnerships team, making him uniquely placed to support our mission.' },
  { name: 'Anish Saxena', photo: anishPhoto.url, bio: 'Anish is a Chartered Accountant, MBA and experienced Independent Non-Executive Director with a deep background in global risk management. Currently serving as Audit Lead at Moody\'s, he brings over 15 years of essential expertise in financial and corporate governance, audit, and compliance that will strengthen our stewardship of the £50 million investment.' },
  { name: 'Bilal Malik', photo: bilalPhoto.url, bio: 'Bilal is a UK diplomat with experience across East Africa, the multilateral system and Whitehall at the Foreign, Commonwealth & Development Office. He has worked on colonial legacy issues in Kenya, humanitarian and political engagement in Sudan, and international development policy, bringing a strong grounding in governance, political analysis and cross-sector coordination.' },
  { name: 'Florence Nyasamo', photo: florencePhoto.url, bio: 'Florence is a systems change leader and founder and CEO of Lives of Colour, designing practical ways to shift power, resources and opportunity towards marginalised communities. Her work spans social and racial justice, community wealth building, ethical governance, sustainable finance and digitally enabled participation.' },
  { name: 'Shelley Bishton', photo: shelleyPhoto.url, bio: 'Shelley is a multi-award-winning cultural transformation specialist with over 20 years of experience driving change where culture meets commerce. As former Head of Diversity, Equity and Inclusion at News UK and a trustee of the Black British Initiative, she brings exceptional expertise in inclusive organisational development and community partnership building.' },
  { name: 'Tayshan Hayden-Smith', photo: tayshanPhoto.url, bio: 'Tayshan is a British community activist and garden designer. He co-founded the non-profit Grow to Know, which focuses on "horticultural activism" to make gardening more accessible to diverse and disadvantaged communities. A regular face on BBC\'s Your Garden Made Perfect and a published author, he continues to advocate for social justice and environmental equity.' },
]

const values = [
  { title: 'Community Power', text: 'We believe Global Majority communities hold the expertise, knowledge and vision to direct their own futures. We shift power from traditional funders to communities, ensuring those closest to the challenges lead the solutions.' },
  { title: 'Radical Trust and Transparency', text: 'We communicate openly and honestly, even when it\'s difficult. We share information early, explain our constraints clearly, and build and sustain trust through consistent action, presence, kind conflict, truth-telling and follow-through.' },
  { title: 'Collective Accountability', text: 'We hold ourselves and our partners to high standards while recognising that we are accountable to communities first. We balance governance responsibilities with our commitment to do things differently, setting realistic and achievable goals.' },
  { title: 'Intersectionality, Equity and Reciprocity', text: 'We recognise that racial justice cannot exist in isolation. Our partnerships are grounded in fairness, inclusivity and shared power, challenging extractive practices, meeting communities where they are, and ensuring independence and respect in every relationship.' },
  { title: 'Innovation Through Learning', text: 'We test, learn and evolve, knowing we are building something unprecedented. We embrace experimentation and accept imperfection as part of progress. Reflection and iteration are core to how we grow.' },
  { title: 'Sustainable Transformation', text: 'We work beyond traditional grant-making towards models that build community wealth, reduce dependency and create lasting economic power. We prioritise long-term sustainability over short-term cycles.' },
  { title: 'Legacy and Liberation', text: 'We honour the work and relationships that created this movement, carrying their lessons forward as we build what comes next. We exist to change the structures that create inequality, not to manage their symptoms.' },
]

const partners: { name: string; logo: string; href?: string }[] = [
  { name: 'Anti Racist Cumbria', logo: funderAntiracist.url, href: 'https://antiracistcumbria.org' },
  { name: 'Inclusive North', logo: funderInclusiveNorth.url },
  { name: 'Impact Hub Yorkshire', logo: funderImpactHub.url, href: 'https://yorkshire.impacthub.net' },
  { name: 'The Ubele Initiative', logo: funderUbele.url, href: 'https://ubele.org' },
  { name: 'Black South West Network', logo: funderBswn.url, href: 'https://www.blacksouthwestnetwork.org' },
  { name: 'South Asian Health Action', logo: funderSouthAsian.url, href: 'https://www.sahauk.org' },
  { name: 'National Lottery Community Fund', logo: funderComfun.url },
]

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
          <a href={`${import.meta.env.BASE_URL}#/opportunities`} style={{ fontSize: '14px', color: '#E91E8C', textDecoration: 'none' }}>
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
          {partners.map(p => (
            <div key={p.name} style={{ height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: '#161616', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
              <img src={p.logo} alt={p.name} loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
