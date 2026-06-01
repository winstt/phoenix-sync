import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../data/content'

const { nav } = siteContent

const routeMap: Record<string, string> = {
  'About us': '/about',
  'Grants': '/grants',
  'Our impact': '/our-impact',
  'News': '/news',
  'Contact': '/contact',
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-orange focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(13,13,13,0.88)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        <nav
          aria-label="Main navigation"
          className="flex items-center"
          style={{ padding: '1.25rem 2.5rem 1.25rem 0', height: '90px' }}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="The Phoenix Community Trust - home"
            className="flex items-center flex-shrink-0 no-underline"
            style={{ height: '60px', marginLeft: '2rem' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo-header.png`}
              alt="The Phoenix Community Trust"
              style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
              onError={e => { (e.target as HTMLImageElement).src = 'https://newphx.karrota.wtf/wp-content/uploads/2026/05/ThePhoenix-LogoPNG-1.png' }}
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            className="ml-auto flex flex-col justify-center gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          >
            <span className="block w-7 h-[2px] bg-cream rounded" />
            <span className="block w-7 h-[2px] bg-cream rounded" />
            <span className="block w-7 h-[2px] bg-cream rounded" />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
        className="fixed inset-0 z-[9999] transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.5)',
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? 'all' : 'none',
        }}
      />

      {/* Side drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="nav-drawer fixed top-0 z-[10000] h-screen flex flex-col justify-between"
        style={{
          right: drawerOpen ? '0' : '-380px',
          width: '340px',
          maxWidth: '90vw',
          background: 'rgba(13,13,13,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '5rem 2.5rem 2.5rem',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setDrawerOpen(false)}
          aria-label="Close navigation menu"
          className="absolute top-6 right-6 bg-transparent border-none text-cream text-3xl leading-none cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        >
          <X size={24} />
        </button>

        {/* Links */}
        <nav aria-label="Drawer navigation" className="flex flex-col">
          {nav.links.map((link) => {
            const to = routeMap[link.label] ?? link.href
            const isActive = location.pathname === to
            return (
              <Link
                key={link.label}
                to={to}
                onClick={() => setDrawerOpen(false)}
                className="no-underline font-semibold uppercase transition-all"
                style={{
                  fontSize: '1.1rem',
                  letterSpacing: '0.06em',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: isActive ? '#E8570A' : '#f5f0eb',
                  opacity: isActive ? 1 : 0.85,
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Drawer CTA */}
        <Link
          to="/opportunities"
          onClick={() => setDrawerOpen(false)}
          className="flex items-center justify-center gap-2 font-bold uppercase tracking-wider rounded text-white no-underline transition-colors"
          style={{
            background: '#C2185B',
            fontSize: '0.95rem',
            letterSpacing: '0.06em',
            padding: '1rem 1.5rem',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#E91E8C')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#C2185B')}
        >
          {nav.cta.label}
          <ArrowRight size={16} />
        </Link>
      </aside>
    </>
  )
}
