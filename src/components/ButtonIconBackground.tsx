import { motion } from 'framer-motion';
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

  // The `tsc -b` flag of the `build` command doesn't listen to the line disablers. 
  // Either remove the `-b` (build) flag or skip type checking then building `abstract-version`.

  return (
    <span className={styles['button-icon-background']}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <motion.circle
          cx="28"
          cy="28"
          r="27"
          style={{
            rotate: -90,
            rotateX: 180,
            // Overrides CSS `stroke` styles from the `abstract-version`!
            stroke: 'var(--color-border-navigation-button)',
          }}
          initial={{
            pathLength: isActive ? 0 : 1,
          }}
          animate={{
            pathLength: isActive ? 1 : 0,
          }}
          transition={{
            duration: 1.5,
          }}
        />
      </svg>
    </span>
  );
}
