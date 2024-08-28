import { motion } from 'framer-motion';
import styles from '../../src/App.module.css';
import { FeatureProps } from '../data/features';
import { BackgroundSelector } from './BackgroundSelector';
import { ParticleSelector } from './ParticleSelector';

export function Phone({ feature }: FeatureProps) {
  return (
    <motion.div
      className={styles.phone}
      initial={{ y: '80%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
}
