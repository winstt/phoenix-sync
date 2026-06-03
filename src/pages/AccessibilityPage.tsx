import PageHero from '../components/PageHero'

const section = (heading: string, children: React.ReactNode) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.9rem' }}>{heading}</h2>
    {children}
  </div>
)

const p = (text: string) => (
  <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.8', marginBottom: '0.75rem' }}>{text}</p>
)

const li = (items: string[]) => (
  <ul style={{ listStyle: 'disc', listStylePosition: 'outside', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.75rem' }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.7' }}>{item}</li>
    ))}
  </ul>
)

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow=""
        heading="Accessibility statement."
        description="Last updated: 11 May 2026 · Next review: 11 May 2027"
      />
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '760px' }}>

          {section('About this statement', <>
            {p('This accessibility statement applies to the website of The Phoenix Community Trust. Our website is designed to be used by as many people as possible, and we take our responsibility to ensure equal digital access seriously. We aim for this website to be fully compliant with the Web Content Accessibility Guidelines (WCAG) 2.1 AA standard and the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.')}
          </>)}

          {section('Who this site is designed for', <>
            {p('We have designed this website to be accessible to people who are:')}
            {li([
              'Using screen readers or other assistive technology',
              'Navigating by keyboard only',
              'Using voice recognition software',
              'Experiencing visual, hearing, motor, or cognitive impairments',
              'Accessing the site on mobile devices',
              'Using slow or limited internet connections',
            ])}
          </>)}

          {section('What we are doing to improve', <>
            {p('We are committed to continuously improving the accessibility of our website. Current and planned improvements include:')}
            {li([
              'Regular accessibility audits',
              'Staff training on accessible content creation',
              'Alternative text for all images',
              'Captions or transcripts for any video or audio content',
              'Clear, plain English throughout',
              'Sufficient colour contrast in line with WCAG 2.1 AA standards',
              'Testing with assistive technologies including screen readers',
            ])}
          </>)}

          {section('Known accessibility issues', <>
            {p('We are not currently aware of any specific accessibility issues on this website. If you experience any difficulties, please contact us using the details below and we will investigate as a priority.')}
          </>)}

          {section('Feedback and contact', <>
            {p('If you have difficulty using any part of this website, or if you would like to access content in a different format, please contact us and we will do our best to help.')}
            {p('Email: info@phoenix-trust.co.uk')}
            {p('Address: C/O Stone King LLP, 91 Charterhouse Street, London EC1M 6HR')}
            {p('We aim to respond to all accessibility queries within 5 working days.')}
          </>)}

          {section('Enforcement procedure', <>
            {p('If you contact us with a complaint and you are not happy with our response, you can contact the Equality and Human Rights Commission (EHRC), which enforces accessibility regulations in England, Scotland and Wales.')}
            {p('Equality Advisory and Support Service (EASS)')}
            {p(<>Website: <a href="https://www.equalityadvisoryservice.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E8570A', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>www.equalityadvisoryservice.com</a> · Freephone: 0808 800 0082</>)}
          </>)}

        </div>
      </section>
    </>
  )
}
