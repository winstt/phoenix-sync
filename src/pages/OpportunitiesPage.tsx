import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        heading="Opportunities to join the mission."
        description="We are building a national movement for funding justice. If you share our commitment to amplifying community power and lasting change - we want to work with you."
        imageUrl={`${import.meta.env.BASE_URL}images/opportunities.jpeg`}
      />

      {/* Jobs */}
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Jobs</p>
        <h2 className="font-bold uppercase mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Current vacancies</h2>
        <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.75rem' }}>No vacancies at this time</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto' }}>
            We do not have any open positions right now. Sign up below to be notified when new opportunities are posted.
          </p>
        </div>
      </section>

      {/* Tenders */}
      <section style={{ padding: '0 2.5rem 4rem', background: '#0d0d0d' }}>
        <p className="font-semibold uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}>Tenders</p>
        <h2 className="font-bold uppercase mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f5f0eb' }}>Current tenders</h2>
        <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.75rem' }}>No tenders at this time</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto' }}>
            We do not have any open tenders right now. Check back soon or get in touch if you would like to discuss working with us.
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
