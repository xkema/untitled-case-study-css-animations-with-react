import styles from '../../src/App.module.css';
import { BackgroundSelector } from '../../src/components/BackgroundSelector';
import { ButtonIconSelector } from '../../src/components/ButtonIconSelector';
import { FeatureText } from '../../src/components/FeatureText';
import { Footer } from '../../src/components/Footer';
import { Header } from '../../src/components/Header';
import { ParticleSelector } from '../../src/components/ParticleSelector';
import { features } from '../../src/data/features';

export function App() {
  return (
    <div className={styles.container}>
      <Header>
        <a href="/demos/abstract-version/">/demos/abstract-version/</a>
      </Header>

      <main className={styles.main}>
        <div className={styles.content}>
          {features.map((feature) => (
            <div key={feature.id} className={styles['content-item']}>
              <div className={styles['content-top-right']}>
                <FeatureText feature={feature} />
              </div>
              <div className={styles['content-bottom-left']}>
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
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigation}>
          {features.map((feature) => (
            <div key={feature.id} className={styles['navigation-item']}>
              <button className={styles['navigation-button']}>
                <span className={styles['navigation-button-icon']}>
                  <ButtonIconSelector
                    featureId={feature.id}
                    featureName={feature.name}
                  />
                </span>
                <span className={styles['navigation-button-text']}>
                  {feature.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
