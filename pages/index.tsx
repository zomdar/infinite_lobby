import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Scroller from "./components/Scroller";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Infinite Lobby</title>
        <meta name="description" content="infinite scroll" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero_section}>
          <div className={styles.scrollContainer}>
            <Scroller />
            <div className={styles.textContainer}>
              <p className={styles.transducer_test}>
                WELCOME TO HAKAJI! MEET OUR COLLECTION OF 3.333 UNIQUE GIRAFFE
                SLAM. SUPPORT AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING
                FOR YOU.
              </p>
            </div>
          </div>
          <div className={styles.scrollContainer}></div>
        </div>
      </main>
    </div>
  );
}
