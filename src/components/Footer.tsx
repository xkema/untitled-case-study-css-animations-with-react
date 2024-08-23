import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer>
      <p>Do not forget to add GitHub link here!</p>
      {children}
    </footer>
  );
}
