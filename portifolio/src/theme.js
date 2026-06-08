import { createTheme } from '@mui/material/styles';
import { colors } from './constants';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.accent,
    },
    background: {
      default: colors.bgBase,
      paper: colors.bgSurface,
    },
    text: {
      primary: colors.text,
      secondary: colors.textMuted,
    },
    divider: colors.border,
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: 'Poppins, Inter, Roboto, sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': {
        fontSize: '2.15rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.85rem',
      },
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.35rem',
      '@media (max-width:600px)': {
        fontSize: '1.15rem',
      },
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: 12,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:0px)': {
            paddingLeft: 16,
            paddingRight: 16,
          },
          '@media (min-width:600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 22px',
        },
        containedPrimary: {
          boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.5)',
          },
        },
        outlined: {
          borderColor: 'rgba(248, 250, 252, 0.35)',
          '&:hover': {
            borderColor: colors.accent,
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
          },
        },
        sizeLarge: {
          '@media (min-width:600px)': {
            width: 'auto',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
