import { motion } from 'framer-motion';
import styles from '../../App.module.css';

import slider01Left from '../../assets/images/particles/slider-01-left-42x360.png';
import slider02Right from '../../assets/images/particles/slider-02-right-42x360.png';

export function Particle04Slider() {
  return (
    <>
      <motion.img
        className={`${styles['particle']} ${styles['particle-04-slider-01-left']}`}
        src={slider01Left}
        alt="slider-01-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      />
      <motion.img
        className={`${styles['particle']} ${styles['particle-04-slider-02-right']}`}
        src={slider02Right}
        alt="slider-02-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </>
  );
}
