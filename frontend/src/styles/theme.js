import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#19485D',      // deep teal for app bar, footers
      light: '#2b6c8a',
      dark: '#0e2f3d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#70CB97',      // green for CTAs
      light: '#8fd6b0',
      dark: '#4caa74',
      contrastText: '#ffffff',
    },
    accent: {
      blue: '#73C4E7',
      yellow: '#E7C727',
      pink: '#DD77D6',
    },
    background: {
      default: '#f4f7f9',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e2a32',
      secondary: '#5a6e7a',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
          padding: '8px 24px',
        },
        containedPrimary: {
          backgroundColor: '#19485D',
          '&:hover': { backgroundColor: '#0e2f3d' },
        },
        containedSecondary: {
          backgroundColor: '#70CB97',
          '&:hover': { backgroundColor: '#5cb67f' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#19485D',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;