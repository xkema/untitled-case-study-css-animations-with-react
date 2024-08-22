import styles from '../../App.module.css';

import export01Arrow from '../../assets/images/particles/export-01-arrow-36x24.png';
import export02Pdf from '../../assets/images/particles/export-02-pdf-129x156.png';
import export03Jpg from '../../assets/images/particles/export-03-jpg-129x156.png';
import export04Txt from '../../assets/images/particles/export-04-txt-129x156.png';

export function Particle05Export() {
  return (
    <>
      <img
        className={`${styles['particle']} ${styles['particle-05-export-01-arrow']}`}
        src={export01Arrow}
        alt="export-01-arrow"
      />
      <img
        className={`${styles['particle']} ${styles['particle-05-export-02-pdf']}`}
        src={export02Pdf}
        alt="export-02-pdf"
      />
      <img
        className={`${styles['particle']} ${styles['particle-05-export-03-jpg']}`}
        src={export03Jpg}
        alt="export-03-jpg"
      />
      <img
        className={`${styles['particle']} ${styles['particle-05-export-04-txt']}`}
        src={export04Txt}
        alt="export-04-txt"
      />
    </>
  );
}
