import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "react-use-gesture";

import styles from "../styles/Home.module.css";

const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const projects = [
  {
    id: "1",
    img: "/flower_shop.png",
    link: "https://www.figma.com/community/file/1180406788210743591",
  },
  {
    id: "2",
    img: "/slot_party.png",
    link: "https://www.figma.com/community/widget/1164791472745970593/slot-party",
  },
  {
    id: "3",
    img: "/turtle_talk.png",
    link: "https://www.figma.com/community/widget/1154802987377946693",
  },
  {
    id: "4",
    img: "/stock_city.png",
    link: "https://www.figma.com/community/widget/1159601239397132236/Stock-City",
  },
  {
    id: "5",
    img: "/price_is_crypto.png",
    link: "https://www.figma.com/community/widget/1153888616147349345/Price-is-Crypto",
  },
];
const projects_second = [
  {
    id: "1",
    img: "/banking_mobile.png",
    link: "https://apps.apple.com/us/app/m-t-mobile-banking/id397761931",
  },
  {
    id: "2",
    img: "/currency_lib.png",
    link: "https://currency-design-system.netlify.app/mt/general/about-currency/design",
  },
  {
    id: "3",
    img: "/uspto_patent_center.png",
    link: "https://patentcenter.uspto.gov/",
  },
  {
    id: "4",
    img: "/bearly_ai.png",
    link: "https://bearly.ai/",
  },
];

