import { motion } from 'framer-motion';
import styles from '../../src/App.module.css';

import aaa from '../../src/assets/images/particles/export-01-arrow-130x156.png';
import bbb from '../../src/assets/images/particles/export-02-pdf-130x156.png';
import ccc from '../../src/assets/images/particles/export-03-jpg-130x156.png';
import ddd from '../../src/assets/images/particles/export-04-txt-130x156.png';
import { useState } from 'react';
import { relative } from 'path';

export function App() {
  const [rotate, setRotate] = useState(!false);

  return (
    <>
      <header>
        <h1>/demos/framer-motion/</h1>
        <a href="/">back-to-home</a>
        <hr />
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div
            className={`${styles['moving-element']} ${rotate && styles['moving-element-animation']}`}
          ></div>
        </div>

        <div className={styles.container}>
          <motion.div
            initial={{
              offsetPath: `circle(25% at 0% 0%)`,
              offsetDistance: '25%',
              offsetRotate: '0deg',
            }}
            animate={{
              offsetPath: `circle(25% at 0% 0%)`,
              offsetDistance: '0%',
              offsetRotate: '45deg',
            }}
            transition={{ duration: 1, ease: 'linear' }}
            className={styles.box}
          >
            <img src={ccc} alt="ccc" />
          </motion.div>
        </div>

        <hr />

        <button onClick={() => setRotate((p) => !p)}>toggle rotate</button>
      </main>
    </>
  );
}
