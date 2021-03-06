import styles from "../styles/Archive.module.css";
import BasicPagination from "../components/Page";
import EmailInput from "../components/EmailInput";
const archive = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.leftContentBox}>
            <h2>The Hustle's Past Newsletters</h2>
            <h4>
              Check out the previous newsletters published by The Hustle and
              join for free to receive the 5-minute newsletter keeping 2M+
              innovators in the loop.
            </h4>
            <div className={styles.emailInput}>
              <EmailInput />
            </div>
            <div className={styles.newsHeading}>
              <h4>
                July 18, 2022 <span>πΉ The Margaritaville gold mine</span>{" "}
              </h4>

              <h4>
                July 18, 2022 <span>πΉ The Margaritaville gold mine</span>{" "}
              </h4>

              <h4>
                July 18, 2022 <span>πΉ The Margaritaville gold mine</span>
              </h4>

              <h4>
                July 18, 2022 <span>π± Can USB-C solve e-waste?</span>
              </h4>

              <h4>
                July 18, 2022 <span>πͺ Who has spare change?</span>
              </h4>

              <h4>
                July 18, 2022 <span>π€ Boy bands are big business</span>
              </h4>

              <h4>
                July 18, 2022{" "}
                <span>π‘ Why teens in suits are going bananas</span>
              </h4>

              <h4>
                July 18, 2022 <span>π§Έ Kidults, explained</span>
              </h4>

              <h4>
                July 18, 2022{" "}
                <span>π­ Inflation is coming for your cookout</span>
              </h4>

              <h4>
                July 18, 2022 <span>ποΈ Bed Bath & Beyondβ¦ bad</span>
              </h4>

              <h4>
                July 18, 2022{" "}
                <span> π From factory work to 145m followers</span>
              </h4>

              <h4>
                July 18, 2022 <span>π Search warrants are getting crazy</span>
              </h4>

              <h4>
                July 18, 2022 <span>ππΎ Latin music is booming</span>
              </h4>
            </div>
            <div className={styles.pagination}>
              <BasicPagination />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default archive;
