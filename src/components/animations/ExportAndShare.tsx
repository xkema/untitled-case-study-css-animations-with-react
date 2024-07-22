import styles from './Animations.module.css';
import phone from '../../assets/images/phone-05-export-and-share.png';
import exportArrow from '../../assets/images/export-01-arrow.png';
import exportPdf from '../../assets/images/export-02-pdf.png';
import exportJpg from '../../assets/images/export-03-jpg.png';
import exportTxt from '../../assets/images/export-04-txt.png';

export function ExportAndShare() {
  return (
    <div className={styles.wrapper}>
      <img className={`${styles.phone}`} src={phone} alt="Advanced Filters" />
      <img
        className={`${styles.exporta} ${styles.particle}`}
        src={exportArrow}
        alt="Export Arrow"
      />
      <img
        className={`${styles.exportp} ${styles.particle}`}
        src={exportPdf}
        alt="Export PDF"
      />
      <img
        className={`${styles.exportj} ${styles.particle}`}
        src={exportJpg}
        alt="Export JPG"
      />
      <img
        className={`${styles.exportt} ${styles.particle}`}
        src={exportTxt}
        alt="Export TXT"
      />
    </div>
  );
}
