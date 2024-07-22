import styles from './Animations.module.css';
import phone from '../../assets/images/phone-04-advanced-filters.png';
import sliderLeft from '../../assets/images/slider-01-left.png';
import sliderRight from '../../assets/images/slider-02-right.png';

export function AdvancedFilters() {
  return (
    <div className={styles.wrapper}>
      <img className={`${styles.phone}`} src={phone} alt="Advanced Filters" />
      <img
        className={`${styles.sliderl} ${styles.particle}`}
        src={sliderLeft}
        alt="Slider Left"
      />
      <img
        className={`${styles.sliderr} ${styles.particle}`}
        src={sliderRight}
        alt="Slider Right"
      />
    </div>
  );
}
