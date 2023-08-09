import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={styles.homePage}>
          <div className={styles.content}>
            <div className={styles.introTitle}>
              Product
              <br />
              Guide
            </div>
            <div className={styles.textContainer}>
              <div className={styles.line}></div>
              <div className={styles.subText}>
                Lorem ipsum dolor sit amet. Cum voluptatum incidunt ad pariatur
                vitae et fugiat pariatur et rerum voluptatem et tempore fuga.
                Vel commodi eius ea assumenda quibusdam vel quia corrupti eum
                officia voluptas ut dolores velit.
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
