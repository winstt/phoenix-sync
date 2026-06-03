import PageHero from '../components/PageHero'

const h2 = (text: string) => (
  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0eb', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.9rem', marginTop: '2.5rem' }}>{text}</h2>
)

const p = (text: React.ReactNode) => (
  <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.8', marginBottom: '0.75rem' }}>{text}</p>
)

const li = (items: string[]) => (
  <ul style={{ listStyle: 'disc', listStylePosition: 'outside', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.75rem' }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontSize: '0.95rem', color: 'rgba(245,240,235,0.65)', lineHeight: '1.7' }}>{item}</li>
    ))}
  </ul>
)

export default function TermsPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow=""
        heading="Terms & conditions."
        description="Last updated: May 2026"
      />
      <section style={{ padding: '2.5rem 2.5rem 4rem', background: '#0d0d0d', borderTop: '1px solid rgba(245,240,235,0.08)' }}>
        <div style={{ maxWidth: '760px' }}>

          {p('Please read these Terms and Conditions carefully before using the website at phoenix-trust.co.uk (the "Website") operated by The Phoenix Community Trust ("we", "us", "our"). By accessing or using our Website, you agree to be bound by these terms.')}

          {h2('1. About us')}
          {p('The Phoenix Community Trust is a registered charity and company limited by guarantee, registered in England and Wales. Company number: 16484357. Registered charity number: [XXXXX]. Registered address: C/O Stone King LLP, Boundary House, 91 Charterhouse Street, London, EC1M 6HR.')}

          {h2('2. Use of this website')}
          {p('You may use this Website for lawful purposes only. You must not use this Website:')}
          {li([
            'In any way that breaches any applicable local, national or international law or regulation',
            'In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect',
            'To transmit any unsolicited or unauthorised advertising or promotional material',
            'To knowingly transmit any data or material containing viruses, Trojan horses, worms, or other harmful or malicious code',
            'To scrape, harvest or copy content without our written permission',
          ])}

          {h2('3. Intellectual property')}
          {p('All content on this Website — including but not limited to text, graphics, logos, photographs, and the overall design — is owned by or licensed to The Phoenix Community Trust and is protected by UK copyright and intellectual property law.')}
          {p('You may view and print content from this Website for your own personal, non-commercial use only. You must not reproduce, distribute, modify, or create derivative works of any content without our express written consent.')}
          {p('Trustee photographs are used with the permission of the individuals concerned and remain their own property.')}

          {h2('4. Accuracy of information')}
          {p('We endeavour to keep the information on this Website accurate and up to date. However, we make no warranty or representation, express or implied, as to the completeness, accuracy or currency of any information on this Website. Content is provided for general informational purposes only and does not constitute legal, financial or professional advice.')}

          {h2('5. Third-party links')}
          {p('This Website contains links to external websites operated by third parties (including our social media profiles and partner organisation websites). These links are provided for your convenience and information only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. The inclusion of a link does not imply our endorsement of the linked website or its operator.')}

          {h2('6. Limitation of liability')}
          {p('To the fullest extent permitted by law, The Phoenix Community Trust excludes all liability for:')}
          {li([
            'Loss or damage arising from your use of, or inability to use, this Website',
            'Any reliance placed on the content of this Website',
            'Any interruption to or unavailability of the Website',
            'Any inaccuracy or error in the content of the Website',
          ])}
          {p('Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.')}

          {h2('7. Viruses and security')}
          {p('We do not guarantee that this Website will be secure or free from bugs or viruses. You are responsible for configuring your technology to access this Website. You should use your own virus protection software.')}

          {h2('8. Changes to these terms')}
          {p('We may revise these Terms and Conditions at any time by updating this page. The updated terms will be effective from the date they are posted. Please check this page periodically for changes.')}

          {h2('9. Governing law')}
          {p('These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.')}

          {h2('10. Contact')}
          {p('If you have any questions about these Terms and Conditions, please contact us at info@phoenix-trust.co.uk.')}

        </div>
      </section>
    </>
  )
}
