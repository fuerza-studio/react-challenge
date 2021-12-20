import React from 'react';
import {
  ThemeProvider,
  Box,
  CssBaseline,
  styled,
  BoxProps,
} from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import NoMatch from './routes/NoMatch';

import theme from './theme';

import ScreenBgImg from './assets/screen-bg-img.png';
import JournalsHome from './routes/Journals/JournalsHome';
import AddJournal from './routes/Journals/AddJournal';

const Background = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '100%',
  minHeight: '100vh',
  backgroundImage: `url(${ScreenBgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0px 42px',
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        <Box sx={{ padding: '42px 30px' }}>
          <Routes>
            <Route path="journals">
              <Route path="" element={<JournalsHome />} />
              <Route path="create" element={<AddJournal />} />
            </Route>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/journals" />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Box>
      </Background>
    </ThemeProvider>
  );
};

export default App;
