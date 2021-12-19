import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#F8E5D6',
      main: '#834825',
      dark: '#804627',
    },
    secondary: {
      light: '#B8E5E3',
      main: '#5091D6',
      dark: '#3B4E8D',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Abhaya Libre'].join(','),
  },
});

export default theme;
