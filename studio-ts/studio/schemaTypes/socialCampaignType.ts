import {defineArrayMember, defineField, defineType} from 'sanity'

export const socialCampaignType = defineType({
  name: 'socialCampaign',
  title: 'Social campaign',
  description: 'Generated social posts for human review, approval, and scheduling after an article is published.',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'workflow', title: 'Workflow'},
  ],
  fields: [
    defineField({name: 'title', title: 'Campaign title', type: 'string', group: 'content', validation: (rule) => rule.required()}),
    defineField({name: 'article', title: 'Published article', type: 'reference', to: [{type: 'article'}], group: 'content', validation: (rule) => rule.required()}),
    defineField({name: 'articleRevision', title: 'Generated from revision', type: 'string', group: 'workflow', readOnly: true}),
    defineField({name: 'generatedAt', title: 'Generated at', type: 'datetime', group: 'workflow', readOnly: true}),
    defineField({
      name: 'reviewStatus',
      title: 'Review status',
      type: 'string',
      group: 'workflow',
      initialValue: 'needsReview',
      options: {layout: 'radio', list: [
        {title: 'Needs review', value: 'needsReview'},
        {title: 'Approved', value: 'approved'},
        {title: 'Scheduled', value: 'scheduled'},
      ]},
    }),
    defineField({
      name: 'assets',
      title: 'Social assets',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({
        type: 'object',
        name: 'socialAsset',
        fields: [
          defineField({name: 'channel', title: 'Channel', type: 'string', options: {list: [
            {title: 'Jeff LinkedIn', value: 'linkedinPersonal'},
            {title: 'Tidal Point LinkedIn', value: 'linkedinCompany'},
            {title: 'Facebook', value: 'facebook'},
            {title: 'Instagram', value: 'instagram'},
            {title: 'Short form', value: 'shortForm'},
            {title: 'Newsletter', value: 'newsletter'},
            {title: 'Carousel', value: 'carousel'},
          ]}, validation: (rule) => rule.required()}),
          defineField({name: 'angle', title: 'Angle', type: 'string'}),
          defineField({name: 'copy', title: 'Post copy', type: 'text', rows: 10, validation: (rule) => rule.required()}),
          defineField({name: 'status', title: 'Status', type: 'string', initialValue: 'draft', options: {list: ['draft', 'approved', 'scheduled', 'published']}}),
          defineField({name: 'scheduledAt', title: 'Scheduled for', type: 'datetime'}),
          defineField({name: 'bufferPostId', title: 'Buffer post ID', type: 'string', readOnly: true}),
          defineField({name: 'bufferSyncedAt', title: 'Last synced with Buffer', type: 'datetime', readOnly: true}),
          defineField({name: 'bufferError', title: 'Buffer delivery error', type: 'text', readOnly: true}),
        ],
        preview: {
          select: {channel: 'channel', angle: 'angle'},
          prepare: ({channel, angle}) => ({
            title: ({
              linkedinPersonal: 'Jeff LinkedIn',
              linkedinCompany: 'Tidal Point LinkedIn',
              facebook: 'Facebook',
              instagram: 'Instagram',
              shortForm: 'Short-form social post',
              newsletter: 'Newsletter copy',
              carousel: 'Carousel post',
            } as Record<string, string>)[channel] ?? channel,
            subtitle: angle,
          }),
        },
      })],
    }),
    defineField({name: 'carouselBrief', title: 'Carousel brief', type: 'array', group: 'content', of: [{type: 'string'}]}),
    defineField({name: 'pullQuote', title: 'Pull quote', type: 'text', rows: 3, group: 'content'}),
  ],
  preview: {
    select: {title: 'title', reviewStatus: 'reviewStatus'},
    prepare: ({title, reviewStatus}) => ({
      title,
      subtitle: reviewStatus === 'needsReview' ? 'Needs review' : reviewStatus,
    }),
  },
})
