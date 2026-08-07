import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-08-05'})

async function articleReference(slug, key) {
  const id = await client.fetch('*[_type == "article" && slug.current == $slug][0]._id', {slug})
  return id ? {_type: 'reference', _ref: id, _key: key} : null
}

async function seed() {
  const relatedArticles = (
    await Promise.all([
      articleReference('why-your-business-still-runs-through-you', 'owner-dependency'),
      articleReference('signs-business-outgrown-operating-system', 'operating-system'),
      articleReference(
        'your-managers-are-capable-why-isnt-the-leadership-team-working',
        'leadership-team',
      ),
    ])
  ).filter(Boolean)

  const page = {
    _id: 'location-southeastern-new-england',
    _type: 'locationPage',
    title: 'Southeastern New England',
    slug: {_type: 'slug', current: 'southeastern-new-england'},
    regionName: 'Southeastern New England',
    heroEyebrow: 'Operating Partner Support in Southeastern New England',
    heroTitle: 'Experienced operating partnership, close to the business.',
    heroIntroduction:
      'Tidal Point works alongside owners and leadership teams across Massachusetts, Rhode Island and Southeastern New England when growth, change or transition has raised the consequence of every decision.',
    regionalContext: {
      eyebrow: 'A Regional Operating Perspective',
      title: 'Close enough to understand the context. Independent enough to challenge it.',
      body:
        'Privately held businesses across Southeastern New England often combine substantial operating complexity with deeply personal ownership. Customers, employees and communities may have depended on the company for decades.\n\nAt a pivotal moment, leaders need more than generic advice. They need an experienced operator who can understand the business quickly, test the decisions that matter and remain alongside the team as those decisions become operating progress.',
      details: [
        {_type: 'regionDetail', _key: 'base', label: 'Based in', value: 'Plymouth, Massachusetts'},
        {_type: 'regionDetail', _key: 'region', label: 'Serving', value: 'Massachusetts, Rhode Island and adjacent New England markets'},
        {_type: 'regionDetail', _key: 'businesses', label: 'Business fit', value: 'Established privately held and owner-led companies'},
      ],
    },
    situations: {
      eyebrow: 'When Leaders Call Us',
      title: 'The business is established. The next decision still carries real weight.',
      introduction:
        'The need rarely presents itself as a request for an Operating Partner. It begins with a consequential business situation that needs experienced judgment and sustained follow-through.',
      items: [
        {_type: 'situation', _key: 'growth', title: 'Growth has increased complexity faster than the business has adapted.', body: 'Decision-making, accountability and operating rhythm have not kept pace with a larger and more demanding company.'},
        {_type: 'situation', _key: 'dependency', title: 'Too much of the business still runs through one person.', body: 'The owner or CEO remains the center of gravity, constraining leadership capacity and the company’s next chapter.'},
        {_type: 'situation', _key: 'leadership', title: 'A capable management group is not yet operating as one leadership team.', body: 'Strong individual managers need clearer priorities, shared accountability and a better way to make decisions together.'},
        {_type: 'situation', _key: 'investment', title: 'A major investment or strategic move requires greater confidence.', body: 'A new service line, facility, system, acquisition or market move demands choices that must hold up through execution.'},
      ],
    },
    supportAreas: {
      eyebrow: 'How Tidal Point Helps',
      title: 'One experienced operator, backed by the right capabilities.',
      introduction:
        'The relationship stays personal and senior-led. Specialist resources are added only when a defined deliverable will help the leadership team move forward.',
      items: [
        {_type: 'supportArea', _key: 'direction', label: 'Direction', title: 'Clarify the decision and what it requires.', body: 'Frame the real question, pressure-test assumptions and establish a course the ownership and leadership team can carry forward with confidence.'},
        {_type: 'supportArea', _key: 'leadership', label: 'Leadership', title: 'Build capability around the owner and CEO.', body: 'Strengthen roles, decision rights and accountability so the management team becomes a source of leverage rather than another point of escalation.'},
        {_type: 'supportArea', _key: 'performance', label: 'Performance', title: 'Translate judgment into operating progress.', body: 'Connect strategic choices to priorities, measures and a practical operating cadence—without burdening the business with a consulting program.'},
      ],
    },
    businessProfile: {
      eyebrow: 'Built for the Region’s Established Businesses',
      title: 'Different industries. Familiar operating realities.',
      body:
        'Southeastern New England is home to substantial businesses built over years, often across generations. Their industries differ, but many share the same challenge: preserving the judgment and commitment that made the company successful while building the leadership and operating capacity required for what comes next.',
      industries: ['Manufacturing', 'Distribution & logistics', 'Business services', 'Healthcare services', 'Engineering & construction', 'Specialty consumer products'],
    },
    relatedArticles,
    cta: {
      eyebrow: 'A Useful First Conversation',
      title: 'Start with the situation—not a predefined engagement.',
      body:
        'A good introductory conversation should sharpen the issue, create value and make the right next step clear to both sides.',
      buttonLabel: 'Start a conversation',
      buttonHref: '/contact',
    },
    seoTitle: 'Operating Partner in Southeastern New England',
    metaDescription:
      'Experienced Operating Partner support for privately held businesses across Massachusetts, Rhode Island and Southeastern New England navigating growth and change.',
    canonicalUrl: 'https://tidalpointpartners.com/locations/southeastern-new-england',
    noIndex: false,
  }

  await client.createOrReplace(page)
  console.log('Published the crawlable Southeastern New England location page.')
}

seed().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
