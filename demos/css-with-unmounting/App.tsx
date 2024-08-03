import styles from '../../src/App.module.css';

export function App() {
  return (
    <>
      <header>
        <h1>/demos/css-with-unmounting/</h1>
        <a href="/">back-to-home</a>
        <hr />
      </header>

      <main className={styles.main}></main>
    </>
  );
}
