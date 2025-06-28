import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7158e2',
    },
    secondary: {
      main: '#4e9df1',
    },
    background: {
      default: '#f3f4f6',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
