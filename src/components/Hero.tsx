import { ArrowRight } from 'lucide-react'
import { siteContent } from '../data/content'

const { hero } = siteContent

export default function Hero() {
  return (
    <section
      className="hero-grid relative"
      aria-labelledby="hero-heading"
      style={{ background: '#0d0d0d' }}
    >
      {/* Left — text */}
      <div
        className="flex flex-col justify-center relative z-10"
        style={{
          padding: '2.5rem',
          paddingTop: 'calc(90px + 2rem)',
          paddingBottom: '3rem',
        }}
      >

        {/* Eyebrow */}
        <p
          className="font-semibold uppercase tracking-widest mb-6"
          style={{ fontSize: '11px', letterSpacing: '0.16em', color: '#E8570A' }}
        >
          {hero.eyebrow}
        </p>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-extrabold uppercase leading-none mb-6 text-cream a11y-no-scale"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            lineHeight: '0.95',
            letterSpacing: '-0.02em',
          }}
        >
          <span className="a11y-no-scale" style={{ color: '#E8570A', fontSize: '0.8em', display: 'inline-block', letterSpacing: '0.02em', marginBottom: '0.4em' }}>{hero.headlineOrange}</span>
          <br />
          {hero.headlineWhite}
        </h1>

        {/* Description */}
        <p
          className="mb-10"
          style={{
            fontSize: '1.05rem',
            color: 'rgba(245,240,235,0.7)',
            lineHeight: '1.7',
            maxWidth: '520px',

          }}
        >
          {hero.description}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-2 font-semibold rounded no-underline transition-colors"
            style={{
              background: '#C2185B',
              color: 'white',
              padding: '14px 28px',
              fontSize: '15px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#E91E8C')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#C2185B')}
          >
            {hero.primaryCta.label}
            <ArrowRight size={16} />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 font-semibold rounded no-underline transition-all"
            style={{
              background: 'transparent',
              color: '#f5f0eb',
              padding: '14px 28px',
              fontSize: '15px',
              border: '1.5px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#E8570A'
              e.currentTarget.style.color = '#E8570A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#f5f0eb'
            }}
          >
            {hero.secondaryCta.label}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Right — image / gradient */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: '46vw' }}
        aria-hidden="true"
      >
        {hero.imageUrl ? (
          <img
            src={hero.imageUrl}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        ) : (
          // Placeholder gradient — replace with real image
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, #1a1a1a 0%, #2a1010 40%, #0d0d0d 100%)',
            }}
          >
            {/* Phoenix graphic placeholder */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              style={{ opacity: 0.08 }}
              aria-hidden="true"
            >
              <circle cx="200" cy="200" r="180" stroke="#E8570A" strokeWidth="60" fill="none" />
              <circle cx="200" cy="200" r="80" stroke="#C2185B" strokeWidth="30" fill="none" />
            </svg>
          </div>
        )}
        {/* Fade overlay — left edge */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #0d0d0d 0%, transparent 25%)',
          }}
        />
        {/* Fade overlay — bottom (mobile) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #0d0d0d 0%, transparent 30%)',
          }}
        />
        {/* Fade overlay — top (mobile) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, #0d0d0d 0%, transparent 20%)',
          }}
        />
      </div>
    </section>
  )
}
