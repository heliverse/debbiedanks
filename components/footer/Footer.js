import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailInput from "../EmailInput";
// import EmailInput from "../EmailInput";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.heading}>
          <h2>
            Join 2M+ professionals getting the <br /> Hustle daily news brief
          </h2>
        </div>
        {/* <div className={styles.inputWithButton}>
          <input type="text" placeholder="Your email address" />
          <button>Join Free</button>
        </div> */}
        <div className={styles.emailInput}>
          <EmailInput />
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondHeading}>
          <h2>M</h2>
        </div>
        <div className={styles.secondContent}>
          <div className={styles.spanText}>
            <span>Daily Headlines</span>
            <span>Hustle Originals</span>
            <span>Today’s Newsletter</span>
            <span>Podcast</span>
            <span>Trends</span>
            <Link href="/contact">
              <a className={styles.anchor}>
                <span>Contact Us</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.secondIcons}>
          <div className={styles.icons}>
            <span>
              {" "}
              <TwitterIcon />
            </span>
            <span>
              {" "}
              <FacebookIcon />
            </span>
            <span>
              {" "}
              <InstagramIcon />
            </span>
            <span>
              {" "}
              <WhatsAppIcon />
            </span>
          </div>
        </div>
        <div className={styles.privacy}>
          <h6>© 2022, Hustle Con Media, Inc., All Rights Reserved.</h6>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
