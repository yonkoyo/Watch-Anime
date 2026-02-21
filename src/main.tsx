import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <>
    <MantineProvider
      theme={{
        fontFamily: 'Outfit, sans-serif',
        headings: { fontFamily: 'Outfit, sans-serif' },
        primaryColor: 'blue',
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </>,
);
