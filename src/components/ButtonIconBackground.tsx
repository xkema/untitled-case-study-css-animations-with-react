import styles from '../../src/App.module.css';
import { Feature } from '../data/features';

export type ButtonIconBackgroundProps = {
  feature: Feature;
  activeId: string;
};

export function ButtonIconBackground({
  feature,
  activeId,
}: ButtonIconBackgroundProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isActive = feature.id === activeId;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isFirstItem = feature.id === '825cc467';

  return (
    <span className={styles['button-icon-background']}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="27" />
      </svg>
    </span>
  );
}
