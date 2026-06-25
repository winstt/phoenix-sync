import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'pct-news-banner-dismissed-v1'
const BANNER_HEIGHT = 36

export default function NewsBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) !== '1') setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--banner-height',
      visible ? `${BANNER_HEIGHT}px` : '0px'
    )
  }, [visible])

  const dismiss = () => {
    try { sessionStorage.setItem(STORAGE_KEY, '1') } catch { /* noop */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Site announcement"
      className="fixed top-0 left-0 right-0 z-[101] flex items-center justify-center"
      style={{
        height: `${BANNER_HEIGHT}px`,
        background: '#E8570A',
        color: '#0d0d0d',
        fontSize: '13px',
        fontWeight: 600,
        padding: '0 2.5rem',
      }}
    >
      <Link
        to="/grants"
        className="inline-flex items-center gap-2 no-underline"
        style={{ color: '#0d0d0d' }}
      >
        <span className="hidden sm:inline">New grants open:</span>
        <span>The Step Forward Fund — apply now</span>
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-transparent border-none cursor-pointer"
        style={{ color: '#0d0d0d' }}
      >
        <X size={16} />
      </button>
    </div>
  )
}
