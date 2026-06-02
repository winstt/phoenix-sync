import { useEffect, useRef } from 'react'
import { siteContent } from '../data/content'

const { vision } = siteContent

export default function VisionBlock() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-labelledby="vision-label"
      className="reveal-fade"
      style={{
        padding: '2rem 2.5rem',
        background: '#1a1a1a',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p
          id="vision-label"
          className="font-semibold uppercase mb-6"
          style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#E8570A' }}
        >
          {vision.label}
        </p>
        <blockquote
          className="font-semibold"
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            lineHeight: '1.5',
            color: '#f5f0eb',
            border: 'none',
            padding: 0,
          }}
        >
          {vision.quoteBeforeHighlight}
          <em style={{ color: '#E8570A', fontStyle: 'normal' }}>{vision.quoteHighlight}</em>
          {vision.quoteAfterHighlight}
        </blockquote>
      </div>
    </section>
  )
}
