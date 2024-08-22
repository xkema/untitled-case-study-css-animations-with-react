import styles from '../../App.module.css';

import file01Top from '../../assets/images/particles/file-01-top-309x429.png';
import file02Middle from '../../assets/images/particles/file-02-middle-291x405.png';
import file03Bottom from '../../assets/images/particles/file-03-bottom-249x351.png';

export function Particle03File() {
  return (
    <>
      <img
        className={`${styles['particle']} ${styles['particle-02-file-03-bottom']}`}
        src={file03Bottom}
        alt="file-03-bottom"
      />
      <img
        className={`${styles['particle']} ${styles['particle-02-file-02-middle']}`}
        src={file02Middle}
        alt="file-02-middle"
      />
      <img
        className={`${styles['particle']} ${styles['particle-02-file-01-top']}`}
        src={file01Top}
        alt="file-01-top"
      />
    </>
  );
}
