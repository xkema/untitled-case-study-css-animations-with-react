import { motion } from 'framer-motion';
import styles from '../../src/App.module.css';
import { FeatureProps } from '../data/features';

export function FeatureText({ feature }: FeatureProps) {
  return (
    <motion.div
      className={styles['feature-text']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      <h1>{feature.name}</h1>
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
      <a className={styles.link} href={feature.link}>
        Nobis Quos
      </a>
    </motion.div>
  );
}
