import React from "react";

import styles from "./EmailInput.module.css";

const EmailInput = () => {
  return (
    <div className={styles.inputWithButton}>
      <input type="text" placeholder="Your email address" />
      <button>Join Free</button>
    </div>
  );
};

export default EmailInput;
