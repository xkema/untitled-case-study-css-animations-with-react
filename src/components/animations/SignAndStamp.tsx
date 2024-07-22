import styles from './Animations.module.css';
import phone from '../../assets/images/phone-02-sign-and-stamp.png';
import signLeft from '../../assets/images/sign-01-left.png';
import signRight from '../../assets/images/sign-02-right.png';

export function SignAndStamp() {
  return (
    <div className={styles.wrapper}>
      <img className={`${styles.phone}`} src={phone} alt="Sign & Stamp" />
      <img
        className={`${styles.signl} ${styles.particle}`}
        src={signLeft}
        alt="Sign Left"
      />
      <img
        className={`${styles.signr} ${styles.particle}`}
        src={signRight}
        alt="Sign Right"
      />
    </div>
  );
}
