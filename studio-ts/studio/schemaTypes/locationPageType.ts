import {defineArrayMember, defineField, defineType} from 'sanity'

export const locationPageType = defineType({
  name: 'locationPage',
  title: 'Location page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'relationships', title: 'Relationships'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Internal page name',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'regionName',
      title: 'Region name',
      type: 'string',
      group: 'content',
      description: 'The reader-facing geographic name, such as Southeastern New England.',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string', group: 'content'}),
    defineField({
      name: 'heroTitle',
      title: 'Page heading',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'heroIntroduction',
      title: 'Hero introduction',
      type: 'text',
      rows: 4,
      group: 'content',
      validation: (rule) => rule.required().max(360),
    }),
    defineField({
      name: 'regionalContext',
      title: 'Regional context',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'body', title: 'Body', type: 'text', rows: 7, validation: (rule) => rule.required()}),
        defineField({
          name: 'details',
          title: 'Region details',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'regionDetail',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required()}),
              ],
              preview: {select: {title: 'label', subtitle: 'value'}},
            }),
          ],
          validation: (rule) => rule.max(4),
        }),
      ],
    }),
    defineField({
      name: 'situations',
      title: 'Situations',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'introduction', title: 'Introduction', type: 'text', rows: 3}),
        defineField({
          name: 'items',
          title: 'Situation cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'situation',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'body', title: 'Body', type: 'text', rows: 3, validation: (rule) => rule.required()}),
              ],
              preview: {select: {title: 'title', subtitle: 'body'}},
            }),
          ],
          validation: (rule) => rule.required().min(3).max(6),
        }),
      ],
    }),
    defineField({
      name: 'supportAreas',
      title: 'Support areas',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'introduction', title: 'Introduction', type: 'text', rows: 3}),
        defineField({
          name: 'items',
          title: 'Support-area cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'supportArea',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'body', title: 'Body', type: 'text', rows: 4, validation: (rule) => rule.required()}),
              ],
              preview: {select: {title: 'title', subtitle: 'label'}},
            }),
          ],
          validation: (rule) => rule.required().min(3).max(3),
        }),
      ],
    }),
    defineField({
      name: 'businessProfile',
      title: 'Regional business profile',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'body', title: 'Body', type: 'text', rows: 5, validation: (rule) => rule.required()}),
        defineField({name: 'industries', title: 'Representative industries', type: 'array', of: [{type: 'string'}]}),
      ],
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related perspectives',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
      group: 'relationships',
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'cta',
      title: 'Closing CTA',
      type: 'object',
      group: 'content',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'body', title: 'Body', type: 'text', rows: 3}),
        defineField({name: 'buttonLabel', title: 'Button label', type: 'string'}),
        defineField({name: 'buttonHref', title: 'Button URL', type: 'string'}),
      ],
    }),
    defineField({name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo', validation: (rule) => rule.max(65)}),
    defineField({name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, group: 'seo', validation: (rule) => rule.max(170)}),
    defineField({name: 'canonicalUrl', title: 'Canonical URL override', type: 'url', group: 'seo'}),
    defineField({name: 'socialImage', title: 'Social image', type: 'image', options: {hotspot: true}, group: 'seo'}),
    defineField({name: 'noIndex', title: 'Exclude from search engines', type: 'boolean', initialValue: false, group: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'regionName'},
  },
})
