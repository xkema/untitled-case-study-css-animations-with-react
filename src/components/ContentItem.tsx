import styles from '../../src/App.module.css';
import { FeatureProps } from '../data/features';
import { FeatureText } from './FeatureText';
import { Phone } from './Phone';

export function ContentItem({ feature }: FeatureProps) {
  return (
    <div className={styles['content-item']}>
      <div className={styles['content-top-right']}>
        <FeatureText feature={feature} />
      </div>
      <div className={styles['content-bottom-left']}>
        <Phone feature={feature} />
      </div>
    </div>
  );
}
