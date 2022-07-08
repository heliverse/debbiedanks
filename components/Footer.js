import React from "react";
import styles from "../styles/Footer.module.css";
import { H1 } from "./H1.styled";

const Footer = () => {
  return (
    <div className={styles.container}>
      <H1>Follow & Tag Us @makeitpolitical #makeitpolitical</H1>
      <div className={styles.footerSpan}>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Contact</span>
        <span>Advertise</span>
        <span>Disclaimer</span>
      </div>
    </div>
  );
};

export default Footer;
