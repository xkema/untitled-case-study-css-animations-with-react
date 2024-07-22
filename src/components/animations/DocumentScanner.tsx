import styles from './Animations.module.css';
import phone from '../../assets/images/phone-01-document-scanner.png';

export function DocumentScanner() {
  return (
    <div className={styles.wrapper}>
      <img className={`${styles.phone}`} src={phone} alt="Document Scanner" />
    </div>
  );
}
