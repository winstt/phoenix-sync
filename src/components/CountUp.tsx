import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  duration?: number
  className?: string
  style?: React.CSSProperties
  noCount?: boolean
}

// Parses a value like "£4M", "3000+", "200+", "2026" and animates the numeric portion from 0.
export default function CountUp({ value, duration = 1600, className, style, noCount = false }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState<string>(() => (noCount ? value : formatStart(value)))
  const startedRef = useRef(false)

  useEffect(() => {
    if (noCount) {
      setDisplay(value)
      return
    }
    const prefersReduced =
      typeof window !== 'undefined' &&
      (document.documentElement.classList.contains('a11y-reduce-motion') ||
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
    if (prefersReduced) {
      setDisplay(value)
      startedRef.current = true
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          animate()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, noCount])

  function animate() {
    const parsed = parseValue(value)
    if (parsed == null) {
      setDisplay(value)
      return
    }
    const { target, prefix, suffix } = parsed
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      const current = Math.round(target * eased)
      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`)
      if (t < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  )
}

function parseValue(value: string): { target: number; prefix: string; suffix: string } | null {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/)
  if (!match) return null
  const prefix = match[1] ?? ''
  const numericRaw = match[2].replace(/,/g, '')
  const target = parseFloat(numericRaw)
  if (!isFinite(target)) return null
  const suffix = match[3] ?? ''
  return { target: Math.round(target), prefix, suffix }
}

function formatStart(value: string): string {
  const parsed = parseValue(value)
  if (!parsed) return value
  return `${parsed.prefix}0${parsed.suffix}`
}
