import React from "react";
import styles from "../styles/Feature.module.css";
import { H1 } from "./H1.styled";
import { H3 } from "./H3.styled";

const Features = () => {
  return (
    <div className={styles.container}>
      <H1 bg="#F0F0F0">So many newsletters out there, why join this one?</H1>
      <div className={styles.feature}>
        <div className={styles.featureLeft}>
          <H3 bg="#F0F0F0">
            Daily poll emailed right to your inbox, have your voice heard by
            taking our poll every morning
          </H3>
          <H3 bg="#F0F0F0">
            Politics and election season are so draining, we have just the bits
            of information that keep you informed. No overkill!
          </H3>
          <H3 bg="#F0F0F0">
            Exclusive deals and other fun stuff plus political cartoons on
            Thursdays
          </H3>
          <H3 bg="#F0F0F0">
            We also don't (and won't) push our opinions or views on you
          </H3>
        </div>
        <div className={styles.featureRight}>
          <H3 bg="#F0F0F0">
            The realest headlines and stories each morning from every angle, no
            b.s.
          </H3>
          <H3 bg="#F0F0F0">
            We don't censor the news like other media companies
          </H3>
          <H3 bg="#F0F0F0">
            Be a part of it, have a story you want heard? Submit it to
            haveavoice@makeitpolitical.com and the story may be included in one
            of our newsletters
          </H3>
          <H3 bg="#F0F0F0">Please don't forget to take us out of spam!</H3>
        </div>
      </div>
    </div>
  );
};

export default Features;
