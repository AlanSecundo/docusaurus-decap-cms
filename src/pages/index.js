import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import Translate from "@docusaurus/Translate";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <div className={styles.homePage}>
          <div className={styles.content}>
            <div className={styles.introTitle}>
              <Translate
                id="homepage.title.product"
              >
                b
              </Translate>
              <br />
              <Translate
                id="homepage.title.guide"
              >
                a
              </Translate>
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
