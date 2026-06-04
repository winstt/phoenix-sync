import { useEffect, useState } from 'react'

/**
 * Detects keyboard navigation (Tab key) and toggles `body.kbd-nav` so the
 * stylesheet can apply enhanced focus highlights. Also shows a small,
 * dismissable hint the first time the user tabs.
 */
export default function KeyboardNavMode() {
  const [hint, setHint] = useState(false)
  const [hintSeen, setHintSeen] = useState(false)

  useEffect(() => {
    let seen = false
    try { seen = localStorage.getItem('kbd-nav-hint-seen') === '1' } catch { /* ignore */ }
    setHintSeen(seen)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('kbd-nav')
        if (!seen) {
          setHint(true)
          seen = true
          setHintSeen(true)
          try { localStorage.setItem('kbd-nav-hint-seen', '1') } catch { /* ignore */ }
          window.setTimeout(() => setHint(false), 6000)
        }
      }
    }
    const onMouse = () => document.body.classList.remove('kbd-nav')

    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onMouse)
    window.addEventListener('touchstart', onMouse, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onMouse)
      window.removeEventListener('touchstart', onMouse)
    }
  }, [])

  if (!hint || hintSeen === false && !hint) return null
  if (!hint) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="a11y-no-scale fixed top-4 left-1/2 -translate-x-1/2 z-[10001] rounded-full bg-neutral-900/95 border border-neutral-700 text-white text-[12px] px-4 py-2 shadow-2xl backdrop-blur"
    >
      Keyboard navigation active — press <kbd className="px-1.5 py-0.5 mx-1 rounded bg-neutral-800 border border-neutral-600 text-[11px]">Tab</kbd> to move,
      <kbd className="px-1.5 py-0.5 mx-1 rounded bg-neutral-800 border border-neutral-600 text-[11px]">Enter</kbd> to activate,
      <kbd className="px-1.5 py-0.5 mx-1 rounded bg-neutral-800 border border-neutral-600 text-[11px]">Esc</kbd> to close.
    </div>
  )
}