export default function Home() {
  useEffect(() => {}, []);

  const [hover, setHover] = useState(false);

  const controls = useAnimation();

  const bind = useScroll((event) => {
    controls.start({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  const controls_second = useAnimation();

  const bind_second = useScroll((event) => {
    controls_second.start({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  const goToLink = (link: string) => {
    window.open(link, "_blank");
  };

  const showHoverContent = (e: any) => {
    setHover(true);
  };

  const hideHoverContent = (e: any) => {
    setHover(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hi, I'm Wooj</title>
        <meta
          name="description"
          content="I like long walks on the beach and my favourite Pokemon is Charizard."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.navbar}>
          <div className={styles.nav_logo}>
            <a href="/">
              <Image src="/flag_logo.svg" alt="logo" width={50} height={50} />
            </a>
          </div>
          <div className={styles.social_links}>
            <a
              className={styles.social_item}
              target="_blank"
              href="https://www.linkedin.com/in/wooj-choi/"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.14321 7.5752H11.1144V9.0552C11.5424 8.204 12.64 7.4392 14.2888 7.4392C17.4496 7.4392 18.2 9.1336 18.2 12.2424V18H15V12.9504C15 11.18 14.572 10.1816 13.4824 10.1816C11.9712 10.1816 11.3432 11.2576 11.3432 12.9496V18H8.14321V7.5752V7.5752ZM2.65601 17.864H5.85601V7.4392H2.65601V17.864V17.864ZM6.31441 4.04C6.31453 4.30822 6.26134 4.57379 6.15792 4.82127C6.05451 5.06875 5.90293 5.29321 5.71201 5.4816C5.32513 5.8661 4.80146 6.08132 4.25601 6.08C3.71152 6.07963 3.18906 5.86496 2.80161 5.4824C2.61138 5.29337 2.46032 5.06866 2.35709 4.82114C2.25385 4.57363 2.20048 4.30818 2.20001 4.04C2.20001 3.4984 2.41601 2.98 2.80241 2.5976C3.18952 2.21453 3.7122 1.99976 4.25681 2C4.80241 2 5.32561 2.2152 5.71201 2.5976C6.09761 2.98 6.31441 3.4984 6.31441 4.04Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              className={styles.social_item}
              target="_blank"
              href="https://twitter.com/zomdar"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7144 4.34959C19.0464 4.64559 18.3288 4.84559 17.5744 4.93599C18.3528 4.47022 18.9351 3.73716 19.2128 2.87359C18.4815 3.30798 17.6811 3.61375 16.8464 3.77759C16.2851 3.17828 15.5416 2.78105 14.7314 2.64757C13.9213 2.51409 13.0897 2.65182 12.3658 3.03939C11.6419 3.42696 11.0662 4.04268 10.7281 4.79095C10.39 5.53923 10.3084 6.37819 10.496 7.17759C9.01414 7.10319 7.56449 6.71803 6.24113 6.04711C4.91777 5.3762 3.75026 4.43452 2.81439 3.28319C2.49439 3.83519 2.31039 4.47519 2.31039 5.15679C2.31003 5.77039 2.46114 6.37458 2.75029 6.91578C3.03945 7.45697 3.45772 7.91842 3.96799 8.25919C3.37621 8.24036 2.79749 8.08046 2.27999 7.79279V7.84079C2.27993 8.70138 2.57762 9.53549 3.12254 10.2016C3.66746 10.8677 4.42605 11.3247 5.26959 11.4952C4.72062 11.6438 4.14506 11.6656 3.58639 11.5592C3.82439 12.2997 4.28799 12.9472 4.91228 13.4111C5.53658 13.875 6.29032 14.1321 7.06799 14.1464C5.74786 15.1827 4.1175 15.7449 2.43919 15.7424C2.1419 15.7425 1.84485 15.7251 1.54959 15.6904C3.25317 16.7857 5.23626 17.367 7.26159 17.3648C14.1176 17.3648 17.8656 11.6864 17.8656 6.76159C17.8656 6.60159 17.8616 6.43999 17.8544 6.27999C18.5834 5.75277 19.2127 5.09991 19.7128 4.35199L19.7144 4.34959V4.34959Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              className={styles.social_item}
              target="_blank"
              href="https://www.figma.com/@zomdar"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5782 7.34375C15.139 6.93702 15.5567 6.36322 15.7714 5.70455C15.9862 5.04588 15.9869 4.33615 15.7736 3.67702C15.5602 3.0179 15.1437 2.44322 14.5838 2.03531C14.0238 1.6274 13.3491 1.4072 12.6563 1.40625H7.34379C6.65101 1.4072 5.97629 1.6274 5.41632 2.03531C4.85635 2.44322 4.43986 3.0179 4.22651 3.67702C4.01316 4.33615 4.01391 5.04588 4.22865 5.70455C4.44338 6.36322 4.86109 6.93702 5.42192 7.34375C5.00087 7.64699 4.65794 8.04599 4.4214 8.50783C4.18487 8.96966 4.06152 9.48112 4.06152 10C4.06152 10.5189 4.18487 11.0303 4.4214 11.4922C4.65794 11.954 5.00087 12.353 5.42192 12.6562C4.96648 12.9854 4.60319 13.4259 4.36686 13.9357C4.13053 14.4455 4.02908 15.0075 4.07224 15.5677C4.11539 16.128 4.30169 16.6678 4.6133 17.1354C4.92491 17.603 5.35139 17.9827 5.85185 18.2382C6.35232 18.4937 6.91002 18.6164 7.47151 18.5945C8.033 18.5727 8.57946 18.407 9.05854 18.1133C9.53762 17.8197 9.93326 17.4079 10.2076 16.9175C10.4818 16.4271 10.6256 15.8744 10.625 15.3125V12.5703C10.9656 12.8577 11.3612 13.0727 11.7876 13.2022C12.214 13.3316 12.6623 13.3729 13.1051 13.3235C13.548 13.274 13.9762 13.1349 14.3635 12.9146C14.7508 12.6942 15.0892 12.3973 15.358 12.0419C15.6269 11.6865 15.8205 11.28 15.927 10.8473C16.0336 10.4146 16.051 9.96478 15.978 9.52517C15.905 9.08556 15.7433 8.66543 15.5026 8.29038C15.2619 7.91534 14.9474 7.59325 14.5782 7.34375ZM14.6875 4.6875C14.6855 5.22559 14.4708 5.74105 14.0903 6.12154C13.7098 6.50203 13.1944 6.71669 12.6563 6.71875H10.625V2.65625H12.6563C13.1944 2.65831 13.7098 2.87297 14.0903 3.25346C14.4708 3.63395 14.6855 4.14941 14.6875 4.6875ZM5.31254 4.6875C5.3146 4.14941 5.52927 3.63395 5.90976 3.25346C6.29025 2.87297 6.80571 2.65831 7.34379 2.65625H9.37504V6.71875H7.34379C6.80571 6.71669 6.29025 6.50203 5.90976 6.12154C5.52927 5.74105 5.3146 5.22559 5.31254 4.6875V4.6875ZM5.31254 10C5.3146 9.46191 5.52927 8.94645 5.90976 8.56596C6.29025 8.18547 6.80571 7.97081 7.34379 7.96875H9.37504V12.0312H7.34379C6.80571 12.0292 6.29025 11.8145 5.90976 11.434C5.52927 11.0535 5.3146 10.5381 5.31254 10ZM7.34379 17.3438C6.80507 17.3437 6.28842 17.1297 5.90748 16.7488C5.52655 16.3679 5.31254 15.8512 5.31254 15.3125C5.31254 14.7738 5.52655 14.2571 5.90748 13.8762C6.28842 13.4953 6.80507 13.2813 7.34379 13.2812H9.37504V15.3125C9.37299 15.8506 9.15832 16.366 8.77783 16.7465C8.39734 17.127 7.88188 17.3417 7.34379 17.3438V17.3438ZM12.6563 12.0312C12.1176 12.0312 11.6009 11.8172 11.22 11.4363C10.839 11.0554 10.625 10.5387 10.625 10C10.625 9.46128 10.839 8.94462 11.22 8.56369C11.6009 8.18276 12.1176 7.96875 12.6563 7.96875C13.195 7.96875 13.7117 8.18276 14.0926 8.56369C14.4735 8.94462 14.6875 9.46128 14.6875 10C14.6875 10.5387 14.4735 11.0554 14.0926 11.4363C13.7117 11.8172 13.195 12.0312 12.6563 12.0312V12.0312Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.hero_section}>
            <div className={styles.scrollContainer_left}>
              <div className={styles.scrollContainer_main}></div>
              <div className={styles.textContainer}>
                <p className={styles.transducer_base}>
                  <svg
                    className={styles.triangle_spacer}
                    width="10"
                    height="10"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0H20L0 20.2521V20V0Z" fill="white" />
                  </svg>
                  WELCOME TO MY CHANNEL! MY NAME IS WOOJ CHOI, I LIKE WALKS ON
                  THE BEACH AND MY FAVORITE POKEMON IS CHARIZARD. ENJOY!
                </p>
              </div>
            </div>
            <div className={styles.scrollContainer_right}>
              <div className={styles.sub_hero_sm_top}>
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
              <div className={styles.sub_hero_sm_bottom}>
                <div className={styles.sliding_background_4}></div>
              </div>
            </div>
          </div>
          <div className={styles.sub_hero}>
            <div className={styles.sliding_background_smiley}></div>
          </div>
          <div className={styles.hero_section}>
            <div className={styles.scrollContainer_left_vertical}>
              <div className={styles.middle_logo}>
                <Image
                  src="/twitter-pin.png"
                  alt="Wooj Choi Logo"
                  fill={true}
                  className={styles.twitter_pin}
                  onClick={() => {
                    goToLink("https://twitter.com/zomdar");
                  }}
                />
              </div>
              <div className={styles.bg_scrolling_content}>
                <div className={styles.vertical_bg}></div>
                <div className={styles.vertical_bg_2}></div>
                <div className={styles.vertical_bg_3}></div>
                <div className={styles.vertical_bg_4}></div>
                <div className={styles.vertical_bg_5}></div>
                <div className={styles.vertical_bg}></div>
                <div className={styles.vertical_bg_2}></div>
                <div className={styles.vertical_bg_3}></div>
                <div className={styles.vertical_bg_4}></div>
                <div className={styles.vertical_bg_5}></div>
              </div>
            </div>
            <div className={styles.scrollContainer_right_vertical}>
              <div className={styles.right_container_logo_spacer}>
                <span className={styles.transducer_logo}>Hey, Whats up!</span>
              </div>
              <div className={styles.textContainer_long}>
                <p className={styles.transducer_base}>
                  <svg
                    className={styles.triangle_spacer}
                    width="10"
                    height="10"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0H20L0 20.2521V20V0Z" fill="white" />
                  </svg>
                  I'm a designer that loves the intersection of art and code! Do
                  you remember when the web used to be delightful? Buttons +
                  knobs + sounds + experimentation? We have an astounding medium
                  here, to be able to express and do whatever we want. We
                  outside! I work at M&T Bank as a Senior Designer making +
                  managing Design Systems, making rad UI kits and Figma widgets
                  in my free time.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sub_hero}>
            <div className={styles.sliding_background_check_out_my_work}></div>
          </div>
          <div className={styles.horizontal_scroll_container} {...bind()}>
            {projects.map((src) => (
              <motion.div
                key={src.img}
                id={src.id}
                className={styles.card}
                style={{ backgroundImage: `url(${src.img})` }}
                animate={controls}
                onClick={() => {
                  goToLink(src.link);
                }}
              />
            ))}
          </div>
          <div
            className={styles.horizontal_scroll_container_reverse}
            {...bind_second()}
          >
            {projects_second.map((src) => (
              <motion.div
                key={src.img}
                id={src.id}
                className={styles.card_right}
                style={{ backgroundImage: `url(${src.img})` }}
                animate={controls_second}
                onClick={() => {
                  goToLink(src.link);
                }}
                onMouseEnter={showHoverContent}
                onMouseLeave={hideHoverContent}
              >
                {/* show or hide based on boolean */}
                {/* {hover && (
                <div
                  className={styles.card_content}
                >
                  <p className={styles.card_text}>hey there</p>
                </div>
              )} */}
              </motion.div>
            ))}
          </div>
        </main>
      </motion.div>
    </div>
  );
}
