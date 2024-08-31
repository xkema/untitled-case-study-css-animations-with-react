import { motion } from 'framer-motion';
import styles from '../../App.module.css';

import export01Arrow from '../../assets/images/particles/export-01-arrow-36x24.png';
import export02Pdf from '../../assets/images/particles/export-02-pdf-129x156.png';
import export03Jpg from '../../assets/images/particles/export-03-jpg-129x156.png';
import export04Txt from '../../assets/images/particles/export-04-txt-129x156.png';

export function Particle05Export() {
  return (
    <>
      <motion.img
        className={`${styles['particle']} ${styles['particle-05-export-01-arrow']}`}
        src={export01Arrow}
        alt="export-01-arrow"
        initial={{ x: '450%', y: '500%', rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: -45 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.img
        className={`${styles['particle']} ${styles['particle-05-export-02-pdf']}`}
        src={export02Pdf}
        alt="export-02-pdf"
        initial={{ x: '99%', y: '180%', rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: -22.5 }}
        transition={{ duration: 0.5, delay: 1.25 }}
      />
      <motion.img
        className={`${styles['particle']} ${styles['particle-05-export-03-jpg']}`}
        src={export03Jpg}
        alt="export-03-jpg"
        initial={{ y: '200%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={{ zIndex: 1 }}
      />
      <motion.img
        className={`${styles['particle']} ${styles['particle-05-export-04-txt']}`}
        src={export04Txt}
        alt="export-04-txt"
        initial={{ x: '-99%', y: '180%', rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: 22.5 }}
        transition={{ duration: 0.5, delay: 1.75 }}
      />
    </>
  );
}
