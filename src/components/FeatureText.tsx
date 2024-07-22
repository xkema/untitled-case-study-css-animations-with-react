import styles from './FeatureText.module.css';

interface FeatureTextProps {
  name: string;
  title: string;
  description: string;
  link: string; // Assuming the link is a full URL
}

export function FeatureText({
  name,
  title,
  description,
  link,
}: FeatureTextProps) {
  return (
    <div
      className={styles['feature-text']}
      onAnimationEnd={(event) => {
        event.stopPropagation();
      }}
    >
      <span className={styles.name}>{name}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <a className={styles.link} href={link}>
        Learn More
      </a>
    </div>
  );
}
