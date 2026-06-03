// Shared hero component for all inner pages - matches homepage hero style

interface PageHeroProps {
  eyebrow: string
  heading: string
  description: string
  imageUrl?: string | null
  imagePosition?: string
  size?: 'default' | 'compact'
}

export default function PageHero({ eyebrow, heading, description, imageUrl, imagePosition = 'center', size = 'default' }: PageHeroProps) {
  const headingFontSize =
    size === 'compact'
      ? 'clamp(1.75rem, 3.5vw, 2.75rem)'
      : 'clamp(2.5rem, 5.5vw, 4.5rem)'
  return (
    <section
      className={imageUrl ? 'hero-grid relative' : 'relative'}
      style={{ background: '#0d0d0d', minHeight: imageUrl ? '42vh' : undefined }}
    >
      {/* Left - text */}
      <div
        className="flex flex-col justify-center relative z-10"
        style={{
          padding: '2.5rem',
          paddingTop: imageUrl ? 'calc(90px + 1.5rem)' : 'calc(90px + 1rem)',
          paddingBottom: imageUrl ? '1.5rem' : '1rem',
        }}
      >
        {eyebrow ? (
          <p
            className="font-semibold uppercase mb-3"
            style={{ fontSize: '11px', letterSpacing: '0.16em', color: '#E8570A' }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="font-extrabold uppercase leading-none mb-4 text-cream a11y-no-scale"
          style={{ fontSize: headingFontSize, lineHeight: '0.95', letterSpacing: '-0.02em' }}
        >
          {heading}
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '520px' }}>
          {description}
        </p>
      </div>

      {/* Right - image (only when provided) */}
      {imageUrl && (
        <div className="relative overflow-hidden page-hero-image" aria-hidden="true">
          <img src={imageUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: imagePosition }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0d0d0d 0%, transparent 25%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d0d 0%, transparent 30%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0d0d0d 0%, transparent 30%)' }} />
        </div>
      )}
    </section>
  )
}
