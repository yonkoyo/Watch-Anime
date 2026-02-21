import { Center, Paper } from '@mantine/core';
import type { ReactNode } from 'react';
import styles from './AuthLayout.module.css';

type AuthLayoutProps = {
  children: ReactNode;
  height?: number;
};

export function AuthLayout({ children, height = 360 }: AuthLayoutProps) {
  return (
    <div className={styles.AuthLayout}>
      <Center h="100%">
        <Paper
          radius="xl"
          p="xl"
          w={350}
          bg="#1e293b"
          style={{
            minHeight: height,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
        </Paper>
      </Center>
    </div>
  );
}
