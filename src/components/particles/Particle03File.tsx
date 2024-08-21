import styles from '../../App.module.css';
import Particle03File01Top from '../../assets/images/particles/file-01-top-310x429.png';
import Particle03File01Middle from '../../assets/images/particles/file-02-middle-293x406.png';
import Particle03File01Bottom from '../../assets/images/particles/file-03-bottom-249x351.png';

export function Particle03File() {
  return (
    <>
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-03-file-03-bottom']}`}
        src={Particle03File01Bottom}
        alt="phone-particle-03-file-03-bottom"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-03-file-02-middle']}`}
        src={Particle03File01Middle}
        alt="phone-particle-03-file-02-middle"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-03-file-01-top']}`}
        src={Particle03File01Top}
        alt="phone-particle-03-file-01-top"
      />
    </>
  );
}
