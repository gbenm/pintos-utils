import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DocsCard from '@site/src/components/DocsCard';

import styles from './index.module.css';
import docs from "../docs.json";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div style={{
          justifyContent: "center",
          display: "flex",
          width: "100%",
          flexWrap: "wrap"
      }}>
        {/* <span style={{ width: "8rem" }}>
        </span> */}
        <img src="img/velociraptor.png" style={{ width: "8rem", marginRight: "2rem" }} />
        <div style={{ justifySelf: "center" }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  siteConfig.themeConfig
  let key = 0
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.docsIndex}>
          {docs.map(doc => (
            <div key={doc.path} className={clsx(styles.docsEntry, '')}>
              <Link style={{ all: "unset" }} to={doc.path}>
                <DocsCard {...doc} />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
