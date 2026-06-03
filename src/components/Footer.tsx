import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

const routeMap: Record<string, string> = {
  'About us': '/about',
  'Grants': '/grants',
  'Our impact': '/impact',
  'News': '/news',
  'Contact': '/contact',
  'Work with us': '/opportunities',
  'Our vision & mission': '/#vision-block',
  'Our leaders': '/about#trustees-h2',
  'Our network': '/impact#partners-section',
  'Join the community': '/newsletter',
  'Archive': '/archive',
  'Privacy policy': '/privacy-policy',
  'Cookie policy': '/cookie-policy',
  'Accessibility statement': '/accessibility',
  'Terms & conditions': '/terms',
  'Complaints policy': '/complaints',
}

const { footer } = siteContent

// Bluesky icon (not in lucide-react)
function BlueSkyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C3.566 1.6 1.5 1.028 1.5 4.43c0 .661.375 5.551.6 6.34.8 2.685 3.72 3.558 6.32 3.193-.074.016-.149.034-.222.055-2.562.717-5.126 2.23-2.444 5.45 3.046 3.628 7.53-1.22 8.246-3.438.716 2.217 5.2 7.066 8.246 3.438 2.682-3.22.118-4.733-2.444-5.45-.073-.021-.148-.039-.222-.055 2.6.365 5.52-.508 6.32-3.193.225-.789.6-5.679.6-6.34 0-3.402-2.066-2.83-3.702-1.625C16.046 4.747 13.087 8.686 12 10.8Z" />
    </svg>
  )
}

const socialIconMap: Record<string, React.ReactNode> = {
  instagram: <Instagram size={18} />,
  facebook: <Facebook size={18} />,
  youtube: <Youtube size={18} />,
  linkedin: <Linkedin size={18} />,
  bluesky: <BlueSkyIcon size={18} />,
}

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '4rem 1rem 0',
      }}
    >
      {/* Top grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 md:gap-12"
        style={{
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Brand */}
        <div>
          {/* Logo */}
          <div style={{ width: '155px', maxWidth: '100%', marginBottom: '0.75rem', marginLeft: '0.75rem' }}>
            <img
              src={`${import.meta.env.BASE_URL}images/logo-header.png`}
              alt="The Phoenix Community Trust"
              style={{ height: 'auto', width: '100%', objectFit: 'contain', display: 'block' }}
              onError={e => { (e.target as HTMLImageElement).src = 'https://newphx.karrota.wtf/wp-content/uploads/2026/05/ThePhoenix-LogoPNG-1.png' }}
            />
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '240px', margin: '1rem 0' }}>
            {footer.tagline}
          </p>
        </div>

        {/* Organisation column */}
        <div>
          <h4
            className="font-bold uppercase mb-5"
            style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#f5f0eb' }}
          >
            {footer.columns.organisation.heading}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.15rem', lineHeight: 1.4, margin: 0, padding: 0 }}>
            {footer.columns.organisation.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={routeMap[link.label] ?? link.href}
                  className="no-underline transition-colors"
                  style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E8570A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,235,0.6)')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Work column */}
        <div>
          <h4
            className="font-bold uppercase mb-5"
            style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#f5f0eb' }}
          >
            {footer.columns.work.heading}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.15rem', lineHeight: 1.4, margin: 0, padding: 0 }}>
            {footer.columns.work.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={routeMap[link.label] ?? link.href}
                  className="no-underline transition-colors"
                  style={{ fontSize: '12px', color: 'rgba(245,240,235,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E8570A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,235,0.6)')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch column */}
        <div>
          <h4
            className="font-bold uppercase mb-5"
            style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#f5f0eb' }}
          >
            {footer.getInTouch.heading}
          </h4>
          <address style={{ fontStyle: 'normal' }}>
            <a
              href={`mailto:${footer.getInTouch.email}`}
              className="no-underline transition-colors"
              style={{ fontSize: '12px', color: '#E8570A' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              {footer.getInTouch.email}
            </a>
          </address>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {footer.getInTouch.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-all flex items-center justify-center"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  color: 'rgba(245,240,235,0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E8570A'
                  e.currentTarget.style.color = '#E8570A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(245,240,235,0.6)'
                }}
              >
                {socialIconMap[s.icon] ?? <span style={{ fontSize: '11px' }}>{s.label[0]}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          padding: '1.25rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* Legal links */}
        <nav aria-label="Legal and policy links" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {footer.legal.map((link) => (
            <Link
              key={link.label}
              to={routeMap[link.label] ?? link.href}
              className="no-underline transition-colors"
              style={{ fontSize: '2px', color: 'rgba(245,240,235,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f0eb')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,235,0.6)')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Address + company number */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.75rem', textAlign: 'right', flexWrap: 'nowrap', justifyContent: 'flex-end', whiteSpace: 'nowrap' }}>
          <span className="footer-registration-line a11y-no-scale" style={{ fontSize: '8px', lineHeight: 1.25, color: 'rgba(245,240,235,0.5)' }}>
            Registered address: {footer.address}
          </span>
          <span className="footer-registration-line a11y-no-scale" style={{ fontSize: '8px', lineHeight: 1.25, color: 'rgba(245,240,235,0.45)' }}>
            Company number: {footer.companyNumber}
          </span>
        </div>

      </div>
    </footer>
  )
}
