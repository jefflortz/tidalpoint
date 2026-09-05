import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-04'})

async function articleReference(slug, key) {
  const id = await client.fetch('*[_type == "article" && slug.current == $slug][0]._id', {slug})
  return id ? {_type: 'reference', _ref: id, _key: key} : null
}

async function relatedArticles(slugs) {
  return (await Promise.all(slugs.map(({slug, key}) => articleReference(slug, key)))).filter(Boolean)
}

const sharedCta = {
  eyebrow: 'A Useful First Conversation',
  title: 'Start with the situation—not a predefined engagement.',
  body: 'A good introductory conversation should sharpen the issue, create value and make the right next step clear to both sides.',
  buttonLabel: 'Start a conversation',
  buttonHref: '/contact',
}

async function pages() {
  return [
    {
      _id: 'location-plymouth-south-shore',
      _type: 'locationPage',
      title: 'Plymouth & the South Shore',
      slug: {_type: 'slug', current: 'plymouth-south-shore'},
      regionName: 'Plymouth & the South Shore',
      primarySearchPhrase:
        'operating partner for privately held businesses in Plymouth and the South Shore',
      areasServed: [
        'Plymouth',
        'Kingston',
        'Duxbury',
        'Marshfield',
        'Hanover',
        'Hingham',
        'Weymouth',
      ],
      regionalIndustries: [
        'Business & professional services',
        'Construction & engineering',
        'Healthcare services',
        'Technology & research',
        'Distribution & logistics',
        'Specialty consumer businesses',
      ],
      heroEyebrow: 'Operating Partner Support in Plymouth & the South Shore',
      heroTitle: 'Experienced operating partnership, based close to the business.',
      heroIntroduction:
        'Tidal Point is based in Plymouth and works alongside owners and leadership teams across the South Shore when growth, transition or a consequential decision requires experienced judgment and sustained follow-through.',
      regionalContext: {
        eyebrow: 'A South Shore Operating Perspective',
        title: 'A strong regional business deserves more than a Boston-centric answer.',
        body:
          'The South Shore is home to established businesses that combine deep customer relationships with increasingly sophisticated operating demands. Construction, healthcare, professional services, technology and distribution businesses are growing here—often while competing with Greater Boston for leadership talent and specialized capabilities.\n\nFor an owner or CEO, the challenge is rarely a lack of commitment. It is creating enough leadership capacity, decision discipline and operating rhythm for the company to keep advancing without routing every important issue through one person.',
        details: [
          {_type: 'regionDetail', _key: 'base', label: 'Based in', value: 'Plymouth, Massachusetts'},
          {_type: 'regionDetail', _key: 'reach', label: 'Regional reach', value: 'Plymouth County and the South Shore'},
          {_type: 'regionDetail', _key: 'fit', label: 'Business fit', value: 'Established privately held and owner-led companies'},
        ],
      },
      situations: {
        eyebrow: 'When South Shore Leaders Call Us',
        title: 'The company has momentum. Its operating capacity needs to catch up.',
        introduction:
          'The conversation usually begins with a business situation—not a request for a particular advisory product.',
        items: [
          {
            _type: 'situation',
            _key: 'owner-dependency',
            title: 'The owner remains the answer to too many questions.',
            body: 'A growing business still depends on one person to resolve priorities, customer issues and cross-functional decisions.',
          },
          {
            _type: 'situation',
            _key: 'leadership',
            title: 'Strong managers need to operate as one leadership team.',
            body: 'Functional leaders are capable, but priorities, decision rights and shared accountability remain unclear.',
          },
          {
            _type: 'situation',
            _key: 'growth',
            title: 'Regional growth is increasing complexity.',
            body: 'New customers, locations, services or employees have added more handoffs and decisions than the existing system can comfortably absorb.',
          },
          {
            _type: 'situation',
            _key: 'transition',
            title: 'The next chapter requires a more durable company.',
            body: 'Succession, a leadership change or a strategic investment requires the business to perform beyond the relationships and routines that built it.',
          },
        ],
      },
      supportAreas: {
        eyebrow: 'How Tidal Point Helps',
        title: 'Senior operating judgment, connected to practical progress.',
        introduction:
          'One experienced Operating Partner stays accountable for the relationship. Specialists are added only when a defined deliverable will move the business forward.',
        items: [
          {
            _type: 'supportArea',
            _key: 'direction',
            label: 'Direction',
            title: 'Clarify the few decisions that matter most.',
            body: 'Separate signal from noise, pressure-test assumptions and create a course the ownership and leadership team can support.',
          },
          {
            _type: 'supportArea',
            _key: 'leadership',
            label: 'Leadership',
            title: 'Create leverage around the owner and CEO.',
            body: 'Strengthen roles, decision rights and accountability so managers can lead more of the business with confidence.',
          },
          {
            _type: 'supportArea',
            _key: 'performance',
            label: 'Performance',
            title: 'Build an operating rhythm that holds up through growth.',
            body: 'Connect priorities to measures, meetings and follow-through without imposing a heavy consulting program.',
          },
        ],
      },
      businessProfile: {
        eyebrow: 'Built for South Shore Businesses',
        title: 'Local relationships. Increasing operating sophistication.',
        body:
          'South Shore companies often grow through reputation, customer intimacy and the judgment of a committed owner. The next stage asks them to preserve those advantages while developing deeper leadership capacity and more repeatable ways of operating.',
        industries: [
          'Business & professional services',
          'Construction & engineering',
          'Healthcare services',
          'Technology & research',
          'Distribution & logistics',
          'Specialty consumer businesses',
        ],
      },
      localProofPoints: [
        {
          _type: 'localProofPoint',
          _key: 'plymouth-base',
          title: 'Based in Plymouth',
          body: 'Tidal Point is based on the South Shore, making in-person working sessions practical when being in the room improves the work.',
        },
        {
          _type: 'localProofPoint',
          _key: 'regional-model',
          title: 'A model designed for established regional businesses',
          body: 'The work is personal, senior-led and calibrated to companies that need additional operating capacity without building another permanent executive role.',
        },
      ],
      relatedArticles: await relatedArticles([
        {slug: 'why-your-business-still-runs-through-you', key: 'owner-dependency'},
        {
          slug: 'your-managers-are-capable-why-isnt-the-leadership-team-working',
          key: 'leadership-team',
        },
        {slug: 'signs-business-outgrown-operating-system', key: 'operating-system'},
      ]),
      cta: sharedCta,
      seoTitle: 'Operating Partner in Plymouth & the South Shore',
      metaDescription:
        'Experienced Operating Partner support for privately held businesses in Plymouth and across the South Shore navigating growth, leadership and transition.',
      canonicalUrl: 'https://tidalpointpartners.com/locations/plymouth-south-shore',
      noIndex: false,
    },
    {
      _id: 'location-cape-cod',
      _type: 'locationPage',
      title: 'Cape Cod',
      slug: {_type: 'slug', current: 'cape-cod'},
      regionName: 'Cape Cod',
      primarySearchPhrase: 'business operating advisor for privately held companies on Cape Cod',
      areasServed: ['Barnstable', 'Hyannis', 'Falmouth', 'Bourne', 'Sandwich', 'Mashpee', 'Yarmouth'],
      regionalIndustries: [
        'Healthcare services',
        'Construction & skilled trades',
        'Business & professional services',
        'Hospitality & visitor services',
        'Marine businesses',
        'Specialty consumer businesses',
      ],
      heroEyebrow: 'Operating Partner Support on Cape Cod',
      heroTitle: 'Build a stronger year-round business on Cape Cod.',
      heroIntroduction:
        'Tidal Point works alongside Cape Cod owners and leadership teams when seasonality, workforce constraints, growth or transition has made the business more difficult to lead through existing routines alone.',
      regionalContext: {
        eyebrow: 'A Cape Cod Operating Perspective',
        title: 'A distinctive economy creates a distinctive set of leadership decisions.',
        body:
          'Cape Cod businesses operate within conditions that are difficult to separate: seasonal demand, workforce availability, housing constraints, infrastructure limitations and a customer base that can change dramatically throughout the year. Even companies that are not directly tied to tourism feel the effects.\n\nFor established healthcare, construction, professional-service, marine and consumer businesses, resilience depends on more than managing the busy season. It requires deliberate choices about leadership capacity, year-round economics, talent, service mix and where the company should invest next.',
        details: [
          {_type: 'regionDetail', _key: 'reach', label: 'Serving', value: 'Upper and Mid Cape communities'},
          {_type: 'regionDetail', _key: 'conditions', label: 'Operating context', value: 'Seasonality, workforce constraints and year-round resilience'},
          {_type: 'regionDetail', _key: 'fit', label: 'Business fit', value: 'Established privately held and owner-led companies'},
        ],
      },
      situations: {
        eyebrow: 'When Cape Cod Leaders Call Us',
        title: 'The business needs to perform across seasons—and beyond the owner.',
        introduction:
          'Cape businesses often reach a point where informal coordination and personal oversight can no longer carry the full operating load.',
        items: [
          {
            _type: 'situation',
            _key: 'seasonality',
            title: 'Seasonal demand is obscuring year-round performance.',
            body: 'The leadership team needs a clearer view of capacity, cash, staffing and the economics of the full operating cycle.',
          },
          {
            _type: 'situation',
            _key: 'workforce',
            title: 'Workforce constraints are shaping strategy.',
            body: 'Growth plans, service levels and management structure must reflect the talent the business can realistically attract, develop and retain.',
          },
          {
            _type: 'situation',
            _key: 'dependency',
            title: 'The owner is still carrying too much institutional knowledge.',
            body: 'Customer relationships, pricing judgment and operating exceptions remain concentrated in one person, limiting resilience and succession options.',
          },
          {
            _type: 'situation',
            _key: 'investment',
            title: 'A major investment needs a sharper operating case.',
            body: 'A facility, acquisition, new service or geographic expansion must work through seasonal variability and execution—not only on a spreadsheet.',
          },
        ],
      },
      supportAreas: {
        eyebrow: 'How Tidal Point Helps',
        title: 'Make the business more resilient without making it more bureaucratic.',
        introduction:
          'The partnership combines an experienced operating perspective with focused support for the decisions and capabilities that matter now.',
        items: [
          {
            _type: 'supportArea',
            _key: 'direction',
            label: 'Direction',
            title: 'Choose where the business should concentrate.',
            body: 'Clarify customer, service and investment priorities using a realistic view of the region’s operating conditions.',
          },
          {
            _type: 'supportArea',
            _key: 'leadership',
            label: 'Leadership',
            title: 'Distribute judgment beyond the owner.',
            body: 'Develop clearer roles, stronger managers and decision practices that hold up during both peak demand and the quieter months.',
          },
          {
            _type: 'supportArea',
            _key: 'performance',
            label: 'Performance',
            title: 'Manage the whole operating cycle.',
            body: 'Connect plans to capacity, staffing, cash and a cadence that gives leaders an earlier view of what is changing.',
          },
        ],
      },
      businessProfile: {
        eyebrow: 'Built for Cape Cod Businesses',
        title: 'More varied—and more sophisticated—than the visitor economy suggests.',
        body:
          'Cape Cod supports substantial year-round healthcare, construction, professional-service, marine and consumer businesses. Many are locally owned, relationship driven and deeply connected to their communities. Their next stage requires operating systems that respect that character while building greater resilience.',
        industries: [
          'Healthcare services',
          'Construction & skilled trades',
          'Business & professional services',
          'Hospitality & visitor services',
          'Marine businesses',
          'Specialty consumer businesses',
        ],
      },
      localProofPoints: [
        {
          _type: 'localProofPoint',
          _key: 'proximity',
          title: 'Close enough for the work to remain personal',
          body: 'With a base in Plymouth, Tidal Point can work in person with Cape leadership teams when the conversation benefits from direct access and operating context.',
        },
        {
          _type: 'localProofPoint',
          _key: 'regional-context',
          title: 'Built around Cape operating realities',
          body: 'The page and working model address year-round resilience, seasonality, workforce capacity and ownership transition rather than applying a generic regional label.',
        },
      ],
      relatedArticles: await relatedArticles([
        {slug: 'growth-has-stalled-sales-problem-or-market-problem', key: 'growth'},
        {slug: 'signs-business-outgrown-operating-system', key: 'operating-system'},
        {slug: 'why-your-business-still-runs-through-you', key: 'owner-dependency'},
      ]),
      cta: sharedCta,
      seoTitle: 'Business Operating Advisor on Cape Cod',
      metaDescription:
        'Experienced operating support for privately held Cape Cod businesses navigating seasonality, workforce constraints, growth, leadership and transition.',
      canonicalUrl: 'https://tidalpointpartners.com/locations/cape-cod',
      noIndex: false,
    },
    {
      _id: 'location-south-coast-massachusetts',
      _type: 'locationPage',
      title: 'South Coast Massachusetts',
      slug: {_type: 'slug', current: 'south-coast-massachusetts'},
      regionName: 'South Coast Massachusetts',
      primarySearchPhrase:
        'operating partner for privately held businesses in South Coast Massachusetts',
      areasServed: ['New Bedford', 'Fall River', 'Dartmouth', 'Westport', 'Fairhaven', 'Wareham'],
      regionalIndustries: [
        'Advanced & specialty manufacturing',
        'Maritime & blue economy',
        'Food processing & distribution',
        'Healthcare & human services',
        'Engineering & construction',
        'Distribution & logistics',
      ],
      heroEyebrow: 'Operating Partner Support on the South Coast',
      heroTitle: 'Operating experience for businesses that make, move and deliver.',
      heroIntroduction:
        'Tidal Point works alongside owners and leadership teams across New Bedford, Fall River and the South Coast when investment, growth or leadership transition requires stronger decisions and greater operating capacity.',
      regionalContext: {
        eyebrow: 'A South Coast Operating Perspective',
        title: 'Industrial depth, practical ingenuity and a new cycle of investment.',
        body:
          'The South Coast’s economy is shaped by businesses that produce tangible value: manufacturers, maritime companies, food processors, distributors, healthcare organizations and skilled service providers. Many combine generations of operating knowledge with new technology, changing markets and significant capital requirements.\n\nThat combination creates consequential choices. Leaders must decide what to modernize, where to invest, which capabilities to build and how to preserve the judgment embedded in experienced people while preparing the next generation to lead.',
        details: [
          {_type: 'regionDetail', _key: 'reach', label: 'Serving', value: 'New Bedford, Fall River and surrounding South Coast communities'},
          {_type: 'regionDetail', _key: 'context', label: 'Operating context', value: 'Industrial, maritime, healthcare and service businesses'},
          {_type: 'regionDetail', _key: 'fit', label: 'Business fit', value: 'Established privately held and owner-led companies'},
        ],
      },
      situations: {
        eyebrow: 'When South Coast Leaders Call Us',
        title: 'The next investment changes more than the equipment.',
        introduction:
          'Growth and modernization expose decisions about leadership, process, customers and capital that cannot be solved in isolation.',
        items: [
          {
            _type: 'situation',
            _key: 'capital',
            title: 'A capital investment needs to produce operating leverage.',
            body: 'New equipment, facilities or systems must be matched by process discipline, talent and a commercial case that holds up after implementation.',
          },
          {
            _type: 'situation',
            _key: 'knowledge',
            title: 'Critical knowledge is concentrated in a few experienced people.',
            body: 'The company needs to transfer judgment and strengthen management without losing the practical expertise that customers depend on.',
          },
          {
            _type: 'situation',
            _key: 'markets',
            title: 'The business is deciding where its capabilities can travel next.',
            body: 'A new customer segment, service line or adjacent market requires a grounded view of differentiation, capacity and execution risk.',
          },
          {
            _type: 'situation',
            _key: 'leadership',
            title: 'The management structure has not kept pace with complexity.',
            body: 'Functional leaders need clearer priorities, stronger cross-functional decisions and shared accountability for enterprise performance.',
          },
        ],
      },
      supportAreas: {
        eyebrow: 'How Tidal Point Helps',
        title: 'Connect strategic choices to the realities of execution.',
        introduction:
          'The Operating Partner remains the accountable senior relationship, with specialist support added for defined work when it creates real leverage.',
        items: [
          {
            _type: 'supportArea',
            _key: 'direction',
            label: 'Direction',
            title: 'Build confidence in the investment thesis.',
            body: 'Pressure-test the customer, capacity, capital and organizational assumptions behind the next strategic move.',
          },
          {
            _type: 'supportArea',
            _key: 'leadership',
            label: 'Leadership',
            title: 'Carry operating knowledge into the next generation.',
            body: 'Clarify roles, strengthen managers and develop decision practices that reduce dependence on a handful of people.',
          },
          {
            _type: 'supportArea',
            _key: 'performance',
            label: 'Performance',
            title: 'Make improvement visible and sustainable.',
            body: 'Translate priorities into measures, an operating cadence and specific accountability without turning the work into a consulting program.',
          },
        ],
      },
      businessProfile: {
        eyebrow: 'Built for South Coast Businesses',
        title: 'Legacy capability meeting new opportunity.',
        body:
          'The South Coast combines long-standing strength in manufacturing, maritime work, food processing and healthcare with emerging investment in advanced production and the blue economy. The strongest businesses will connect that practical heritage to clearer strategy, deeper leadership and disciplined execution.',
        industries: [
          'Advanced & specialty manufacturing',
          'Maritime & blue economy',
          'Food processing & distribution',
          'Healthcare & human services',
          'Engineering & construction',
          'Distribution & logistics',
        ],
      },
      localProofPoints: [
        {
          _type: 'localProofPoint',
          _key: 'regional-access',
          title: 'Direct access from a Southeastern Massachusetts base',
          body: 'Tidal Point’s Plymouth base makes it practical to stay close to leadership teams across the South Coast throughout a consequential period of work.',
        },
        {
          _type: 'localProofPoint',
          _key: 'operator-lens',
          title: 'An operator’s lens on capital, leadership and growth',
          body: 'The work connects strategic judgment to the people, processes and operating economics required to make an investment perform.',
        },
      ],
      relatedArticles: await relatedArticles([
        {slug: 'signs-business-outgrown-operating-system', key: 'operating-system'},
        {
          slug: 'your-managers-are-capable-why-isnt-the-leadership-team-working',
          key: 'leadership-team',
        },
        {slug: 'growth-has-stalled-sales-problem-or-market-problem', key: 'growth'},
      ]),
      cta: sharedCta,
      seoTitle: 'Operating Partner in South Coast Massachusetts',
      metaDescription:
        'Experienced Operating Partner support for privately held businesses in New Bedford, Fall River and South Coast Massachusetts navigating growth and change.',
      canonicalUrl: 'https://tidalpointpartners.com/locations/south-coast-massachusetts',
      noIndex: false,
    },
  ]
}

async function seed() {
  const documents = await pages()
  const transaction = client.transaction()

  for (const document of documents) transaction.createOrReplace(document)

  await transaction.commit()
  console.log(`Published ${documents.length} indexable subregional location pages.`)
}

seed().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
