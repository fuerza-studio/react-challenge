import React from 'react';
import {
  ThemeProvider,
  Box,
  CssBaseline,
  styled,
  BoxProps,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './PrivateRoute';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import NoMatch from './routes/NoMatch';
import JournalsHome from './routes/Journals/JournalsHome';
import AddJournal from './routes/Journals/AddJournal';
import PostsHome from './routes/Posts/PostsHome';
import AddPost from './routes/Posts/AddPost';

import theme from './theme';

import ScreenBgImg from './assets/screen-bg-img.png';

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
              <Route
                path=""
                element={<PrivateRoute component={JournalsHome} />}
              />
              <Route
                path="create"
                element={<PrivateRoute component={AddJournal} />}
              />
              <Route path=":journalId">
                <Route index element={<Navigate to="posts" />} />
                <Route path="posts">
                  <Route
                    index
                    element={<PrivateRoute component={PostsHome} />}
                  />
                  <Route
                    path="create"
                    element={<PrivateRoute component={AddPost} />}
                  />
                  {/* <Route path=":postId"> */}
                  {/* </Route> */}
                </Route>
              </Route>
            </Route>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/journals" />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Box>
      </Background>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
