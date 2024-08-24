import styles from '../../src/App.module.css';
import { Button } from '../../src/components/Button';
import { FeatureText } from '../../src/components/FeatureText';
import { Footer } from '../../src/components/Footer';
import { Header } from '../../src/components/Header';
import { Phone } from '../../src/components/Phone';
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
                <Phone feature={feature} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigation}>
          {features.map((feature) => (
            <div key={feature.id} className={styles['navigation-item']}>
              <Button feature={feature} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
