import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-04'})

const id = 'location-southeastern-new-england'

const patch = {
  heroTitle: 'Operating partnership across Southeastern New England.',
  heroIntroduction:
    'Based in Plymouth, Tidal Point works alongside owners and leadership teams from the South Shore and Cape Cod to the South Coast and Rhode Island when growth, change or transition raises the consequence of every decision.',
  regionalContext: {
    eyebrow: 'A Regional Operating Perspective',
    title: 'Distinct local economies. Familiar leadership inflection points.',
    body: 'Southeastern New England is not one uniform market. The South Shore, Cape Cod, South Coast and Rhode Island each create different conditions for customers, talent, capital and growth.\n\nAcross those markets, established privately held businesses often reach the same pivotal moments: the company has outgrown owner-led coordination, the leadership team needs greater capacity, or the next investment carries more consequence than the existing operating model can absorb.',
    details: [
      {_type: 'regionDetail', _key: 'base', label: 'Based in', value: 'Plymouth, Massachusetts'},
      {
        _type: 'regionDetail',
        _key: 'region',
        label: 'Regional reach',
        value: 'South Shore, Cape Cod, South Coast and Rhode Island',
      },
      {
        _type: 'regionDetail',
        _key: 'businesses',
        label: 'Business fit',
        value: 'Established privately held and owner-led companies',
      },
    ],
  },
  situations: {
    eyebrow: 'Across the Region',
    title: 'Different markets. A familiar set of operating pressures.',
    introduction:
      'Industry and geography shape the details, but the underlying leadership questions are often remarkably consistent.',
    items: [
      {
        _type: 'situation',
        _key: 'growth',
        title: 'Growth has increased complexity faster than the business has adapted.',
        body: 'Decision-making, accountability and operating rhythm have not kept pace with a larger and more demanding company.',
      },
      {
        _type: 'situation',
        _key: 'dependency',
        title: 'Too much of the business still runs through one person.',
        body: 'The owner or CEO remains the center of gravity, constraining leadership capacity and the company’s next chapter.',
      },
      {
        _type: 'situation',
        _key: 'leadership',
        title: 'Capable managers need to operate as one leadership team.',
        body: 'Strong individual managers need clearer priorities, shared accountability and a better way to make decisions together.',
      },
      {
        _type: 'situation',
        _key: 'investment',
        title: 'The next investment requires greater operating confidence.',
        body: 'A new service line, facility, system, acquisition or market move must hold up through execution—not only on a spreadsheet.',
      },
    ],
  },
  businessProfile: {
    eyebrow: 'A Region Built by Established Businesses',
    title: 'Local roots. Real operating complexity.',
    body: 'The region supports manufacturers, distributors, healthcare organizations, professional-service firms, builders and specialty consumer businesses with deep customer and community relationships. Tidal Point helps their leaders preserve those advantages while building the management capacity and operating discipline required for the next chapter.',
    industries: [
      'Manufacturing',
      'Distribution & logistics',
      'Business services',
      'Healthcare services',
      'Engineering & construction',
      'Specialty consumer products',
    ],
  },
  seoTitle: 'Operating Partner in Southeastern New England',
  metaDescription:
    'Operating Partner support for established privately held businesses across the South Shore, Cape Cod, South Coast and Rhode Island.',
}

const existing = await client.getDocument(id)
if (!existing) throw new Error(`Could not find ${id}`)

const result = await client.patch(id).set(patch).commit()
console.log(`Updated ${result._id} at ${result._updatedAt}`)
