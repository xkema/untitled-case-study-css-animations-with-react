import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <h1>{children}</h1>
      <a href="/">&larr; back-to-home</a>
    </header>
  );
}
