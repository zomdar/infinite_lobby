import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infinite Lobby</title>
        <meta name="description" content="infinite scroll" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.scrollContainer}>
          <div className={styles.sliding_background}>

          </div>
          <span className={styles.logo}>
            <Image
              className={styles.sliding_background}
              src="/welcome_name.svg"
              alt="Vercel Logo"
              width={5076}
              height={100}
            />
          </span>
        </div>
      </main>
    </div>
  );
}
