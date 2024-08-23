import styles from '../../src/App.module.css';

interface FeatureTextProps {
  feature: {
    name: string;
    title: string;
    description: string;
    link: string;
  };
}

export function FeatureText({ feature }: FeatureTextProps) {
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
