import styles from '../../App.module.css';
import Particle04Slider01Left from '../../assets/images/particles/slider-01-left-43x360.png';
import Particle04Slider01Right from '../../assets/images/particles/slider-02-right-43x360.png';

export function Particle04Slider() {
  return (
    <>
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-04-slider-01-left']}`}
        src={Particle04Slider01Left}
        alt="Particle-04-Slider-01-Left"
      />
      <img
        className={`${styles['phone-particle-image']} ${styles['phone-particle-04-slider-02-right']}`}
        src={Particle04Slider01Right}
        alt="Particle-04-Slider-02-Right"
      />
    </>
  );
}
