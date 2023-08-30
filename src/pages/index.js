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
              <Translate id="homepage.title.product">Guia de</Translate>
              <br />
              <Translate id="homepage.title.guide">Produto</Translate>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.line}></div>
              <div className={styles.subText}>
                <Translate id="homepage.text">
                  Um guia de produto feito pela DB1 Global Software para
                  compartilhar e expressar nossa opinião sobre como o processo
                  de desenvolvimento de Software deve ser conduzido.
                </Translate>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
