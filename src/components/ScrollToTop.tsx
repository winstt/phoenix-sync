import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Retry briefly so the target has a chance to mount after route change
      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < 20) {
          attempts++
          setTimeout(tryScroll, 50)
        }
      }
      tryScroll()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
