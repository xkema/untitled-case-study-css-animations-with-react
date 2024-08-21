import styles from '../../App.module.css';
import Particle05Export01Arrow from '../../assets/images/particles/export-01-arrow-130x156.png';
import Particle05Export02Pdf from '../../assets/images/particles/export-02-pdf-130x156.png';
import Particle05Export03Jpg from '../../assets/images/particles/export-03-jpg-130x156.png';
import Particle05Export04Txt from '../../assets/images/particles/export-04-txt-130x156.png';

export function Particle05Export() {
  return (
    <>
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-05-export-01-arrow']}`}
        src={Particle05Export01Arrow}
        alt="Particle-05-Export-01-Arrow"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-05-export-02-pdf']}`}
        src={Particle05Export02Pdf}
        alt="Particle-05-Export-01-Pdf"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-05-export-03-jpg']}`}
        src={Particle05Export03Jpg}
        alt="Particle-05-Export-01-Jpg"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-05-export-04-txt']}`}
        src={Particle05Export04Txt}
        alt="Particle-05-Export-01-Txt"
      />
    </>
  );
}
