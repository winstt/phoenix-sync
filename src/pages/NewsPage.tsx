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
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* CEO announcement */}
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
              Announcement · September 2026
            </span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5f0eb', lineHeight: 1.3, margin: 0 }}>
              Shane Ryan MBE Appointed CEO of The Phoenix Community Trust
            </h2>
            <p style={{ color: 'rgba(245,240,235,0.7)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              We are delighted to announce the appointment of Shane Ryan MBE as our first Chief Executive Officer, marking a pivotal moment as Phoenix steps into its next chapter as an independent, community-led institution.
            </p>
            <Link
              to="/news/shane-ryan-appointed-ceo"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                color: '#E8570A', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
                marginTop: '0.25rem',
              }}
            >
              Read the full announcement <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </article>

          {/* Tender announcement */}
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
              Announcement · 14 July 2026
            </span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5f0eb', lineHeight: 1.3, margin: 0 }}>
              Invitation to Tender: Strategy Development Partner Commission
            </h2>
            <p style={{ color: 'rgba(245,240,235,0.7)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              We are looking for an experienced partner to lead a genuinely participatory strategy development process across nine regions in England. The indicative budget is £100,000 plus VAT, with proposals due by 24 August 2026.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.25rem', alignItems: 'center' }}>
              <Link
                to="/opportunities#strategy-development-tender"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: '#E8570A', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
                }}
              >
                View the tender and download the full specification <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeieIRa2cm7qAUpYN0WNi8S3JkAzJ8SQLi09MfUFY4dIDRZSg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(245,240,235,0.8)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'underline' }}
              >
                Register for the supplier webinar
              </a>
              <a
                href="https://forms.gle/68ivmzVgQhuDBViy6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(245,240,235,0.8)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'underline' }}
              >
                Submit an Expression of Interest
              </a>
            </div>
          </article>


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
              Applications are open for grassroots groups from Global Majority and racially minoritised communities across England. Find eligibility, deadlines and how to apply on our Grants page.
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
