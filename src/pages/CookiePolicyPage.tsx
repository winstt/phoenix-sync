import PageHero from '../components/PageHero'

const heading = (text: string) => (
  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.9rem', marginTop: '2rem' }}>{text}</h2>
)

const p = (text: string) => (
  <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.8', marginBottom: '0.75rem' }}>{text}</p>
)

const tag = (label: string, always?: boolean) => (
  <span style={{ display: 'inline-block', fontSize: '6.5px', fontWeight: 500, letterSpacing: '0.03em', textTransform: 'uppercase', padding: '1px 5px', borderRadius: '100px', marginBottom: '0.4rem', lineHeight: 1.3, background: always ? 'rgba(232,87,10,0.15)' : 'rgba(255,255,255,0.06)', border: always ? '0.5px solid rgba(232,87,10,0.3)' : '0.5px solid rgba(255,255,255,0.1)', color: always ? '#E8570A' : 'rgba(245,240,235,0.5)' }}>{label}</span>
)

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow=""
        heading="Cookie policy."
        description="Last updated: 11 May 2026 · Next review: 11 May 2027"
      />
      <section style={{ padding: '2.5rem 2.5rem 4rem', background: '#0d0d0d', borderTop: '1px solid rgba(245,240,235,0.08)' }}>
        <div style={{ maxWidth: '760px' }}>

          {p('Cookies are small text files that are placed on your device when you visit a website. We use cookies to make our site function correctly and to understand how it is being used so we can improve it.')}

          {heading('Essential cookies')}
          {tag('Always on', true)}
          {p('These cookies are necessary for the website to function and cannot be switched off. They are set in response to your actions, such as remembering your cookie preferences, ensuring the site loads and navigates correctly, and supporting basic security functions.')}

          {heading('Analytics cookies')}
          {tag('Requires consent')}
          {p('We use analytics to understand how visitors use our website. This helps us improve how the site works and the content we provide. Analytics cookies track pages visited, time spent on the site, where you came from, your general location (country or region only), and the type of device you are using.')}
          {p('All data is aggregated and anonymised wherever possible. We configure analytics with IP address anonymisation enabled. We do not use this data to identify individual visitors.')}

          {heading('Third-party cookies')}
          {tag('Third-party controlled')}
          {p('Our website may include embedded content such as videos from YouTube or Vimeo, and links to our social media profiles on platforms including X/Twitter, Instagram, LinkedIn, Facebook, and Bluesky. These platforms may set their own cookies when you interact with their content. We do not control these cookies — please refer to each platform\'s privacy policy for more information.')}

          {heading('Managing your cookies')}
          {p('You can manage or withdraw your cookie consent at any time through:')}
          <ul style={{ listStyle: 'disc', listStylePosition: 'outside', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
            {['The cookie consent banner shown on your first visit', 'Your browser settings — most browsers allow you to refuse or delete cookies', 'Platform-specific opt-out tools for analytics providers'].map((item, i) => (
              <li key={i} style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.7' }}>{item}</li>
            ))}
          </ul>
          {p('Please note that disabling essential cookies may affect the functionality of this website.')}

          {heading('Contact')}
          {p('If you have any questions about how we use cookies, please contact our Data Protection Officer at info@phoenix-trust.co.uk or write to us at: C/O Stone King LLP, Boundary House, 91 Charterhouse Street, London, EC1M 6HR.')}

        </div>
      </section>
    </>
  )
}
