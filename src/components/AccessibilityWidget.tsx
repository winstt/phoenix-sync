import { useState, useEffect, useRef, useCallback } from 'react'
import { X, Minus, Plus, Mic, MicOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

type Settings = {
  textSize: number
  clearFont: boolean
  highContrast: boolean
  reduceMotion: boolean
  focusIndicators: boolean
  highlightLinks: boolean
}

const DEFAULTS: Settings = {
  textSize: 100,
  clearFont: false,
  highContrast: false,
  reduceMotion: false,
  focusIndicators: false,
  highlightLinks: false,
}

const STORAGE_KEY = 'a11y-settings'

const CLASS_SETTINGS: Array<[keyof Settings, string]> = [
  ['clearFont', 'a11y-clear-font'],
  ['highContrast', 'a11y-high-contrast'],
  ['reduceMotion', 'a11y-reduce-motion'],
  ['focusIndicators', 'a11y-focus'],
  ['highlightLinks', 'a11y-highlight-links'],
]

const readSettings = (): Settings => {
  if (typeof window === 'undefined') return DEFAULTS
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const saved = raw ? JSON.parse(raw) : {}
    return {
      textSize: typeof saved.textSize === 'number' ? Math.min(150, Math.max(80, saved.textSize)) : DEFAULTS.textSize,
      clearFont: saved.clearFont === true,
      highContrast: saved.highContrast === true,
      reduceMotion: saved.reduceMotion === true,
      focusIndicators: saved.focusIndicators === true,
      highlightLinks: saved.highlightLinks === true,
    }
  } catch {
    return DEFAULTS
  }
}

const applySettings = (settings: Settings) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.style.setProperty('--a11y-text-scale', String(settings.textSize / 100))
  CLASS_SETTINGS.forEach(([key, className]) => {
    const enabled = settings[key] === true
    root.classList.toggle(className, enabled)
    root.toggleAttribute(`data-${className}`, enabled)
  })
}

const persistSettings = (settings: Settings) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}

// ---------- Voice navigation ----------
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
  home: '/', homepage: '/', 'home page': '/',
  about: '/about', 'about us': '/about',
  grants: '/grants', grant: '/grants', funding: '/grants',
  impact: '/impact', 'our impact': '/impact',
  news: '/news',
  contact: '/contact', 'contact us': '/contact',
  opportunities: '/opportunities', jobs: '/opportunities', work: '/opportunities',
  archive: '/archive', accessibility: '/accessibility',
  privacy: '/privacy-policy', 'privacy policy': '/privacy-policy',
  cookies: '/cookie-policy', 'cookie policy': '/cookie-policy',
  terms: '/terms', complaints: '/complaints',
  newsletter: '/newsletter', subscribe: '/newsletter',
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

