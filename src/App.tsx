import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header/Header';

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Outfit, sans-serif',
        headings: { fontFamily: 'Outfit, sans-serif' },
      }}
    >
      <Header />
    </MantineProvider>
  );
}

export default App;
