import React from 'react';
import { ThemeProvider } from '@mui/material';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Fuerza Test</h1>
    </ThemeProvider>
  );
};

export default App;
