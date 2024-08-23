import styles from './App.module.css'
import { Footer } from './components/Footer';

function App() {

  return (
    <div className={styles.container}>
      <header>
        <h1>Case Study | CSS Animations</h1>
      </header>

      <main className={styles.main}>
        <ol>
          <li>
            <a href="/demos/abstract-version/">/demos/abstract-version/</a>
          </li>
          {/* <li>
            <a href="/demos/css-without-unmounting/">
              /demos/css-without-unmounting/
            </a>
          </li> */}
          {/* <li>
            <a href="/demos/css-with-unmounting/">
              /demos/css-with-unmounting/
            </a>
          </li> */}
          {/* <li>
            <a href="/demos/framer-motion/">/demos/framer-motion/</a>
          </li> */}
          {/* <li>
            <a href="/demos/react-transition-group/">
              /demos/react-transition-group/
            </a>
          </li> */}
        </ol>
      </main>

      <Footer />
    </div>
  );

}

export default App
