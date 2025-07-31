import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '智能点歌',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        支持多平台音乐搜索和点歌，智能排期管理，
        让每一首歌都能在最合适的时间播放。
      </>
    ),
  },
  {
    title: '用户友好',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        简洁直观的用户界面，支持投票、通知等互动功能，
        让音乐分享变得更加有趣和便捷。
      </>
    ),
  },
  {
    title: '现代化架构',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        基于 Nuxt 3 和 Vue 3 构建，采用 TypeScript 开发，
        提供稳定可靠的现代化 Web 应用体验。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
