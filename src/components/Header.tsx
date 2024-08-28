export function Header() {
  return (
    <header>
      <h1>
        {window.location.pathname === '/' ? (
          <a href={window.location.pathname}>Home</a>
        ) : (
          <a href={window.location.pathname}>{window.location.pathname}</a>
        )}
      </h1>
      {window.location.pathname !== '/' && <a href="/">&larr; back-to-home</a>}
    </header>
  );
}
