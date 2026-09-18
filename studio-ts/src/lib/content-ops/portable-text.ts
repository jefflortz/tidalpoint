import {randomUUID} from 'node:crypto'
import type {EditorialOutput, UploadedSourceImage} from './types'

const key = () => randomUUID().replaceAll('-', '').slice(0, 12)

function textBlock(style: 'normal' | 'h2' | 'h3' | 'blockquote', text: string) {
  return {
    _type: 'block',
    _key: key(),
    style,
    markDefs: [],
    children: [{_type: 'span', _key: key(), text, marks: []}],
  }
}

function internalLinkBlock(title: string, href: string) {
  const markKey = key()
  return {
    _type: 'block', _key: key(), style: 'normal',
    markDefs: [{_type: 'link', _key: markKey, href, blank: false}],
    children: [
      {_type: 'span', _key: key(), text: 'For the broader operating context, read ', marks: []},
      {_type: 'span', _key: key(), text: title, marks: [markKey]},
      {_type: 'span', _key: key(), text: '.', marks: []},
    ],
  }
}

export function sectionsToPortableText(
  sections: EditorialOutput['sections'],
  images: UploadedSourceImage[] = [],
  pillarLink?: {title: string; href: string},
) {
  const blocks: Array<Record<string, unknown>> = []
  let introductoryParagraphs = 0
  let pillarLinkAdded = false
  for (const section of sections) {
    if (section.type === 'callout') {
      blocks.push({_type: 'callout', _key: key(), eyebrow: 'Operating observation', body: section.text})
      continue
    }
    if (section.type === 'diagnostic') {
      blocks.push({_type: 'diagnostic', _key: key(), title: section.text || 'Questions to consider', questions: section.items})
      continue
    }
    if (section.type === 'figure') {
      const image = images[section.imageIndex]
      if (image) {
        blocks.push({
          _type: 'figure', _key: key(), asset: {_type: 'reference', _ref: image.assetId},
          alt: image.alt, caption: image.caption ?? image.attribution,
        })
      }
      continue
    }
    const style = section.type === 'paragraph' ? 'normal' : section.type === 'quote' ? 'blockquote' : section.type
    blocks.push(textBlock(style, section.text))
    if (section.type === 'paragraph') introductoryParagraphs += 1
    if (pillarLink && !pillarLinkAdded && introductoryParagraphs === 2) {
      blocks.push(internalLinkBlock(pillarLink.title, pillarLink.href))
      pillarLinkAdded = true
    }
  }
  if (pillarLink && !pillarLinkAdded) blocks.push(internalLinkBlock(pillarLink.title, pillarLink.href))
  return blocks
}
