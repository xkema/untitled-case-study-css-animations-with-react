import styles from './App.module.css'

function App() {
  return (
    <>
      <main className={styles.main}>
        <ol>
          <li>
            <a href="/demos/css-without-unmounting/">
              /demos/css-without-unmounting/
            </a>
          </li>
          <li>
            <a href="/demos/css-with-unmounting/">
              /demos/css-with-unmounting/
            </a>
          </li>
          <li>
            <a href="/demos/framer-motion/">/demos/framer-motion/</a>
          </li>
          <li>
            <a href="/demos/react-transition-group/">
              /demos/react-transition-group/
            </a>
          </li>
        </ol>
      </main>
    </>
  );
}

export default App
