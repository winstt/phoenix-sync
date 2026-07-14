import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Download, ExternalLink, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'

const PDF_URL = `${import.meta.env.BASE_URL}documents/TPCT-Strategy-Development-Invitation-to-Tender.pdf`
const WEBINAR_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeieIRa2cm7qAUpYN0WNi8S3JkAzJ8SQLi09MfUFY4dIDRZSg/viewform?usp=publish-editor'
const EOI_URL = 'https://forms.gle/68ivmzVgQhuDBViy6'

type Info = { label: string; value: ReactNode }

const infoItems: Info[] = [
  { label: 'Indicative budget', value: '£100,000 plus VAT where applicable' },
  { label: 'Supplier webinar', value: <>23 July 2026<br/>11:45am–12:30pm<br/>Online</> },
  { label: 'Expression of Interest deadline', value: '31 July 2026 at 5pm' },
  { label: 'Full proposal deadline', value: '24 August 2026 at 9am' },
  { label: 'Expected commission period', value: 'September 2026 – March 2027' },
  { label: 'Scope', value: 'Nine regions across England' },
]

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        heading="Opportunities to join the mission."
        description="We are building a national movement for funding justice. If you share our commitment to amplifying community power and lasting change - we want to work with you."
        imageUrl={`${import.meta.env.BASE_URL}images/opportunities.jpeg`}
      />

      {/* Strategy Development Partner Commission tender */}
      <section
        id="strategy-development-tender"
        aria-labelledby="strategy-tender-heading"
        style={{ padding: '4rem 2.5rem', background: '#0d0d0d', scrollMarginTop: '100px' }}
      >
        <div
          style={{
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderLeft: '3px solid #E8570A',
            borderRadius: '12px',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: '#E8570A', fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8570A' }} aria-hidden="true" />
              Open tender
            </span>
          </div>

          <h2
            id="strategy-tender-heading"
            className="font-bold uppercase"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)', color: '#f5f0eb', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.01em' }}
          >
            Strategy Development Partner Commission
          </h2>

          <div style={{ maxWidth: '760px', color: 'rgba(245,240,235,0.85)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              The Phoenix Community Trust is seeking an external partner to lead a comprehensive and genuinely participatory strategy development process, working with communities and partners across nine regions in England.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              The appointed partner will lead discovery research, stakeholder engagement, nine regional convenings and a programme of digital engagement before producing a final strategy framework that TPCT's incoming Chief Executive and team can operationalise.
            </p>
            <p style={{ margin: 0 }}>
              We are particularly interested in providers with a strong track record in participatory strategy development, anti-racist practice and community engagement at scale. Partnership and consortium bids are encouraged, particularly where they enable smaller or Global Majority-led organisations to participate.
            </p>
          </div>

          {/* Info grid */}
          <dl
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {infoItems.map(item => (
              <div
                key={item.label}
                style={{
                  background: '#0d0d0d',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '1rem 1.15rem',
                }}
              >
                <dt style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E8570A', marginBottom: '0.5rem' }}>
                  {item.label}
                </dt>
                <dd style={{ margin: 0, fontSize: '0.95rem', color: '#f5f0eb', lineHeight: 1.5 }}>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <p style={{ color: 'rgba(245,240,235,0.7)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '760px' }}>
            The Expression of Interest is informal and will not be scored. Organisations that currently receive funding from TPCT are not eligible to bid because of a conflict of interest. Please review the full specification before submitting a proposal.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <a
              href={PDF_URL}
              download
              className="inline-flex items-center gap-2 no-underline"
              style={{
                background: '#E8570A', color: '#fff',
                padding: '14px 24px', borderRadius: '6px',
                fontSize: '14px', fontWeight: 700, letterSpacing: '0.02em',
              }}
            >
              <Download size={16} aria-hidden="true" />
              Download the full specification (PDF)
            </a>
            <a
              href={WEBINAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline"
              style={{
                background: 'transparent', color: '#f5f0eb',
                padding: '13px 22px', borderRadius: '6px',
                fontSize: '14px', fontWeight: 600,
                border: '1.5px solid rgba(245,240,235,0.25)',
              }}
            >
              Register for the supplier webinar
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a
              href={EOI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline"
              style={{
                background: 'transparent', color: '#f5f0eb',
                padding: '13px 22px', borderRadius: '6px',
                fontSize: '14px', fontWeight: 600,
                border: '1.5px solid rgba(245,240,235,0.25)',
              }}
            >
              Submit an Expression of Interest
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            <a
              href="mailto:info@phoenix-trust.co.uk"
              className="inline-flex items-center gap-2"
              style={{ color: '#E8570A', fontWeight: 600, textDecoration: 'underline' }}
            >
              <Mail size={14} aria-hidden="true" />
              Questions about the tender?
            </a>
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section style={{ padding: '0 2.5rem 4rem', background: '#0d0d0d' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Jobs</p>
        <h2 className="font-bold uppercase mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Current vacancies</h2>
        <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.75rem' }}>No vacancies at this time</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto' }}>
            We do not have any open positions right now. Sign up below to be notified when new opportunities are posted.
          </p>
        </div>
      </section>

      {/* Stay in the loop */}
      <section style={{ padding: '4rem 2.5rem', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#f5f0eb', marginBottom: '1rem' }}>Stay in the loop</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '560px', marginBottom: '2rem' }}>
          Register your interest to be notified when new jobs or tenders are posted by The Phoenix Community Trust.
        </p>
        <Link to="/newsletter"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C2185B', color: 'white', textDecoration: 'none', padding: '14px 28px', borderRadius: '6px', fontSize: '15px', fontWeight: 600 }}
        >
          Register interest →
        </Link>
      </section>
    </>
  )
}
