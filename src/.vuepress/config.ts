import { defineUserConfig } from "vuepress";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: 'VoiceHub-文档',
  description: 'Docs of VoiceHub',

  theme,
  
  plugins: [
    slimsearchPlugin({
      // 配置项
    }),
  ],
});
