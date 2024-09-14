
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@/themes';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/styles.css'; // Importa el archivo CSS global


function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default App;