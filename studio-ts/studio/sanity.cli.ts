import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'tidal-point-partners',
  api: {
    projectId: '5w70fpy3',
    dataset: 'production'
  },
  deployment: {
    appId: 'lqo0p4nwc4vgngi5zpxfap5g',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
