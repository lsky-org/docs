import {defineConfig} from "vitepress";
import { search as zhSearch } from './zh'
import {withMermaid} from "vitepress-plugin-mermaid";

export const shared = withMermaid({
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid", // set additional css classes for parent container
  },

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