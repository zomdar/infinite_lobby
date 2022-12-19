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
      <div className={styles.navbar}>
        <a href="/">
          <Image
            src="/flag_logo.svg"
            alt="logo"
            width={50}
            height={50}
            className={styles.nav_logo}
          />
        </a>
      </div>
      <main className={styles.main}>
        <div className={styles.hero_section}>
          <div className={styles.scrollContainer_left}>
            <Scroller />
            <div className={styles.textContainer}>
              <p className={styles.transducer_test}>
                WELCOME TO MY CHANNEL! MY NAME IS WOOJ CHOI, I LIKE WALKS ON THE
                BEACH AND MY FAVORITE POKEMON IS CHARIZARD. ENJOY!
              </p>
            </div>
          </div>
          <div className={styles.scrollContainer_right}>
            <div className={styles.sub_hero_sm_bottom}>
              <div className={styles.sliding_background_3}></div>
            </div>
            <div id="video-container" className={styles.spacer}>
              {/* needs to be responsive */}
              <iframe
                className={styles.video}
                width="100%"
                src="https://www.youtube-nocookie.com/embed/GfxpRGhR0g4?autoplay=1&mute=1&controls=0&loop=1"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding"
              ></iframe>
            </div>
            <div className={styles.sub_hero_sm_top}>
              <div className={styles.sliding_background_4}></div>
            </div>
          </div>
        </div>
        <div className={styles.sub_hero}>
          <div className={styles.sliding_background_2}></div>
        </div>
      </main>
    </div>
  );
}
