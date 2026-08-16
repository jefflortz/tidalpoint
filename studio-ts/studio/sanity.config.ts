import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {locations, mainDocuments} from './presentation'

const defaultPreviewOrigin =
  process.env.NODE_ENV === 'production' ? 'https://tidalpointpartners.com' : 'http://localhost:3000'
const previewOrigin = (process.env.SANITY_STUDIO_PREVIEW_URL || defaultPreviewOrigin).replace(/\/$/, '')

export default defineConfig({
  name: 'default',
  title: 'Tidal Point Partners',

  projectId: '5w70fpy3',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        initial: `${previewOrigin}/articles`,
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
      allowOrigins: ['http://localhost:*', 'https://tidalpointpartners.com', previewOrigin],
      resolve: {mainDocuments, locations},
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
