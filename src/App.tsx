import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import styles from './App.module.css';

import { Routes, Route } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import { MainPage } from '@/pages/MainPage/MainPage';
import { SignUp } from '@/pages/AuthPages/SignUp';
import { LogIn } from '@/pages/AuthPages/LogIn';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { AnimePage } from '@/pages/AnimePage/AnimePage';
import { SocialPage } from '@/pages/SocialPage/SocialPage';
import { WatchPage } from '@/pages/WatchPage/WatchPage';

function App() {
  return (
    <AppShell className={styles.App}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/social" element={<SocialPage />} />
        </Routes>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}

export default App;
