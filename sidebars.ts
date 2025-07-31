import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '快速开始',
      items: [
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/first-run',
      ],
    },
    {
      type: 'category',
      label: '用户指南',
      items: [
        'user-guide/overview',
      ],
    },
    {
      type: 'category',
      label: '管理员指南',
      items: [
        'admin-guide/overview',
      ],
    },
    {
      type: 'category',
      label: '开发指南',
      items: [
        'development/overview',
      ],
    },
    {
      type: 'category',
      label: '故障排除',
      items: [
        'troubleshooting/common-issues',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
