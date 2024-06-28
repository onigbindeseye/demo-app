import React from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Story from "./components/Story";
import Festival from "./components/Festival";
import About from "./components/About";

const theme = createTheme({
  typography: {
    fontFamily: {
      fontFamily: "Quicksand",
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/active-citizens-festival"
              component={Festival}
            />
            <Route exact path="/our-success-stories" component={Story} />
            <Route exact path="/about-tracka" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
