import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import TranslateComponent from "./components/translate.component";
import { darkTheme, GlobalStyle, lightTheme } from "./styles/theme";
import { withTranslation } from "react-i18next";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <p className="clickable" onClick={toggleTheme}>
          change theme
        </p>
        <TranslateComponent></TranslateComponent>
      </div>
    </ThemeProvider>
  );
};

export default withTranslation()(App);
