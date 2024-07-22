import styles from './Animations.module.css';
import phone from '../../assets/images/phone-03-batch-scanning.png';
import fileBottom from '../../assets/images/file-01-bottom.png';
import fileMiddle from '../../assets/images/file-02-middle.png';
import fileTop from '../../assets/images/file-03-top.png';

export function BatchScanning() {
  return (
    <div className={styles.wrapper}>
      <img className={`${styles.phone}`} src={phone} alt="Sign & Stamp" />
      <img
        className={`${styles.fileb} ${styles.particle}`}
        src={fileBottom}
        alt="File Bottom"
      />
      <img
        className={`${styles.filem} ${styles.particle}`}
        src={fileMiddle}
        alt="File Middle"
      />
      <img
        className={`${styles.filet} ${styles.particle}`}
        src={fileTop}
        alt="File Top"
      />
    </div>
  );
}
