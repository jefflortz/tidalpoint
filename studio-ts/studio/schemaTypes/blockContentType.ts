import {defineArrayMember, defineField, defineType} from 'sanity'

export const blockContentType = defineType({
  name: 'blockContent',
  title: 'Article body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
              defineField({name: 'href', title: 'URL', type: 'url', validation: (rule) => rule.required().uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']})}),
              defineField({name: 'blank', title: 'Open in new tab', type: 'boolean', initialValue: false}),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      name: 'figure',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
      ],
    }),
    defineArrayMember({
      name: 'callout',
      title: 'Operating observation',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'Operating observation'}),
        defineField({name: 'body', title: 'Observation', type: 'text', rows: 4, validation: (rule) => rule.required()}),
      ],
      preview: {select: {title: 'eyebrow', subtitle: 'body'}},
    }),
    defineArrayMember({
      name: 'diagnostic',
      title: 'Diagnostic questions',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string', initialValue: 'Questions to consider'}),
        defineField({name: 'questions', title: 'Questions', type: 'array', of: [{type: 'string'}]}),
      ],
      preview: {select: {title: 'title'}},
    }),
  ],
})
