import styles from './App.module.css';
import { features } from './data/features';
import { useState } from 'react';
import { FeatureText } from './components/FeatureText';
import { FeatureImage } from './components/FeatureImage';
import { NavButton } from './components/NavButton';

export function App() {
  const [activeContentId, setActiveContentId] = useState('document-scanner');

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          {features.map((feature) => {
            return (
              activeContentId === feature.id && (
                <div className={`${styles.feature}`} key={feature.id}>
                  <FeatureText
                    name={`${feature.name}`}
                    title={feature.title}
                    description={feature.description}
                    link={feature.link}
                  />
                  <FeatureImage id={feature.id} />
                </div>
              )
            );
          })}
        </div>
        <nav className={styles.nav}>
          {features.map((feature) => {
            return (
              <div className={styles.item} key={feature.id}>
                <NavButton
                  name={feature.name}
                  id={feature.id}
                  activeContentId={activeContentId}
                  setActiveContentId={setActiveContentId}
                />
              </div>
            );
          })}
        </nav>
      </div>
    </main>
  );
}

export default App
