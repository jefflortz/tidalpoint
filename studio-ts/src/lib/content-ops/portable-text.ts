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

export function sectionsToPortableText(sections: EditorialOutput['sections'], images: UploadedSourceImage[] = []) {
  const blocks: Array<Record<string, unknown>> = []
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
  }
  return blocks
}