function ReferenceAccessibilityIcon() {
  return (
    <svg
      width="24"
      height="29"
      viewBox="0 0 34 41"
      aria-hidden="true"
      focusable="false"
      className="block overflow-visible"
    >
      <g fill="currentColor">
        <circle cx="17" cy="4.5" r="4.5" />
        <rect x="3" y="12" width="28" height="3" rx="1.5" />
        <rect x="15" y="12" width="4" height="15" rx="1" />
        <path d="M15 24h4l7 16h-4.5L17 29.5 12.5 40H8z" />
        <circle cx="7.5" cy="37" r="3.5" />
        <circle cx="26.5" cy="37" r="3.5" />
      </g>
    </svg>
  )
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors ${
        checked ? 'bg-[hsl(330_70%_50%)]' : 'bg-neutral-600'
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform mt-[3px] ${
          checked ? 'translate-x-[18px]' : 'translate-x-[3px]'
        }`}
      />
    </button>
  )
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(readSettings)

  // Voice nav state
  const navigate = useNavigate()
  const [voiceSupported, setVoiceSupported] = useState(false)
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [feedback, setFeedback] = useState('')
  const [showCommands, setShowCommands] = useState(false)
  const recRef = useRef<SRInstance | null>(null)
  const shouldRunRef = useRef(false)

  useEffect(() => {
    applySettings(settings)
    persistSettings(settings)
  }, [settings])

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    setVoiceSupported(!!SR)
  }, [])

  const update = <K extends keyof Settings>(k: K, v: Settings[K]) =>
    setSettings((s) => {
      const next = { ...s, [k]: v }
      applySettings(next)
      persistSettings(next)
      return next
    })

  const reset = () => {
    applySettings(DEFAULTS)
    persistSettings(DEFAULTS)
    setSettings(DEFAULTS)
  }

  const flash = (msg: string) => {
    setFeedback(msg)
    window.setTimeout(() => setFeedback((f) => (f === msg ? '' : f)), 2500)
  }

  const handleCommand = useCallback((raw: string) => {
    const text = raw.toLowerCase().trim().replace(/[.?!,]/g, '')
    if (!text) return
    if (/(stop|exit|quit|close).*(listen|voice|mic)|stop listening/.test(text)) {
      shouldRunRef.current = false
      recRef.current?.stop()
      flash('Stopped listening'); return
    }
    if (/(open|show).*menu|menu.*open/.test(text)) {
      document.querySelector<HTMLButtonElement>('button[aria-label="Open navigation menu"]')?.click()
      flash('Opened menu'); return
    }
    if (/(close|hide).*menu/.test(text)) {
      document.querySelector<HTMLButtonElement>('button[aria-label="Close navigation menu"]')?.click()
      flash('Closed menu'); return
    }
    if (/^(scroll )?(down)$/.test(text) || /scroll down/.test(text)) {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' }); flash('Scrolling down'); return
    }
    if (/^(scroll )?(up)$/.test(text) || /scroll up/.test(text)) {
      window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' }); flash('Scrolling up'); return
    }
    if (/^(top|go to top|scroll to top)$/.test(text)) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); flash('Top of page'); return
    }
    if (/^(bottom|go to bottom|scroll to bottom)$/.test(text)) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); flash('Bottom of page'); return
    }
    if (/^(go )?back$/.test(text)) { window.history.back(); flash('Going back'); return }
    if (/^(go )?forward$/.test(text)) { window.history.forward(); flash('Going forward'); return }
    const cleaned = text
      .replace(/^(please\s+)?(go to|goto|open|navigate to|take me to|show me|show|visit|click on|click)\s+/, '')
      .replace(/^(the\s+)?/, '')
      .replace(/\s+page$/, '')
      .trim()
    if (ROUTES[cleaned]) { navigate(ROUTES[cleaned]); flash(`Going to ${cleaned}`); return }
    if (ROUTES[text]) { navigate(ROUTES[text]); flash(`Going to ${text}`); return }
    flash(`Didn't recognise "${raw}"`)
  }, [navigate])

  const startVoice = useCallback(() => {
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
        if (res.isFinal) { setTranscript(t); handleCommand(t) } else { interim += t }
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
      if (shouldRunRef.current) { try { rec.start() } catch { /* ignore */ } }
    }
    recRef.current = rec
    shouldRunRef.current = true
    try { rec.start() } catch { /* already running */ }
  }, [handleCommand])

  const stopVoice = useCallback(() => {
    shouldRunRef.current = false
    recRef.current?.stop()
    setListening(false)
    setTranscript('')
  }, [])

  useEffect(() => {
    return () => { shouldRunRef.current = false; recRef.current?.abort() }
  }, [])

  return (
    <>
      {/* Floating voice status — visible whenever listening (even if panel is closed) */}
      {(listening || feedback) && (
        <div
          className="a11y-no-scale fixed bottom-20 right-6 z-[9999] max-w-[300px] rounded-xl border border-neutral-700 bg-neutral-900 text-white shadow-2xl px-4 py-3 text-[13px]"
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

      {open && (
        <div
          className="a11y-no-scale fixed bottom-20 right-6 z-[9999] w-[300px] max-w-[calc(100vw-2rem)] rounded-xl border border-neutral-700 bg-neutral-900 text-white shadow-2xl text-[13px]"
          role="dialog"
          aria-label="Accessibility settings"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-700">
            <h2 className="text-sm font-semibold">Accessibility</h2>
            <button onClick={() => setOpen(false)} aria-label="Close accessibility panel" className="text-neutral-400 hover:text-white">
              <X size={16} />
            </button>
          </div>

          <div className="px-4 py-3 space-y-3 max-h-[65vh] overflow-y-auto">
            <section>
              <h3 className="text-[10px] tracking-widest text-neutral-400 mb-2">TEXT</h3>
              <div className="flex items-center justify-between gap-3 mb-2">
                <div>
                  <div className="font-medium text-[13px]">Text size</div>
                  <div className="text-[11px] text-neutral-400">Increase or decrease</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => update('textSize', Math.max(80, settings.textSize - 10))}
                    aria-label="Decrease text size"
                    className="h-7 w-7 rounded-md border border-neutral-600 hover:bg-neutral-800 flex items-center justify-center"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-10 text-center text-[12px] font-semibold">{settings.textSize}%</span>
                  <button
                    onClick={() => update('textSize', Math.min(150, settings.textSize + 10))}
                    aria-label="Increase text size"
                    className="h-7 w-7 rounded-md border border-neutral-600 hover:bg-neutral-800 flex items-center justify-center"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
              <Row
                title="Clear reading font"
                desc="Simpler typeface, wider spacing"
                checked={settings.clearFont}
                onChange={(v) => update('clearFont', v)}
              />
            </section>

            <div className="border-t border-neutral-700" />

            <section>
              <h3 className="text-[10px] tracking-widest text-neutral-400 mb-2">DISPLAY</h3>
              <Row
                title="High contrast"
                desc="Increases colour contrast"
                checked={settings.highContrast}
                onChange={(v) => update('highContrast', v)}
              />
              <Row
                title="Reduce motion"
                desc="Stops animations"
                checked={settings.reduceMotion}
                onChange={(v) => update('reduceMotion', v)}
              />
            </section>

            <div className="border-t border-neutral-700" />

            <section>
              <h3 className="text-[10px] tracking-widest text-neutral-400 mb-2">NAVIGATION</h3>
              <Row
                title="Enhanced focus indicators"
                desc="Bold outlines when navigating"
                checked={settings.focusIndicators}
                onChange={(v) => update('focusIndicators', v)}
              />
              <Row
                title="Highlight all links"
                desc="Makes every link visible"
                checked={settings.highlightLinks}
                onChange={(v) => update('highlightLinks', v)}
              />
            </section>

            {voiceSupported && (
              <>
                <div className="border-t border-neutral-700" />
                <section>
                  <h3 className="text-[10px] tracking-widest text-neutral-400 mb-2">VOICE</h3>
                  <div className="flex items-center justify-between gap-3 py-1.5">
                    <div className="flex-1">
                      <div className="font-medium text-[13px] flex items-center gap-1.5">
                        {listening ? <Mic size={13} className="text-[hsl(330_70%_60%)]" /> : <MicOff size={13} />}
                        Voice navigation
                      </div>
                      <div className="text-[11px] text-neutral-400">Control the site by speaking</div>
                    </div>
                    <Toggle
                      checked={listening}
                      onChange={(v) => (v ? startVoice() : stopVoice())}
                      label="Voice navigation"
                    />
                  </div>
                  <button
                    onClick={() => setShowCommands((s) => !s)}
                    className="text-[11px] text-neutral-400 hover:text-white underline underline-offset-2 mt-1"
                    aria-expanded={showCommands}
                  >
                    {showCommands ? 'Hide commands' : 'Show voice commands'}
                  </button>
                  {showCommands && (
                    <ul className="space-y-1 mt-2 pl-1">
                      {SAMPLE_COMMANDS.map((c) => (
                        <li key={c} className="text-neutral-200 text-[12px]">{c}</li>
                      ))}
                    </ul>
                  )}
                </section>
              </>
            )}

            <button
              onClick={reset}
              className="w-full py-2 text-[12px] rounded-lg border border-neutral-600 hover:bg-neutral-800 transition-colors"
            >
              Reset all settings
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open accessibility settings"
        aria-expanded={open}
        className="a11y-no-scale fixed bottom-6 right-6 z-[9999] h-12 w-12 rounded-full bg-[#b22d5b] hover:bg-[#a52753] text-white shadow-2xl flex items-center justify-center transition-colors"
      >
        <ReferenceAccessibilityIcon />
      </button>
    </>
  )
}

function Row({ title, desc, checked, onChange }: { title: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <div className="flex-1">
        <div className="font-medium text-[13px]">{title}</div>
        <div className="text-[11px] text-neutral-400">{desc}</div>
      </div>
      <Toggle checked={checked} onChange={onChange} label={title} />
    </div>
  )
}
