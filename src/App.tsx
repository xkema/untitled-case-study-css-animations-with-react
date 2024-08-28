import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { features } from './data/features';
import { ContentItem } from './components/ContentItem';
import { Button } from './components/Button';
import { Footer } from './components/Footer';

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
                <div
                  className={styles['content-item-wrapper']}
                  key={feature.id}
                >
                  <ContentItem feature={feature} />
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

export default App
