import styles from '../../App.module.css';

import Particle02Sign01Left from '../../assets/images/particles/sign-01-left-222x148.png';
import Particle02Sign02Left from '../../assets/images/particles/sign-02-right-221x185.png';
import Particle02Sign03Left from '../../assets/images/particles/sign-03-bottom-180x159.png';

export function Particle02Sign() {
  return (
    <>
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-02-sign-01-left']}`}
        src={Particle02Sign01Left}
        alt="phone-particle-02-sign-01-left"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-02-sign-02-right']}`}
        src={Particle02Sign02Left}
        alt="phone-particle-02-sign-02-right"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-02-sign-03-bottom']}`}
        src={Particle02Sign03Left}
        alt="phone-particle-02-sign-03-bottom"
      />
    </>
  );
}
