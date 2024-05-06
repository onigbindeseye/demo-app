import React from "react";
import "./App.css";
import "./fonts/Gilroy-Light.ttf";
import "./fonts/Gilroy-Regular.ttf";
import "./fonts/PolySansTrial-Bulky.otf";
import "./fonts/PolySansTrial-Median.otf";
import "./fonts/PolySansTrial-Neutral.otf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Tech from "./components/Tech";
import Loyola from "./components/Loyola";
import Medical from "./components/Medical";
import Literacy2022 from "./components/Literacy2022";
import Literacy2023 from "./components/Literacy2023";
import Scholarship from "./components/Scholarship";
import Blog from "./components/Blog";
import Opening from "./components/Opening";

const theme = createTheme({
  typography: {
    fontFamily: {
      fontFamily: "GilroyLight",
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/official-launching-of-oluseun-onigbinde-resource-centre"
              component={Opening}
            />
            <Route
              exact
              path="/oluseun-onigbinde-annual-scholarship"
              component={Scholarship}
            />
            <Route
              exact
              path="/oluseun-onigbinde-literacy-awards-2023"
              component={Literacy2023}
            />
            <Route
              exact
              path="/oluseun-onigbinde-literacy-awards-2022"
              component={Literacy2022}
            />
            <Route
              exact
              path="/ogbomosho-free-medical-outreach"
              component={Medical}
            />
            <Route
              exact
              path="/oluseun-onigbinde-tech-fellowship"
              component={Tech}
            />
            <Route
              exact
              path="/loyola-college-technology-lab"
              component={Loyola}
            />
            <Route exact path="/our-events" component={Events} />
            <Route exact path="/who-we-are" component={About} />
            <Route exact path="/what-we-do" component={Programs} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
