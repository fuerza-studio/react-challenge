import React from 'react';
import {
  ThemeProvider,
  Box,
  CssBaseline,
  styled,
  BoxProps,
} from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import NoMatch from './routes/NoMatch';

import theme from './theme';

import ScreenBgImg from './assets/screen-bg-img.png';

const Background = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '100vh',
  backgroundImage: `url(${ScreenBgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0px 50px',
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        <Box sx={{ padding: '30px' }}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Box>
      </Background>
    </ThemeProvider>
  );
};

export default App;
