export function Header() {
  return (
    <header>
      <h1>
        <a href={window.location.pathname}>{window.location.pathname}</a>
      </h1>
      <a href="/">&larr; back-to-home</a>
    </header>
  );
}
