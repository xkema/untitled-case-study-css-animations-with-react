const baseURL = '/untitled-case-study-css-animations-with-react/';

export function Header() {
  return (
    <header>
      <h1>
        {window.location.pathname === baseURL ? (
          <a href={window.location.pathname}>Home</a>
        ) : (
          <a href={window.location.pathname}>{window.location.pathname.replace(baseURL, '/')}</a>
        )}
      </h1>
      {window.location.pathname !== baseURL && <a href="/untitled-case-study-css-animations-with-react/">&larr; back-to-home</a>}
    </header>
  );
}
