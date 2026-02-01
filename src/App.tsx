import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { SignUp } from './pages/AuthPages/SignUp';
import { Header } from './components/Header/Header';
import { LogIn } from './pages/AuthPages/LogIn';

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Outfit, sans-serif',
        headings: { fontFamily: 'Outfit, sans-serif' },
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
