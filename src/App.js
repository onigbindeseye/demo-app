import React from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Resources from "./components/Resources";
import Contact from "./components/Contact";

const theme = createTheme({
  typography: {
    fontFamily: {
      fontFamily: "Noto Sans",
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route path="/contact-us" component={Contact} />
            <Route path="/resources" component={Resources} />
            <Route exact path="/trash-calculator" component={Calculator} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
