import styles from "../styles/Contact.module.css";
import { useState, useEffect } from "react";
import FormDialog from "../components/dialog/FormDialog";

const Contact = () => {
  const [openPopup, setOpenPopup] = useState(false);

  // country code picker state

  return (
    <>
      <div className={styles.container}>
        <h2>Contact Us</h2>

        <div className={styles.contactBody}>
          <div className={styles.leftBody}>
            <div className={styles.leftCard}>
              <h3>Advertise</h3>
              <p>
                Speak to our sales team to see how we can help grow your brand.
              </p>
              <button onClick={() => setOpenPopup(true)}>Contact Sales</button>
            </div>
          </div>
          <div className={styles.rightBody}>
            <div className={styles.rightCard}>
              <h3>Support</h3>
              <p>Have a question? Need Help? Feel free to drop us a message.</p>
              <button onClick={() => setOpenPopup(true)}>
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      <FormDialog
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      ></FormDialog>
    </>
  );
};

export default Contact;
