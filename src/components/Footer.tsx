import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer>
      <p><a href="https://github.com/xkema/untitled-case-study-css-animations-with-react">GitHub</a></p>
      {children}
    </footer>
  );
}
