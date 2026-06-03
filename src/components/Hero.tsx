import { ArrowRight } from 'lucide-react'
import { siteContent } from '../data/content'

const { hero } = siteContent

export default function Hero() {
  return (
    <section
      className="home-hero relative overflow-hidden"
      aria-labelledby="hero-heading"
      style={{ background: '#0d0d0d', minHeight: '100vh' }}
    >
      {hero.imageUrl ? (
        <div
          className="absolute right-0 top-0 h-full overflow-hidden home-hero-image"
          aria-hidden="true"
          style={{ width: '61.5vw' }}
        >
          <img
            src={hero.imageUrl}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
          />
          {/* Fade overlays matching inner page heroes */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0d0d0d 0%, transparent 25%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d0d 0%, transparent 30%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0d0d0d 0%, transparent 30%)' }} />
        </div>
      ) : null}


      {/* Text overlay */}
      <div
        className="home-hero-content relative z-10 flex flex-col justify-start"
        style={{
          padding: 'clamp(2rem, 4vh, 3.5rem) clamp(1.875rem, 3.2vw, 3.75rem) clamp(3rem, 6vh, 5rem)',
          maxWidth: '58rem',
        }}
      >


        {/* Eyebrow */}
        <p
          className="font-semibold uppercase tracking-widest mb-6"
          style={{ fontSize: '11px', letterSpacing: '0.16em', color: '#E8570A', marginTop: '5.5rem' }}
        >
          {hero.eyebrow}
        </p>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-extrabold uppercase mb-7 text-cream a11y-no-scale"
          style={{
            fontSize: 'clamp(2.25rem, 4.6vw, 4.25rem)',
            lineHeight: '1.0',
            letterSpacing: '-0.01em',
          }}
        >
          <span className="a11y-no-scale" style={{ color: '#E8570A', display: 'block', letterSpacing: '-0.01em' }}>{hero.headlineOrange}</span>
          <span className="a11y-no-scale" style={{ display: 'block', marginTop: '0.35em' }}>{hero.headlineWhite}</span>
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
              padding: '20px 38px',
              fontSize: '1.15rem',
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
              padding: '20px 38px',
              fontSize: '1.15rem',
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
    </section>
  )
}
