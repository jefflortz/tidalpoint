import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-10-07'})

const documentId = 'location-plymouth-south-shore'

const audienceFit = [
  'An established privately held business has outgrown informal coordination.',
  'The owner and leadership team face a consequential growth, leadership or succession decision.',
  'The business needs experienced operating judgment that remains connected through execution.',
]

const regionalScenario = {
  eyebrow: 'A Representative South Shore Situation',
  title: 'A successful regional business has outgrown owner-led coordination.',
  body: 'Consider an established South Shore services or distribution business that has expanded its customer base, management team and geographic reach. Revenue has grown, but important decisions still return to the owner. Managers lead their functions well, yet priorities compete, handoffs remain informal and the annual plan is losing ground to the urgency of the week.\n\nThe answer is not another report. It is a clearer operating model: a small number of shared priorities, explicit decision rights, stronger management accountability and a cadence that keeps the leadership team focused on what advances the whole business.',
  outcomes: [
    'Fewer decisions defaulting to the owner',
    'Clearer priorities and decision rights',
    'A leadership cadence that turns plans into progress',
  ],
}

const faqs = [
  {
    _type: 'regionalFaq',
    _key: 'business-fit',
    question: 'What types of Plymouth and South Shore businesses does Tidal Point work with?',
    answer:
      'Tidal Point is built for established privately held businesses, typically with meaningful operating complexity and a leadership team already in place. The strongest fit is often a business navigating growth, owner dependency, leadership-team effectiveness, operational maturity or succession.',
  },
  {
    _type: 'regionalFaq',
    _key: 'operating-partner',
    question: 'How is an Operating Partner different from a traditional consultant?',
    answer:
      'A traditional consultant may diagnose an issue and deliver recommendations. An Operating Partner works alongside the owner and leadership team, helps make the consequential decisions and remains connected as those decisions become priorities, accountability and operating progress.',
  },
  {
    _type: 'regionalFaq',
    _key: 'onsite',
    question: 'Can the work include in-person sessions on the South Shore?',
    answer:
      'Yes. Tidal Point is based in Plymouth, and in-person working sessions are practical across Plymouth County and the South Shore when being in the room improves alignment, decision-making or follow-through. The relationship can combine onsite and virtual work.',
  },
  {
    _type: 'regionalFaq',
    _key: 'first-conversation',
    question: 'What happens in the introductory conversation?',
    answer:
      'The conversation begins with the business situation, its context and the questions carrying the most consequence. The goal is to create a useful shared perspective and determine together whether a continuing operating partnership would add value.',
  },
]

const result = await client
  .patch(documentId)
  .set({
    audienceFit,
    regionalScenario,
    faqs,
    seoTitle: 'Business Operating Advisor in Plymouth & the South Shore',
    metaDescription:
      'Operating Partner and business advisory support for privately held companies in Plymouth and the South Shore navigating growth, leadership and succession.',
  })
  .commit()

console.log(`Updated ${result._id} at ${result._updatedAt}`)
