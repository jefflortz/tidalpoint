import fs from 'node:fs'
import path from 'node:path'
import {execFileSync} from 'node:child_process'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-08-05'})
let keyIndex = 0
const key = () => `migrated${String(++keyIndex).padStart(4, '0')}`

function spansFromMarkdown(text) {
  const children = []
  const markDefs = []
  const tokenPattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g
  let cursor = 0

  for (const match of text.matchAll(tokenPattern)) {
    if (match.index > cursor) {
      children.push({_type: 'span', _key: key(), text: text.slice(cursor, match.index), marks: []})
    }

    const token = match[0]
    if (token.startsWith('**')) {
      children.push({_type: 'span', _key: key(), text: token.slice(2, -2), marks: ['strong']})
    } else if (token.startsWith('*')) {
      children.push({_type: 'span', _key: key(), text: token.slice(1, -1), marks: ['em']})
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      const markKey = key()
      markDefs.push({_type: 'link', _key: markKey, href: link[2], blank: link[2].startsWith('http')})
      children.push({_type: 'span', _key: key(), text: link[1], marks: [markKey]})
    }
    cursor = match.index + token.length
  }

  if (cursor < text.length) {
    children.push({_type: 'span', _key: key(), text: text.slice(cursor), marks: []})
  }

  return {children, markDefs}
}

function markdownToBlocks(markdown) {
  const chunks = markdown
    .replace(/\r/g, '')
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)

  return chunks.flatMap((chunk) => {
    if (/^---+$/.test(chunk)) return []

    let style = 'normal'
    let text = chunk
    if (chunk.startsWith('### ')) {
      style = 'h3'
      text = chunk.slice(4)
    } else if (chunk.startsWith('## ')) {
      style = 'h2'
      text = chunk.slice(3)
    } else if (chunk.startsWith('> ')) {
      style = 'blockquote'
      text = chunk
        .split('\n')
        .map((line) => line.replace(/^> ?/, ''))
        .join('\n')
    }

    const {children, markDefs} = spansFromMarkdown(text.replace(/\n/g, ' '))
    return [{_type: 'block', _key: key(), style, markDefs, children}]
  })
}

const articlePath = path.resolve(
  process.cwd(),
  '../src/app/articles/why-your-business-still-runs-through-you/page.mdx',
)
const rawArticle = fs.existsSync(articlePath)
  ? fs.readFileSync(articlePath, 'utf8')
  : execFileSync(
      'git',
      ['show', 'HEAD:studio-ts/src/app/articles/why-your-business-still-runs-through-you/page.mdx'],
      {cwd: path.resolve(process.cwd(), '../..'), encoding: 'utf8'},
    )
let bodyMarkdown = rawArticle.slice(rawArticle.indexOf("You have good people."))
bodyMarkdown = bodyMarkdown.slice(0, bodyMarkdown.indexOf('## Sources & Further Reading'))
bodyMarkdown = bodyMarkdown
  .replace(
    /Research from the National Federation[\s\S]*?strategic work that actually moves the business forward\.\n\n/,
    '',
  )
  .replace(
    /A study published by Harvard Business Review[\s\S]*?within 90 days\.\n\n/,
    '',
  )
  .replace(
    'implemented in sequence over roughly 90 days.',
    'implemented in a deliberate sequence that the leadership team can sustain.',
  )
  .replace(
    /\n---\n\n\*If this describes[\s\S]*$/,
    '',
  )
  .replace(/\s+>\s+"Most business owners/, '\n\n> "Most business owners')
  .replace(/([.!?])\n(> )/g, '$1\n\n$2')

const author = {
  _id: 'author-jeff-lortz',
  _type: 'author',
  name: 'Jeff Lortz',
  slug: {_type: 'slug', current: 'jeff-lortz'},
  role: 'Founder & Operating Partner',
  shortBio:
    'Jeff is a former PE-backed CEO, senior operating executive and US Navy Surface Warfare Officer. He works alongside owners and leadership teams at pivotal moments in the life of a business.',
  profileUrl: 'https://tidalpointpartners.com/team/jeff-lortz',
  expertise: ['Operating leadership', 'Growth strategy', 'Leadership teams', 'Business transformation'],
}

const category = {
  _id: 'category-operations',
  _type: 'category',
  title: 'Operations',
  slug: {_type: 'slug', current: 'operations'},
  description: 'Practical operating systems, decision rights and leadership capacity.',
}

async function getOrUploadImage(filename, imagePath) {
  const existing = await client.fetch(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}',
    {filename},
  )
  if (existing?._id) return existing._id
  const asset = await client.assets.upload('image', fs.createReadStream(imagePath), {filename})
  return asset._id
}

async function seed() {
  const imagePath = path.resolve(
    process.cwd(),
    '../public/images/articles/why-your-business-still-runs-through-you.jpg',
  )
  const imageAssetId = await getOrUploadImage(
    'why-your-business-still-runs-through-you.jpg',
    imagePath,
  )

  const article = {
    _id: 'article-why-your-business-still-runs-through-you',
    _type: 'article',
    title: 'Why Your Business Still Runs Through You',
    slug: {_type: 'slug', current: 'why-your-business-still-runs-through-you'},
    description:
      "Owner dependency isn't a people problem. It's a structural one—and it's fixable. Here is what is actually causing it and what to do about it.",
    publishedAt: '2026-05-30T12:00:00.000Z',
    updatedAt: new Date().toISOString(),
    author: {_type: 'reference', _ref: author._id},
    category: {_type: 'reference', _ref: category._id},
    featured: true,
    featuredImage: {
      _type: 'image',
      asset: {_type: 'reference', _ref: imageAssetId},
      alt: 'A small leadership team working through a consequential business decision',
    },
    body: markdownToBlocks(bodyMarkdown),
    seoTitle: 'Why Your Business Still Runs Through You—and How to Reduce Owner Dependency',
    metaDescription:
      'Learn why owner dependency develops, how it limits a growing business and the operating structures that help leadership teams make decisions without the owner.',
    socialTitle: 'Why Your Business Still Runs Through You',
    socialDescription:
      'Owner dependency is rarely a people problem. It is usually a structural one—and structural problems can be fixed.',
    sources: [
      {
        _type: 'source',
        _key: key(),
        title: 'The Decision-Driven Organization',
        publisher: 'Marcia W. Blenko, Michael C. Mankins and Paul Rogers · Harvard Business Review',
        publishedAt: '2010-06-01',
      },
      {
        _type: 'source',
        _key: key(),
        title: 'The E-Myth Revisited',
        publisher: 'Michael E. Gerber · HarperCollins',
        publishedAt: '1995-01-01',
      },
      {
        _type: 'source',
        _key: key(),
        title: 'The Advantage',
        publisher: 'Patrick Lencioni · Jossey-Bass',
        publishedAt: '2012-01-01',
      },
    ],
    cta: {
      eyebrow: 'A useful next conversation',
      title: 'Does too much of the business still run through you?',
      body: 'We can look at where decisions are getting stuck and whether the right operating support would help.',
      buttonLabel: 'Start a conversation',
      buttonHref: '/contact',
    },
  }

  await client
    .transaction()
    .createOrReplace(author)
    .createOrReplace(category)
    .createOrReplace(article)
    .delete('article.why-your-business-still-runs-through-you')
    .delete('author.jeff-lortz')
    .delete('category.operations')
    .commit()
  console.log('Seeded Jeff Lortz, Operations, and the corrected owner-dependency article.')
}

seed().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
