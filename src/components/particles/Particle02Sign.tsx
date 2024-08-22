import styles from '../../App.module.css';

import sign01Left from '../../assets/images/particles/sign-01-left-222x147.png';
import sign02Right from '../../assets/images/particles/sign-02-right-216x180.png';
import sign03Bottom from '../../assets/images/particles/sign-03-bottom-147x126.png';

export function Particle02Sign() {
  return (
    <>
      <img
        className={`${styles['particle']} ${styles['particle-02-sign-01-left']}`}
        src={sign01Left}
        alt="sign-01-left"
      />
      <img
        className={`${styles['particle']} ${styles['particle-02-sign-02-right']}`}
        src={sign02Right}
        alt="sign-02-right"
      />
      <img
        className={`${styles['particle']} ${styles['particle-02-sign-03-bottom']}`}
        src={sign03Bottom}
        alt="sign-03-bottom"
      />
    </>
  );
}
