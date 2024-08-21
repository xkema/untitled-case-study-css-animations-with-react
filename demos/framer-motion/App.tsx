import styles from '../../src/App.module.css';
import { features } from '../../src/data/features';

import phoneBackground from '../../src/assets/images/phone-background-366-742.png';
import { ParticleSelector } from '../../src/components/ParticleSelector';
import { ForegroundSelector } from '../../src/components/ForegroundSelector';
import { ButtonIconSelector } from '../../src/components/ButtonIconSelector';

/*

ORCHESTRATTION:

- (hover) [nav link]
  - {async} animation START [nav link] border visibility {from transparent to blue}
- (click) [nav link]
  - {async} animation START [nav link] icon border {percentage filling}
  - {sync} animation START [content] current content {fades out with [particles]}
  - {sync} animation END [content] current content {fades out with [particles]}
  - {sync} animation START [content] new content {fades in}
  - {sync} animation END [content] new content {fades in}
  - {sync} animation START [phone] {enters screen from bottom}
  - {async} animation END [nav link] icon border {percentage filling}
  - {sync} animation END [phone] {custom}
  - {sync} animation START [particles] {custom}
  - {sync} animation END [particles] {custom}

*/

export function App() {
  return (
    <>
      <header>
        <h1>/demos/framer-motion/</h1>
        <a href="/">back-to-home</a>
        <hr />
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            {features.map((feature) => (
              <div key={feature.id} className={styles['content-item']}>
                <div className={styles['content-top-right']}>
                  <div className={styles['feature-text']}>
                    <h1>{feature.name}</h1>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                    <a className={styles.link} href={feature.link}>
                      Nobis Quos
                    </a>
                  </div>
                </div>
                <div className={styles['content-bottom-left']}>
                  <div className={styles['phone-clipper']}>
                    <div className={styles.phone}>
                      <div className={styles['phone-front']}>
                        <div className={styles['phone-background']}>
                          <img
                            src={phoneBackground}
                            alt="Phone Background Image"
                          />
                          <div className={styles['phone-foreground']}>
                            <ForegroundSelector
                              featureId={feature.id}
                              featureName={feature.name}
                            />
                          </div>
                        </div>
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
        </div>
      </main>
    </>
  );
}
