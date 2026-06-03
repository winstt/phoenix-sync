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

const stageCard = (stage: string, title: string, text: string) => (
  <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem' }}>
    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8570A', marginBottom: '0.4rem' }}>{stage}</p>
    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f5f0eb', marginBottom: '0.6rem' }}>{title}</h3>
    <p style={{ fontSize: '0.9rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.7' }}>{text}</p>
  </div>
)

export default function ComplaintsPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow=""
        heading="Complaints policy."
        description="Last updated: May 2026"
      />
      <section style={{ padding: '4rem 2.5rem', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '760px' }}>

          {p('The Phoenix Community Trust is committed to delivering high-quality work that reflects our values of equity, transparency and accountability. We take all complaints seriously and aim to resolve them fairly, promptly and respectfully.')}
          {p('This policy applies to complaints from members of the public, community organisations, grant applicants, partners, and anyone else who interacts with us.')}

          {h2('What is a complaint?')}
          {p('A complaint is any expression of dissatisfaction with our work, our people, our decisions, or the services we provide. This includes complaints about:')}
          {li([
            'The quality or content of our communications and publications',
            'Our grants processes, including decisions on applications',
            'The conduct of our staff, volunteers or trustees',
            'Our events or activities',
            'Our website or digital content',
            'How we have handled your personal data',
          ])}
          {p('Feedback that does not express dissatisfaction (such as general suggestions or requests for information) is not treated as a complaint under this policy, though we welcome all input.')}

          {h2('How to make a complaint')}
          {p('You can submit a complaint by:')}
          {li([
            'Email: info@phoenix-trust.co.uk - please use the subject line Formal Complaint',
            'Post: The Phoenix Community Trust, C/O Stone King LLP, Boundary House, 91 Charterhouse Street, London, EC1M 6HR',
          ])}
          {p('Please include: your full name and contact details, a clear description of the issue including relevant dates, any supporting evidence or documentation, and what outcome you are seeking.')}

          {h2('Our complaints process')}

          {stageCard('Stage 1', 'Initial response', 'We will acknowledge receipt of your complaint within 5 working days. A member of our team will investigate the matter and provide a full response within 20 working days of receipt. If we need more time - for example, because the matter is complex - we will tell you and keep you informed of progress.')}
          {stageCard('Stage 2', 'Review', 'If you are not satisfied with the Stage 1 response, you may request a review by writing to us within 28 days of receiving our Stage 1 response. Please explain why you are not satisfied and what outcome you are seeking. A senior member of staff or trustee not previously involved will review the matter and respond within 20 working days.')}
          {stageCard('Stage 3', 'Trustee panel', 'If you remain dissatisfied after Stage 2, you may request that your complaint be considered by the Board of Trustees within 28 days of the Stage 2 response. The trustees will consider your complaint at the next available board meeting and respond within 30 working days. The trustees\' decision is final under our internal process.')}

          {h2('Escalation to the Charity Commission')}
          {p('If, after exhausting our internal process, you believe there has been serious misconduct, mismanagement or a breach of charity law, you have the right to report your concerns to the Charity Commission for England and Wales:')}
          {p('Website: gov.uk/complain-about-charity · Telephone: 0300 066 9197')}
          {p('Please note that the Charity Commission is a regulator, not an appeals body for individual grant or service decisions.')}

          {h2('Confidentiality')}
          {p('We treat all complaints confidentially. Information about your complaint will only be shared with those within the organisation who need to be involved in investigating or resolving it, or where required by law.')}

          {h2('Anonymous complaints')}
          {p('We accept anonymous complaints. However, because we cannot seek further information or provide a response without contact details, we may be limited in what we can investigate. We will consider anonymous complaints where the information provided is sufficiently detailed.')}

          {h2('Vexatious or unreasonable complaints')}
          {p('We are committed to handling all complaints respectfully and fairly. In rare cases where a complaint is considered vexatious, persistently repetitive or made in bad faith, we reserve the right to apply a modified procedure. We will inform the complainant if we consider this to be the case.')}

          {h2('Learning from complaints')}
          {p('We log all formal complaints and use them to improve our work. The Board of Trustees receives a summary report of complaints annually as part of our governance oversight.')}

          {h2('Contact')}
          {p('If you have any questions about this policy, please contact us at info@phoenix-trust.co.uk.')}

        </div>
      </section>
    </>
  )
}
