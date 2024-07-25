// src/App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";
import Header from "./components/Header";
import Controls from "./components/Controls";
import BreatheCircle from "./components/BreatheCircle";
import Footer from "./components/Footer";
import 'bulma/css/bulma.min.css';

function App() {
  // Handle light and dark themes
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Handle Meditation
  const [isMeditating, setIsMeditating] = useState(false);
  const [meditationSound, setMeditationSound] = useState("");
  const [meditationTime, setMeditationTime] = useState(0);

  const startMeditation = (sound, time) => {
    setMeditationSound(sound);
    setMeditationTime(time);
    setIsMeditating(true);
  };

  const endMeditation = () => {
    setIsMeditating(false);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Header />
          {isMeditating ? (
            <BreatheCircle
              time={meditationTime}
              sound={meditationSound}
              endMeditation={endMeditation}
            />
          ) : (
            <Controls
              themeToggler={themeToggler}
              startMeditation={startMeditation}
              theme={theme}
            />
          )}
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
