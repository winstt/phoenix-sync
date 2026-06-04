import { useState, useEffect, useRef, useCallback } from 'react'
import { Mic, MicOff, X, HelpCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Minimal typings for the Web Speech API (not in lib.dom by default)
type SRInstance = {
  continuous: boolean
  interimResults: boolean
  lang: string
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((e: any) => void) | null
  onerror: ((e: any) => void) | null
  onend: (() => void) | null
  onstart: (() => void) | null
}

const ROUTES: Record<string, string> = {
  home: '/',
  homepage: '/',
  'home page': '/',
  about: '/about',
  'about us': '/about',
  grants: '/grants',
  grant: '/grants',
  funding: '/grants',
  impact: '/impact',
  'our impact': '/impact',
  news: '/news',
  contact: '/contact',
  'contact us': '/contact',
  opportunities: '/opportunities',
  jobs: '/opportunities',
  work: '/opportunities',
  archive: '/archive',
  accessibility: '/accessibility',
  privacy: '/privacy-policy',
  'privacy policy': '/privacy-policy',
  cookies: '/cookie-policy',
  'cookie policy': '/cookie-policy',
  terms: '/terms',
  complaints: '/complaints',
  newsletter: '/newsletter',
  subscribe: '/newsletter',
}

const SAMPLE_COMMANDS = [
  '"Go to about"',
  '"Open grants"',
  '"News"',
  '"Open menu" / "Close menu"',
  '"Scroll down" / "Scroll up"',
  '"Top" / "Bottom"',
  '"Go back" / "Go forward"',
  '"Stop listening"',
]

export default function VoiceNavigation() {
  const navigate = useNavigate()
  const [supported, setSupported] = useState(false)
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [feedback, setFeedback] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const recRef = useRef<SRInstance | null>(null)
  const shouldRunRef = useRef(false)

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    setSupported(!!SR)
  }, [])

  const flash = (msg: string) => {
    setFeedback(msg)
    window.setTimeout(() => setFeedback((f) => (f === msg ? '' : f)), 2500)
  }

  const handleCommand = useCallback((raw: string) => {
    const text = raw.toLowerCase().trim().replace(/[.?!,]/g, '')
    if (!text) return

    // Stop
    if (/(stop|exit|quit|close).*(listen|voice|mic)|stop listening/.test(text)) {
      shouldRunRef.current = false
      recRef.current?.stop()
      flash('Stopped listening')
      return
    }

    // Menu
    if (/(open|show).*menu|menu.*open/.test(text)) {
      const btn = document.querySelector<HTMLButtonElement>('button[aria-label="Open navigation menu"]')
      btn?.click()
      flash('Opened menu')
      return
    }
    if (/(close|hide).*menu/.test(text)) {
      const btn = document.querySelector<HTMLButtonElement>('button[aria-label="Close navigation menu"]')
      btn?.click()
      flash('Closed menu')
      return
    }

    // Scrolling
    if (/^(scroll )?(down)$/.test(text) || /scroll down/.test(text)) {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })
      flash('Scrolling down')
      return
    }
    if (/^(scroll )?(up)$/.test(text) || /scroll up/.test(text)) {
      window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' })
      flash('Scrolling up')
      return
    }
    if (/^(top|go to top|scroll to top)$/.test(text)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      flash('Top of page')
      return
    }
    if (/^(bottom|go to bottom|scroll to bottom)$/.test(text)) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      flash('Bottom of page')
      return
    }

    // History
    if (/^(go )?back$/.test(text)) {
      window.history.back()
      flash('Going back')
      return
    }
    if (/^(go )?forward$/.test(text)) {
      window.history.forward()
      flash('Going forward')
      return
    }

    // Navigation
    // Strip leading "go to", "open", "navigate to", "show", "take me to"
    const cleaned = text
      .replace(/^(please\s+)?(go to|goto|open|navigate to|take me to|show me|show|visit|click on|click)\s+/, '')
      .replace(/^(the\s+)?/, '')
      .replace(/\s+page$/, '')
      .trim()

    if (ROUTES[cleaned]) {
      navigate(ROUTES[cleaned])
      flash(`Going to ${cleaned}`)
      return
    }
    // Try the original text too
    if (ROUTES[text]) {
      navigate(ROUTES[text])
      flash(`Going to ${text}`)
      return
    }

    flash(`Didn't recognise "${raw}"`)
  }, [navigate])

  const start = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) return
    const rec: SRInstance = new SR()
    rec.continuous = true
    rec.interimResults = true
    rec.lang = 'en-GB'

    rec.onstart = () => setListening(true)
    rec.onresult = (e: any) => {
      let interim = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i]
        const t = res[0].transcript
        if (res.isFinal) {
          setTranscript(t)
          handleCommand(t)
        } else {
          interim += t
        }
      }
      if (interim) setTranscript(interim)
    }
    rec.onerror = (e: any) => {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        shouldRunRef.current = false
        flash('Microphone access denied')
      }
    }
    rec.onend = () => {
      setListening(false)
      // Auto-restart if user hasn't stopped
      if (shouldRunRef.current) {
        try { rec.start() } catch { /* ignore */ }
      }
    }

    recRef.current = rec
    shouldRunRef.current = true
    try { rec.start() } catch { /* already running */ }
  }, [handleCommand])

  const stop = useCallback(() => {
    shouldRunRef.current = false
    recRef.current?.stop()
    setListening(false)
    setTranscript('')
  }, [])

  useEffect(() => {
    return () => { shouldRunRef.current = false; recRef.current?.abort() }
  }, [])

  if (!supported) return null

  return (
    <>
      {/* Status / transcript panel */}
      {(listening || feedback) && (
        <div
          className="a11y-no-scale fixed bottom-40 right-6 z-[9999] max-w-[300px] rounded-xl border border-neutral-700 bg-neutral-900 text-white shadow-2xl px-4 py-3 text-[13px]"
          role="status"
          aria-live="polite"
        >
          {listening && (
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(330_70%_50%)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[hsl(330_70%_50%)]" />
              </span>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400">Listening…</span>
            </div>
          )}
          {transcript && <div className="text-neutral-200 italic">"{transcript}"</div>}
          {feedback && <div className="text-[12px] text-[hsl(20_92%_55%)] mt-1">{feedback}</div>}
        </div>
      )}

      {/* Help panel */}
      {showHelp && (
        <div
          className="a11y-no-scale fixed bottom-40 right-6 z-[9999] w-[300px] max-w-[calc(100vw-2rem)] rounded-xl border border-neutral-700 bg-neutral-900 text-white shadow-2xl text-[13px]"
          role="dialog"
          aria-label="Voice command help"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-700">
            <h2 className="text-sm font-semibold">Voice commands</h2>
            <button onClick={() => setShowHelp(false)} aria-label="Close voice help" className="text-neutral-400 hover:text-white">
              <X size={16} />
            </button>
          </div>
          <div className="px-4 py-3">
            <p className="text-[11px] text-neutral-400 mb-2">Try saying:</p>
            <ul className="space-y-1.5">
              {SAMPLE_COMMANDS.map((c) => (
                <li key={c} className="text-neutral-200 text-[12px]">{c}</li>
              ))}
            </ul>
            <p className="text-[11px] text-neutral-500 mt-3 leading-relaxed">
              Voice recognition uses your browser. Works best in Chrome, Edge, and Safari. You'll be asked for microphone permission.
            </p>
          </div>
        </div>
      )}

      {/* Help button (above mic) */}
      <button
        onClick={() => setShowHelp((s) => !s)}
        aria-label="Voice command help"
        aria-expanded={showHelp}
        className="a11y-no-scale fixed bottom-[136px] right-6 z-[9999] h-9 w-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white shadow-xl flex items-center justify-center transition-colors border border-neutral-600"
      >
        <HelpCircle size={16} />
      </button>

      {/* Mic toggle button */}
      <button
        onClick={() => (listening ? stop() : start())}
        aria-label={listening ? 'Stop voice navigation' : 'Start voice navigation'}
        aria-pressed={listening}
        className={`a11y-no-scale fixed bottom-[84px] right-6 z-[9999] h-12 w-12 rounded-full text-white shadow-2xl flex items-center justify-center transition-colors ${
          listening ? 'bg-[hsl(330_77%_42%)] hover:bg-[hsl(330_77%_38%)]' : 'bg-neutral-800 hover:bg-neutral-700 border border-neutral-600'
        }`}
      >
        {listening ? <Mic size={20} /> : <MicOff size={20} />}
      </button>
    </>
  )
}
