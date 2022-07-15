import React from "react";

import styles from "../styles/Shop.module.css";
import Image from "next/image";

const Shop = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Shop Some Merch</h2>
        <div className={styles.middle}>
          <div className={styles.left}>
            <img src="https://makeitpoliticalassets.s3.amazonaws.com/teespring_8cfba6d848.svg" />
          </div>
          <div className={styles.right}>
            <img src="https://makeitpoliticalassets.s3.amazonaws.com/bonfire_8be93319a2.svg" />
          </div>
        </div>
        <div className={styles.down}></div>
      </div>
    </>
  );
};

export default Shop;
