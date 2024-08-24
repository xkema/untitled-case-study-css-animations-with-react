import styles from '../../src/App.module.css';
import { FeatureProps } from '../data/features';
import { BackgroundSelector } from './BackgroundSelector';
import { ParticleSelector } from './ParticleSelector';

export function Phone({ feature }: FeatureProps) {
  return (
    <div className={styles.phone}>
      <div className={styles['phone-clipper']}>
        <div className={styles['phone-background']}>
          <BackgroundSelector
            featureId={feature.id}
            featureName={feature.name}
          />
        </div>
        <div className={styles['phone-particles']}>
          <ParticleSelector featureId={feature.id} />
        </div>
      </div>
    </div>
  );
}
