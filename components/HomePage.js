import React from "react";
import Image from "next/image";
import { H1 } from "./H1.styled";
import { H3 } from "./H3.styled";

import styles from "../styles/HomePage.module.css";
import { Button } from "./Button.styled";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <H1>
          Trending news delivered to <br /> your inbox daily.
        </H1>
        <H3>
          Get the <span>5-minute newsletter</span> keeping 2M+ innovators in the
          loop.
        </H3>

        <div className={styles.inputWithButton}>
          <input type="text" placeholder="Your email address" />

          <Button>Subscribe</Button>
        </div>
      </div>
      <div className={styles.femaleBear}>
        <Image src="/../public/female-bear.jpeg" width="500" height="450" />
      </div>
    </div>
  );
};

export default HomePage;
