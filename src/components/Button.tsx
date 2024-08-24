import styles from '../../src/App.module.css';
import { FeatureProps } from '../data/features';
import { ButtonIconSelector } from './ButtonIconSelector';

export function Button({ feature }: FeatureProps) {
  return (
    <button className={styles['navigation-button']}>
      <span className={styles['navigation-button-icon']}>
        <ButtonIconSelector featureId={feature.id} featureName={feature.name} />
      </span>
      <span className={styles['navigation-button-text']}>{feature.name}</span>
    </button>
  );
}
