import { useState, useEffect } from 'react'
import { X, Minus, Plus } from 'lucide-react'
import phoenixIcon from '../assets/phoenix-icon.png.asset.json'

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

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full transition-colors ${
        checked ? 'bg-[hsl(330_70%_50%)]' : 'bg-neutral-600'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform mt-1 ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(() => {
    if (typeof window === 'undefined') return DEFAULTS
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS
    } catch {
      return DEFAULTS
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    const root = document.documentElement
    // Scale text via CSS var that only targets text elements, leaving layout intact
    root.style.setProperty('--a11y-text-scale', String(settings.textSize / 100))
    root.classList.toggle('a11y-clear-font', settings.clearFont)
    root.classList.toggle('a11y-high-contrast', settings.highContrast)
    root.classList.toggle('a11y-reduce-motion', settings.reduceMotion)
    root.classList.toggle('a11y-focus', settings.focusIndicators)
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks)
  }, [settings])

  const update = <K extends keyof Settings>(k: K, v: Settings[K]) =>
    setSettings((s) => ({ ...s, [k]: v }))

  const reset = () => setSettings(DEFAULTS)

  return (
    <>
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
        className="a11y-no-scale fixed bottom-6 right-6 z-[9999] h-12 w-12 rounded-full bg-[hsl(330_77%_42%)] hover:bg-[hsl(330_77%_38%)] text-white shadow-2xl flex items-center justify-center transition-colors"
      >
        <img src={phoenixIcon.url} alt="" className="h-5 w-5 object-contain" />
      </button>
    </>
  )
}

function Row({ title, desc, checked, onChange }: { title: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="flex-1">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-neutral-400">{desc}</div>
      </div>
      <Toggle checked={checked} onChange={onChange} label={title} />
    </div>
  )
}
