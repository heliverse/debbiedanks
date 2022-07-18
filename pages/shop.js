import React from "react";

import styles from "../styles/Shop.module.css";
import Image from "next/image";

const Shop = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Shop Some Merch</h2>
        <div className={styles.middle}>
          {/* <div className={styles.left}>
            <Image src="/image/bonfire.jpeg" width="500" height="450" />
          </div> */}
          <div className={styles.left}>
            <Image src="/image/teespring.jpeg" width="500" height="450" />
          </div>
          <div className={styles.right}>
            <Image src="/image/teespring.jpeg" width="500" height="450" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
