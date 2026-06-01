import PageHero from '../components/PageHero'

const h2 = (text: string) => (
  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.9rem', marginTop: '2.5rem' }}>{text}</h2>
)

const h3 = (text: string) => (
  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.5rem', marginTop: '1.5rem' }}>{text}</h3>
)

const p = (text: React.ReactNode) => (
  <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.8', marginBottom: '0.75rem' }}>{text}</p>
)

const li = (items: string[]) => (
  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.75rem' }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.7' }}>{item}</li>
    ))}
  </ul>
)

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading="Privacy policy."
        description="Last updated: 11 May 2026 · Next review: 11 May 2027"
      />
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '760px' }}>

          {p('The Phoenix Community Trust is a Global Majority movement for funding justice and systems change, rooted in lived experience and community-led decision making, ending funding inequity by redistributing power and resources to our communities. We are the data controller for the personal information we collect. We operate under UK GDPR and the Data Protection Act 2018.')}
          {p('If you have any questions about this policy, please contact our Data Protection Officer at info@phoenix-trust.co.uk.')}

          {h2('Information we collect and why')}

          {h3('Contact form submissions')}
          {p('We collect your name, email address, and message content when you use our contact form. We use this to respond to your enquiry and maintain a record of correspondence. Our lawful basis is legitimate interests. We retain this data for three years, after which it is securely deleted.')}

          {h3('Newsletter & mailing list')}
          {p('We collect your name, email address and communication preferences when you sign up to our mailing list. We use this to send you the communications you have requested. Our lawful basis is consent. You can unsubscribe at any time via the link in any email we send. We retain your data for as long as you are subscribed, or up to three years if inactive.')}

          {h3('Cookies & website analytics')}
          {p('We use essential cookies to enable the website to function, and analytics cookies (with your consent) to understand how visitors use our site. Analytics data is aggregated and anonymised; IP addresses are anonymised. Our lawful basis for analytics is consent under PECR 2003. We retain analytics data for 26 months. See our Cookie Policy for more detail.')}

          {h3('Job applications')}
          {p('We collect your name, contact details, CV, cover letter, and any other information you include in your application. We also collect equal opportunities monitoring data separately and voluntarily — understanding who applies to work with us matters to our commitment to Global Majority leadership. Our lawful basis is contract and legitimate interests. We retain applications from unsuccessful candidates for one year; for appointed candidates, seven years post-employment.')}

          {h3('Funding applications')}
          {p('We collect lead applicant and organisation contact details, organisational information, project details, and equality and diversity monitoring data. We use this to assess applications, make funding decisions, and meet reporting obligations to the National Lottery Community Fund. Our lawful basis is public task and legitimate interests. We retain successful applications for seven years; unsuccessful applications for two years.')}

          {h2('Sharing your data')}
          {p('We do not sell your personal data or share it for marketing purposes. We may share data only with:')}
          {li([
            'IT service providers who process data on our behalf under data processing agreements',
            'Statutory funders such as the National Lottery Community Fund, to demonstrate compliance with grant conditions',
            'Professional advisers bound by confidentiality obligations',
            'Regulatory bodies where required by law',
          ])}
          {p('Where data is transferred internationally, we ensure appropriate safeguards are in place via adequacy decisions or standard contractual clauses.')}

          {h2('Your rights')}
          {p('You can exercise any of the following rights by contacting info@phoenix-trust.co.uk. We will acknowledge your request within five working days and respond in full within one month.')}
          {li([
            'Right to be informed — explained by this policy',
            'Right of access — request a copy of your personal data',
            'Right to rectification — correct inaccurate or incomplete data',
            'Right to erasure — request deletion in certain circumstances',
            'Right to restrict processing — limit how we use your data in specific situations',
            'Right to data portability — receive your data in a machine-readable format where applicable',
            'Right to object — you have an absolute right to object to direct marketing; you may also object to processing based on legitimate interests',
          ])}
          {p('We do not use solely automated decision-making with significant effects on individuals.')}

          {h2('Security')}
          {p('We protect personal data through encryption in transit and at rest, multi-factor authentication, role-based access controls, regular security testing, staff training, and clear data handling procedures. In the event of a breach that affects your rights or freedoms, we will notify the ICO within 72 hours and contact you directly where required.')}

          {h2('External links')}
          {p('Our website may contain links to external sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.')}

          {h2('Contact & complaints')}
          {p('If you have concerns about how we handle your data, please contact us at info@phoenix-trust.co.uk. You also have the right to lodge a complaint with the Information Commissioner\'s Office (ICO):')}
          {p('Website: ico.org.uk · Helpline: 0303 123 1113 · Post: Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF')}

        </div>
      </section>
    </>
  )
}
