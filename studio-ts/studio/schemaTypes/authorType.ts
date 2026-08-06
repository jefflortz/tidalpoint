import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Profile slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'role', title: 'Role', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required()}),
      ],
    }),
    defineField({name: 'shortBio', title: 'Short biography', type: 'text', rows: 4}),
    defineField({name: 'profileUrl', title: 'Website profile URL', type: 'url'}),
    defineField({name: 'linkedInUrl', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'expertise', title: 'Areas of expertise', type: 'array', of: [{type: 'string'}]}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'portrait'},
  },
})
