import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { SignUp } from './pages/AuthPages/SignUp';
import { Header } from './components/Header/Header';
import { LogIn } from './pages/AuthPages/LogIn';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Footer } from './components/Footer/Footer';
import { AnimePage } from './pages/AnimePage/AnimePage';

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Outfit, sans-serif',
        headings: { fontFamily: 'Outfit, sans-serif' },
      }}
    >
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/anime/:id" element={<AnimePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
