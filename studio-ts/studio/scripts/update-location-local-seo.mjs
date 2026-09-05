import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-04'})

async function update() {
  await client
    .patch('location-southeastern-new-england')
    .set({
      primarySearchPhrase:
        'operating partner for privately held businesses in Southeastern New England',
      areasServed: [
        'Plymouth',
        'South Shore',
        'South Coast',
        'Cape Cod',
        'Massachusetts',
        'Rhode Island',
      ],
      regionalIndustries: [
        'Manufacturing',
        'Distribution & logistics',
        'Business services',
        'Healthcare services',
        'Engineering & construction',
        'Specialty consumer products',
      ],
      localProofPoints: [
        {
          _type: 'localProofPoint',
          _key: 'regional-base',
          title: 'Based in Plymouth, Massachusetts',
          body:
            'Tidal Point is based in the region and works with leadership teams in person when proximity improves the conversation and the work.',
        },
        {
          _type: 'localProofPoint',
          _key: 'regional-reach',
          title: 'Built to serve Southeastern New England',
          body:
            'The practice serves established privately held businesses across the South Shore, South Coast, Cape Cod, Massachusetts and Rhode Island.',
        },
      ],
    })
    .commit()

  console.log('Updated local SEO fields for the Southeastern New England location page.')
}

update().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
