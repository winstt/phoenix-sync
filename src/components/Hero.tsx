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
        <img
          src={hero.imageUrl}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full object-cover"
          style={{ width: '61.5vw', objectPosition: 'center center' }}
        />
      ) : null}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, #0d0d0d 0%, #0d0d0d 44%, rgba(13,13,13,0.9) 52%, rgba(13,13,13,0.34) 66%, rgba(13,13,13,0.02) 84%), linear-gradient(0deg, #0d0d0d 0%, rgba(13,13,13,0.36) 20%, rgba(13,13,13,0) 46%), linear-gradient(180deg, rgba(13,13,13,0.56) 0%, rgba(13,13,13,0) 30%)',
        }}
      />

      {/* Text overlay */}
      <div
        className="home-hero-content relative z-10 flex min-h-screen flex-col justify-center"
        style={{
          padding: 'clamp(9rem, 18vh, 15rem) clamp(1.875rem, 3.2vw, 3.75rem) clamp(4rem, 8vh, 6rem)',
          maxWidth: '56rem',
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
          className="font-extrabold uppercase mb-7 text-cream a11y-no-scale"
          style={{
            fontSize: 'clamp(1.05rem, 1.14vw, 1.28rem)',
            lineHeight: '1.25',
            letterSpacing: '0',
          }}
        >
          <span className="a11y-no-scale" style={{ color: '#E8570A', display: 'block', letterSpacing: '0' }}>{hero.headlineOrange}</span>
          <br />
          <span className="home-hero-heading-white a11y-no-scale">{hero.headlineWhite}</span>
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
