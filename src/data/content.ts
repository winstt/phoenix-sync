// ─────────────────────────────────────────────────────────────────────────────
// ALL SITE CONTENT — edit this file to update any text, links, or data.
// ─────────────────────────────────────────────────────────────────────────────

const B = import.meta.env.BASE_URL // e.g. '/phoenix-sync/'
const img = (name: string) => `${B}images/${name}`

export const siteContent = {
  // ── BRAND ──────────────────────────────────────────────────────────────────
  brand: {
    name: 'The Phoenix Community Trust',
    email: 'info@phoenix-trust.co.uk',
  },

  // ── NAVIGATION ─────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Grants', href: '/grants' },
      { label: 'Our impact', href: '/impact' },
      { label: 'News', href: '/news' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Join our community', href: '/newsletter' },
  },

  // ── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'A Global Majority movement',
    headlineOrange: 'Funding Justice.',
    headlineWhite: 'Redistributing Power and Resources to Communities Across the UK.',
    description:
      'The Phoenix Community Trust exists to dismantle structural racism and end funding inequity by consolidating, resourcing and reinforcing the collective power, capacity and infrastructure of Global Majority communities across the UK.',
    primaryCta: { label: 'Join our community', href: '/newsletter' },
    secondaryCta: { label: 'Our impact', href: '/impact' },
    // Replace with your hero image URL. Use null to show a gradient placeholder.
    imageUrl: img('homepage.jpeg') as string | null,
  },

  // ── WHO STRIP (orange banner below hero) ───────────────────────────────────
  whoStrip: 'Rooted in lived experience and community-led decision making.',

  // ── PILLARS ────────────────────────────────────────────────────────────────
  pillars: [
    {
      num: '01',
      title: 'Join the community',
      description: 'A growing, community-powered movement shaping a just funding system in the UK.',
      link: { label: 'Join the community', href: '#' },
    },
    {
      num: '02',
      title: 'Our leaders',
      description:
        'Meet our Board of Trustees, passionate leaders and trusted advisors whose expertise, values, and commitment to social impact guide our mission, ensuring our work remains ambitious, accountable, and focused on lasting change.',
      link: { label: 'Meet our leaders', href: '#' },
    },
    {
      num: '03',
      title: 'Our impact',
      description:
        'Linking communities and leaders across regions to reinforce collective strength - celebrating the leadership and innovation already thriving within Global Majority communities.',
      link: { label: 'See our impact', href: '#' },
    },
  ],

  // ── SCROLL TICKER PANELS ───────────────────────────────────────────────────
  // Add image URLs to replace gradient placeholders.
  tickerPanels: [
    { imageUrl: img('homepage.jpeg'), gradient: 'linear-gradient(135deg, #E8570A22, #1a1a1a)' },
    { imageUrl: img('about-us.jpeg'), gradient: 'linear-gradient(135deg, #C2185B22, #1a1a1a)' },
    { imageUrl: img('grants.jpeg'), gradient: 'linear-gradient(135deg, #E8570A33, #222)' },
    { imageUrl: img('impact.jpeg'), gradient: 'linear-gradient(135deg, #C2185B33, #1a1a1a)' },
    { imageUrl: img('news.jpeg'), gradient: 'linear-gradient(135deg, #FF6B1A22, #0d0d0d)' },
    { imageUrl: img('opportunities.jpeg'), gradient: 'linear-gradient(135deg, #E91E8C22, #222)' },
  ],

  // ── VISION BLOCK ───────────────────────────────────────────────────────────
  vision: {
    label: 'Our vision',
    // The highlighted part of the quote is wrapped in orange. Set to '' to disable.
    quoteBeforeHighlight: '"A future where structural racism is dismantled, ',
    quoteHighlight: 'funding justice is realised',
    quoteAfterHighlight:
      ', and Global Majority communities hold the power and resources to thrive."',
  },

  // ── IMPACT ─────────────────────────────────────────────────────────────────
  impact: {
    label: 'Our reach',
    title: 'Discover the impact across our regions',
    description:
      'Connecting communities and leaders across the UK to strengthen collaboration and amplify the innovation already thriving in our communities.',
    mapCta: { label: 'Explore the map', href: '#' },
    stats: [
      {
        num: '2026',
        label: "upcoming opportunity for communities to get involved in Phoenix's strategic development",
        noCount: true,
      },
      { num: '3000+', label: 'community members impacted', noCount: true },
      { num: '200+', label: 'community organisations in our network', noCount: true },
      {
        num: '£4M',
        label: 'upcoming grants round in collaboration with The National Lottery Community Fund',
        noCount: true,
      },
    ],
    regions: [
      'North East & Cumbria',
      'Yorkshire & Humber',
      'North West',
      'East Midlands',
      'West Midlands',
      'East of England',
      'South West',
      'Greater London',
      'South East',
    ],
  },

  // ── ORIGIN STORY ───────────────────────────────────────────────────────────
  origin: {
    label: 'Origin',
    title: 'Our origin story',
    entries: [
      {
        year: '2020',
        text: 'The Phoenix Community Trust emerged as a community-led response to the structural inequalities confronting Global Majority communities in the UK. In the midst of the COVID-19 pandemic, the Phoenix Fund mobilised emergency funding support for grassroots groups, getting resources to communities at pace, when they were needed most.',
        isToday: false,
      },
      {
        year: '2021',
        text: 'As the work grew from The Phoenix Fund with the National Lottery Community Fund, some of the partners came together as The Phoenix Way - working with a shared ambition to dismantle systemic racism in philanthropy and drive lasting, community-led, transformative change.',
        isToday: false,
      },
      {
        year: '2025',
        text: 'A new chapter began when Phoenix was incorporated as an independent Global Majority-led organisation, with a newly appointed independent Board, to steward the next phase of the work. The new structure lays the foundation for long term investment in community infrastructure and the development of a lasting model for change.',
        isToday: false,
      },
      {
        year: 'Today',
        text: 'We honour the roots of The Phoenix Community Trust and the communities and partners who shaped its early momentum, while looking forward with renewed energy and excitement to what comes next.',
        isToday: true,
      },
    ],
  },

  // ── NEWS ───────────────────────────────────────────────────────────────────
  news: {
    label: 'Latest',
    title: 'News & updates',
    allNewsCta: { label: 'All news', href: '/news' },
    cards: [
      {
        slug: '2026-strategy-development',
        tag: 'Announcement',
        title: '2026 Strategy Development',
        description:
          'Our strategic priorities for 2026 are taking shape. Find out how we are building the foundations for lasting systems change across the UK.',
        date: '2026',
        href: '/news/2026-strategy-development',
        body: [
          'Over the past year, The Phoenix Community Trust has been listening, convening and learning alongside Global Majority communities across the UK. Out of those conversations, a clear set of strategic priorities is emerging for 2026 — priorities rooted in lived experience, community leadership and a long-term commitment to funding justice.',
          'Our 2026 strategy is being shaped around four pillars: redistributing power and resources, investing in community infrastructure, championing Global Majority leadership, and challenging the structural inequities that persist in UK philanthropy. Each pillar is grounded in what communities have told us they need to thrive — not what funders assume.',
          'In the coming months we will share more detail on the consultations, partnerships and grant-making that will bring this strategy to life. We are also inviting community organisations, leaders and allies to take part in shaping the next chapter of this work.',
          'If you would like to be part of the conversation, sign up to our newsletter and follow along as the strategy unfolds.',
        ],
      },
      {
        slug: 'cheltenham-partnership-event',
        tag: 'Community',
        title: 'Cheltenham Partnership Event - Key Insights',
        description:
          'Reflections and outcomes from the partnership convening that shaped our strategic direction and community-led decision making.',
        date: 'February 2026',
        href: '/news/cheltenham-partnership-event',
        body: [
          'In February, Phoenix brought together community leaders, funders and partners from across the UK for a two-day convening in Cheltenham. The event created space for honest conversation about the barriers Global Majority communities continue to face when accessing philanthropic funding — and what a more just system could look like.',
          'Three themes stood out across the sessions: the need for long-term, unrestricted funding; the importance of trusting community-led decision making; and the urgency of building infrastructure that outlasts any single grant or initiative.',
          'Participants spoke powerfully about the strength already present in their communities, and the value of being resourced to lead on their own terms. Those reflections will directly shape Phoenix\'s grant-making approach and partnership model in 2026.',
          'We are deeply grateful to everyone who travelled to Cheltenham and shared their insight. The conversations sparked there will continue to guide our work in the months ahead.',
        ],
      },
      {
        slug: '2026-grants-round',
        tag: 'Grants',
        title: '2026 Grants Round - What to Expect',
        description:
          'Details on our first grants round in partnership with The National Lottery Community Fund, coming later this year.',
        date: 'Coming soon',
        href: '/news/2026-grants-round',
        body: [
          'Later this year, Phoenix will launch its first major grants round in partnership with The National Lottery Community Fund — a £4M programme designed to back Global Majority-led organisations doing transformative work in their communities.',
          'The round will prioritise multi-year, flexible funding so that organisations can plan, build capacity and respond to the needs of their communities without being constrained by short funding cycles. Decision-making will be community-led, drawing on panels of trusted advisors with deep lived experience.',
          'We are currently finalising the eligibility criteria, application process and timeline. Our aim is to make the experience as accessible, transparent and respectful of applicants\' time as possible.',
          'Full details — including how to apply and the dates for information sessions — will be announced in the coming months. Join our newsletter to be the first to hear when applications open.',
        ],
      },
    ],
  },


  // ── FOOTER ─────────────────────────────────────────────────────────────────
  footer: {
    tagline:
      'A Global Majority movement for funding justice and systems change - redistributing power and resources to our communities across the UK.',
    columns: {
      organisation: {
        heading: 'Organisation',
        links: [
          { label: 'About us', href: '/about' },
          { label: 'Our leaders', href: '/about#trustees-h2' },
          { label: 'Work with us', href: '/opportunities' },
          { label: 'News', href: '/news' },
          { label: 'Contact', href: '/contact' },
          { label: 'Archive', href: '/archive' },
        ],
      },
      work: {
        heading: 'Work',
        links: [
          { label: 'Grants', href: '/grants' },
          { label: 'Our impact', href: '/impact' },
          { label: 'Our network', href: '/impact#partners-section' },
          { label: 'Join the community', href: '/opportunities' },
        ],
      },
    },
    getInTouch: {
      heading: 'Get in touch',
      email: 'info@phoenix-trust.co.uk',
      social: [
        { label: 'Instagram', href: 'https://www.instagram.com/phoenixcommunitytrustuk/', icon: 'instagram' },
        { label: 'Facebook', href: 'https://www.facebook.com/people/The-Phoenix-Community-Trust/61589475597509/?mibextid=wwXIfr&rdid=gpNaLbJCTXkxTGvk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ECVV5eixA%2F%3Fmibextid%3DwwXIfr%26ref%3D1', icon: 'facebook' },
        { label: 'YouTube', href: 'https://youtube.com/@phoenixcommunitytrustuk?si=cyn3uT-Z511GlECm', icon: 'youtube' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phoenix-way-uk?utm_source=share_via&utm_content=profile&utm_medium=member_ios', icon: 'linkedin' },
        { label: 'Bluesky', href: 'https://bsky.app/profile/phoenix-trust.bsky.social', icon: 'bluesky' },
      ],
    },
    legal: [
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Cookie policy', href: '/cookie-policy' },
      { label: 'Accessibility statement', href: '/accessibility' },
    ],

    address: 'C/O Stone King LLP, Boundary House, 91 Charterhouse Street, London, EC1M 6HR',
    copyright: '© 2026 The Phoenix Community Trust. All rights reserved.',
    registeredCharityNumber: '[XXXXX]',
    companyNumber: '16484357',
  },
}
