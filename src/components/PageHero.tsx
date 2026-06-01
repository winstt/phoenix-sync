// Shared hero component for all inner pages — matches homepage hero style

interface PageHeroProps {
  eyebrow: string
  heading: string
  description: string
  imageUrl?: string | null
}

export default function PageHero({ eyebrow, heading, description, imageUrl }: PageHeroProps) {
  return (
    <section
      className="hero-grid relative"
      style={{ background: '#0d0d0d', minHeight: '52vh' }}
    >
      {/* Left — text */}
      <div
        className="flex flex-col justify-end relative z-10"
        style={{ padding: '2.5rem', paddingTop: 'calc(90px + 3rem)', paddingBottom: '4rem' }}
      >
        <p
          className="font-semibold uppercase mb-5"
          style={{ fontSize: '11px', letterSpacing: '0.16em', color: '#E8570A' }}
        >
          {eyebrow}
        </p>
        <h1
          className="font-extrabold uppercase leading-none mb-6 text-cream"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
        >
          {heading}
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7', maxWidth: '520px' }}>
          {description}
        </p>
      </div>

      {/* Right — image */}
      <div className="relative overflow-hidden" style={{ minHeight: '40vw' }} aria-hidden="true">
        {imageUrl ? (
          <img src={imageUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a1a 0%, #2a1010 50%, #0d0d0d 100%)' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ opacity: 0.07 }}>
              <circle cx="200" cy="200" r="180" stroke="#E8570A" strokeWidth="60" fill="none" />
              <circle cx="200" cy="200" r="80" stroke="#C2185B" strokeWidth="30" fill="none" />
            </svg>
          </div>
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0d0d0d 0%, transparent 25%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d0d 0%, transparent 30%)' }} />
      </div>
    </section>
  )
}
