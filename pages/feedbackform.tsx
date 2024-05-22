import type { NextPage } from "next";
import { useCallback } from "react";
import Form from "../components/form";
import styles from "./feedbackform.module.css";

const Feedbackform: NextPageFeedbackformType = () => {
  const onLETTERLOGO2Click = useCallback(() => {
    window.open("https://www.samparka.info/");
  }, []);

  return (
    <div className={styles.feedbackform}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          <b className={styles.midtownCinemas}>MIDTOWN CINEMAS</b>
        </div>
        <Form />
      </div>
      <div className={styles.feedbackformInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.poweredByParent}>
            <div className={styles.poweredBy}>powered by</div>
            <img
              className={styles.letterLogo2}
              alt=""
              src="/letter-logo-2@2x.png"
              onClick={onLETTERLOGO2Click}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbackform;
