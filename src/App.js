// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';
import Header from './components/Header';
import Controls from './components/Controls';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Header />
          <Controls themeToggler={themeToggler} />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
