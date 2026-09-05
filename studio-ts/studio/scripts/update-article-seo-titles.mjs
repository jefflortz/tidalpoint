import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-04'})

const updates = [
  {
    id: 'article-growth-has-stalled',
    seoTitle: 'Sales Problem or Market Problem?',
  },
  {
    id: 'd907c871-8e78-492a-afda-95af1003c244',
    seoTitle: '7 Signs Your Operating System Is Outgrown',
  },
  {
    id: 'content-intake-f7de4f8ed3ad3ad28b6c3e345cd9b24d',
    seoTitle: 'What a Scaled Operating System Needs',
  },
  {
    id: 'article-why-your-business-still-runs-through-you',
    seoTitle: 'Owner Dependency: Build Beyond You',
  },
  {
    id: 'article-your-managers-are-capable',
    seoTitle: 'Why Capable Management Teams Struggle',
  },
]

let transaction = client.transaction()

for (const {id, seoTitle} of updates) {
  transaction = transaction.patch(id, (patch) => patch.set({seoTitle}))
}

await transaction.commit()

console.log(`Updated SEO titles for ${updates.length} articles.`)
