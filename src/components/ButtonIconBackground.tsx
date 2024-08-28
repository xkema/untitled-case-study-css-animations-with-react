import styles from '../../src/App.module.css';

export function ButtonIconBackground() {
  return (
    <span className={styles['button-icon-background']}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" />
      </svg>
    </span>
  );
}
