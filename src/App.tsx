import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header/Header';

function App() {
  return (
    <MantineProvider>
      <Header />
    </MantineProvider>
  );
}

export default App;
