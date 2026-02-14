import type { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {children}
    </div>
  );
}
