import type { ReactNode } from 'react';
import styles from './PageLayout.module.css';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return <div className={styles.PageLayout}>{children}</div>;
}
