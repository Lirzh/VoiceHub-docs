import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          VoiceHub
        </Heading>
        <p className={styles.heroSubtitle}>
          智能点歌系统 - 现代化的点歌、排期和播放管理平台
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/intro">
            开始使用 📚
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.heroButton)}
            href="https://vercel.com/new/clone?repository-url=https://github.com/laoshuikaixue/VoiceHub&env=DATABASE_URL,JWT_SECRET&envDescription=需要配置数据库连接和JWT密钥&envLink=https://github.com/laoshuikaixue/VoiceHub#环境变量说明"
            target="_blank">
            一键部署 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} 文档`}
      description="VoiceHub 智能点歌系统文档 - 现代化的点歌、排期和播放管理平台">
      <HomepageHeader />
    </Layout>
  );
}
