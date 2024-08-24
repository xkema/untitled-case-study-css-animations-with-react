import styles from '../../src/App.module.css';
import { FeatureProps } from '../data/features';

export function FeatureText({ feature }: FeatureProps) {
  return (
    <div className={styles['feature-text']}>
      <h1>{feature.name}</h1>
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
      <a className={styles.link} href={feature.link}>
        Nobis Quos
      </a>
    </div>
  );
}
