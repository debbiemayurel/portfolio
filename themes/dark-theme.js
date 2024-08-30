import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid';

export const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff014f',
      theme: '##ff014f'
    },
    secondary: {
      main: '#5f6cdd'
    }
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Define la fuente por defecto aquí
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
          fontFamily: 'Poppins, Arial, sans-serif', // Aplica la fuente Poppins
        },
        h2: {
          fontSize: 20,
          fontWeight: 400,
          fontFamily: 'Poppins, Arial, sans-serif', // Aplica la fuente Poppins
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600,
          fontFamily: 'Poppins, Arial, sans-serif', // Aplica la fuente Poppins
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        InputLabelProps: { shrink: true },
      },
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, Arial, sans-serif', // Aplica la fuente Poppins
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 1,
          fontFamily: 'Poppins, Arial, sans-serif', // Aplica la fuente Poppins
          ":hover": {
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
          fontFamily: 'Poppins, Arial, sans-serif', // Aplica la fuente Poppins
        }
      }
    }
  }
}, esES);