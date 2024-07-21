import styles from './App.module.css';
import { features } from './data/features';

import featureImage01 from './assets/images/feature-image-01.png';
import featureImage02 from './assets/images/feature-image-02.png';
import featureImage0201 from './assets/images/feature-image-02-01.png';
import featureImage0202 from './assets/images/feature-image-02-02.png';
import featureImage03 from './assets/images/feature-image-03.png';
import featureImage0301 from './assets/images/feature-image-03-01.png';
import featureImage0302 from './assets/images/feature-image-03-02.png';
import featureImage0303 from './assets/images/feature-image-03-03.png';
import featureImage04 from './assets/images/feature-image-04.png';
import featureImage0401 from './assets/images/feature-image-04-01.png';
import featureImage0402 from './assets/images/feature-image-04-02.png';
import featureImage05 from './assets/images/feature-image-05.png';
import featureImage0501 from './assets/images/feature-image-05-01.png';
import featureImage0502 from './assets/images/feature-image-05-02.png';
import featureImage0503 from './assets/images/feature-image-05-03.png';
import featureImage0504 from './assets/images/feature-image-05-04.png';

import featureIcon01 from './assets/images/feature-icon-01.svg';
import featureIcon02 from './assets/images/feature-icon-02.svg';
import featureIcon03 from './assets/images/feature-icon-03.svg';
import featureIcon04 from './assets/images/feature-icon-04.svg';
import featureIcon05 from './assets/images/feature-icon-05.svg';

import { useState } from 'react';

export function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <main className={styles.main}>
      {/* === container === */}
      <div>
        {/* === content === */}
        <div>
          {features.map((feature, index) => {
            return (
              // === feature ===
              <div
                key={feature.id}
                style={
                  activeContentIndex === index
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                {/* === feature text === */}
                <div>
                  <div>{feature.name}</div>
                  <div>{feature.title}</div>
                  <div>{feature.description}</div>
                  <div>
                    <a href={feature.link}>Learn More</a>
                  </div>
                </div>
                {/* === feature image === */}
                <div>
                  {index === 0 && (
                    <>
                      <img src={featureImage01} alt="feature image" />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <img src={featureImage02} alt="feature image" />
                      <img src={featureImage0201} alt="feature image" />
                      <img src={featureImage0202} alt="feature image" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <img src={featureImage03} alt="feature image" />
                      <img src={featureImage0301} alt="feature image" />
                      <img src={featureImage0302} alt="feature image" />
                      <img src={featureImage0303} alt="feature image" />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <img src={featureImage04} alt="feature image" />
                      <img src={featureImage0401} alt="feature image" />
                      <img src={featureImage0402} alt="feature image" />
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <img src={featureImage05} alt="feature image" />
                      <img src={featureImage0501} alt="feature image" />
                      <img src={featureImage0502} alt="feature image" />
                      <img src={featureImage0503} alt="feature image" />
                      <img src={featureImage0504} alt="feature image" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* === nav === */}
        <nav>
          {features.map((feature, index) => {
            return (
              <button
                key={feature.id}
                onClick={() => {
                  setActiveContentIndex(index);
                }}
              >
                {index === 0 && (
                  <>
                    <img src={featureIcon01} alt="feature icon" />
                  </>
                )}
                {index === 1 && (
                  <>
                    <img src={featureIcon02} alt="feature icon" />
                  </>
                )}
                {index === 2 && (
                  <>
                    <img src={featureIcon03} alt="feature icon" />
                  </>
                )}
                {index === 3 && (
                  <>
                    <img src={featureIcon04} alt="feature icon" />
                  </>
                )}
                {index === 4 && (
                  <>
                    <img src={featureIcon05} alt="feature icon" />
                  </>
                )}
                {feature.name}
              </button>
            );
          })}
        </nav>
      </div>
    </main>
  );
}

export default App
