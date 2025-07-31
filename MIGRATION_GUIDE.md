# VoiceHub 文档迁移指南

本指南说明如何将 VoiceHub 文档从主仓库迁移到独立的 `voicehub-docs` 仓库。

## 迁移步骤

### 1. 创建新仓库
在 GitHub 上创建名为 `voicehub-docs` 的新仓库。

### 2. 复制文档内容
将以下文件和目录复制到新仓库：

```
docs/
├── .gitignore
├── README.md
├── docs/                    # 文档内容
├── docusaurus.config.ts     # Docusaurus 配置
├── package.json             # 依赖配置
├── sidebars.ts              # 侧边栏配置
├── src/                     # 源代码
├── static/                  # 静态资源
└── tsconfig.json            # TypeScript 配置
```

### 3. 更新配置文件

#### 更新 package.json
```json
{
  "name": "voicehub-docs",
  "version": "1.0.0",
  "description": "VoiceHub 智能点歌系统文档",
  "repository": {
    "type": "git",
    "url": "https://github.com/laoshuikaixue/voicehub-docs.git"
  },
  "homepage": "https://voicehub.lao-shui.top",
  "private": false,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@docusaurus/core": "3.8.1",
    "@docusaurus/preset-classic": "3.8.1",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "3.8.1",
    "@docusaurus/tsconfig": "3.8.1",
    "@docusaurus/types": "3.8.1",
    "typescript": "~5.6.2"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  "engines": {
    "node": ">=18.0"
  }
}
```

#### 更新 docusaurus.config.ts
```typescript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VoiceHub',
  tagline: '智能点歌系统 - 让音乐连接每一个人',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://voicehub.lao-shui.top',
  baseUrl: '/',

  // 更新为新的文档仓库
  organizationName: 'laoshuikaixue',
  projectName: 'voicehub-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 更新编辑链接到新仓库
          editUrl: 'https://github.com/laoshuikaixue/voicehub-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'VoiceHub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/laoshuikaixue/VoiceHub',
          label: '主项目',
          position: 'right',
        },
        {
          href: 'https://github.com/laoshuikaixue/voicehub-docs',
          label: '文档源码',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} VoiceHub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

### 4. 添加部署配置

#### GitHub Actions 部署 (.github/workflows/deploy.yml)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

#### Vercel 部署配置 (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installCommand": "npm install"
}
```

### 5. 更新主仓库

在主仓库的 README.md 中添加文档链接：

```markdown
## 📚 文档

- [在线文档](https://voicehub.lao-shui.top)
- [文档源码](https://github.com/laoshuikaixue/voicehub-docs)
```

### 6. 迁移后清理

迁移完成后，可以从主仓库中删除 `docs` 目录：

```bash
# 在主仓库中执行
git rm -r docs/
git commit -m "docs: 迁移文档到独立仓库 voicehub-docs"
git push
```

## 迁移优势

1. **独立维护**: 文档可以独立于主项目进行维护和更新
2. **简化主仓库**: 减少主仓库的复杂度，专注于核心代码
3. **独立部署**: 文档可以独立部署，不受主项目发布周期影响
4. **权限管理**: 可以为文档仓库设置不同的协作者权限
5. **版本控制**: 文档有独立的版本控制历史

## 注意事项

1. 确保所有链接都正确更新
2. 更新 CI/CD 配置以适应新的仓库结构
3. 通知团队成员新的文档仓库地址
4. 更新相关的文档链接和引用