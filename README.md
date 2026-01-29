# VoiceHub 文档

这是 [VoiceHub 智能点歌系统](https://github.com/laoshuikaixue/VoiceHub) 的官方文档仓库。

## 📖 关于 VoiceHub

VoiceHub 是一个现代化的智能点歌系统，支持多平台音乐搜索、智能排期管理，提供用户友好的界面设计。基于现代化技术栈构建，是一个稳定可靠的 Web 应用。

### 主要特性

- 🎵 **智能点歌**: 支持多平台音乐搜索和点歌
- 👥 **用户友好**: 直观的界面设计，简单易用
- 🏗️ **现代化架构**: 基于 Nuxt.js + Prisma + PostgreSQL

## 🚀 本地开发

### 环境要求

- Node.js 18.0 或更高版本
- pnpm

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
```

访问 [http://localhost:8080](http://localhost:8080) 查看文档站点。

### 构建生产版本

```bash
npm docs:build
```

## 📝 贡献指南

我们欢迎任何形式的贡献！

### 文档结构

```
docs/
├── getting-started/     # 快速开始
├── user-guide/         # 用户指南
├── admin-guide/        # 管理员指南
├── development/        # 开发指南
└── troubleshooting/    # 故障排除
```

### 编写规范

- 使用中文编写文档
- 遵循 Markdown 语法规范
- 添加适当的代码示例
- 保持文档结构清晰

## ## 🛠️ 技术栈
- [VuePress](https://v2.vuepress.vuejs.org/) - 文档站点生成器（2.0.0-rc.18）
- [Vue](https://vuejs.org/) - 前端底层框架（3.x）
- [Webpack](https://webpack.js.org/) - 模块打包/构建工具
- [pnpm](https://pnpm.io/) - 高效包管理工具
- [vuepress-theme-hope](https://theme-hope.vuejs.press/) - VuePress增强主题
- [vuepress-plugin-search-pro](https://plugin-search-pro.vuejs.press/) - 文档高级搜索插件
- [Sass](https://sass-lang.com/) - CSS预处理器（sass-embedded）
- [MathJax](https://www.mathjax.org/) - 专业数学公式渲染库
- [Reveal.js](https://revealjs.com/) - 交互式幻灯片（VuePress插件集成）

## 📄 许可证

本项目基于 [GPL-3.0 许可证](../LICENSE) 开源。

## 🔗 相关链接

- [VoiceHub 主项目](https://github.com/laoshuikaixue/VoiceHub)
- [演示站点](https://voicehub.lao-shui.top)
- [问题反馈](https://github.com/laoshuikaixue/VoiceHub/issues)
