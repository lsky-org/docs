import {defineConfig} from "vitepress";
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  rewrites: {
    'zh/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },

    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch,
        }
      }
    },
  }
})