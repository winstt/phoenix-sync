import PageHero from '../components/PageHero'

export default function ArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="Archive"
        heading="Our story."
        description="The moments and milestones that brought us here."
      />
      <section style={{ padding: '2rem 2.5rem 5rem', background: '#0d0d0d' }}>
        <p style={{ fontSize: '1.05rem', color: 'rgba(245,240,235,0.6)', lineHeight: '1.85', maxWidth: '640px' }}>
          This space will hold our story – the moments and milestones that brought us here. We're putting it together with care. Come back soon.
        </p>
      </section>
    </>
  )
}
