import { useState } from 'react';
import styles from '../../src/App.module.css';
import { Button } from '../../src/components/Button';
import { FeatureText } from '../../src/components/FeatureText';
import { Footer } from '../../src/components/Footer';
import { Header } from '../../src/components/Header';
import { Phone } from '../../src/components/Phone';
import { features } from '../../src/data/features';

export function App() {
  const [activeId, setActiveId] = useState('825cc467');

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          {features.map(
            (feature) =>
              feature.id === activeId && (
                <div key={feature.id} className={styles['content-item']}>
                  <div className={styles['content-top-right']}>
                    <FeatureText feature={feature} />
                  </div>
                  <div className={styles['content-bottom-left']}>
                    <Phone feature={feature} />
                  </div>
                </div>
              ),
          )}
        </div>
        <div className={styles.navigation}>
          {features.map((feature) => (
            <div key={feature.id} className={styles['navigation-item']}>
              <Button
                feature={feature}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
