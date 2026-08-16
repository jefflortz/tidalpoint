import {defineDocuments, defineLocations} from 'sanity/presentation'

export const mainDocuments = defineDocuments([
  {
    route: '/articles/:slug',
    filter: `_type == "article" && slug.current == $slug`,
  },
])

export const locations = {
  article: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (document) => ({
      locations: document?.slug
        ? [
            {
              title: document.title || 'Untitled article',
              href: `/articles/${document.slug}`,
            },
            {title: 'All articles', href: '/articles'},
          ]
        : [{title: 'All articles', href: '/articles'}],
    }),
  }),
}
