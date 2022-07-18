import React from "react";
import Image from "next/image";
// import { H1 } from "../repeating/TextFormatting.jsx/index.js";
// import { H3 } from "../H3.styled";
import styles from "./HomePage.module.css";
import EmailInput from "../EmailInput";
// import { Button } from "../repeating/TextFormatting.jsx/index.js";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Trending news delivered to your inbox daily.</h2>
        <h3>
          Get the <span>5-minute newsletter</span> keeping 2M+ innovators in the
          loop.
        </h3>

        <EmailInput />
      </div>
      <div className={styles.femaleBear}>
        <Image src="/image/female-bear.jpeg" width="500" height="450" />
      </div>
    </div>
  );
};

export default HomePage;
