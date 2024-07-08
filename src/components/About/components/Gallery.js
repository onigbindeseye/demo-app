import React from "react";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Townhalls from "./Townhalls";
import Champions from "./Champions";
import Projects from "./Projects";
import Officers from "./Officers";

const Gallery = () => {
  const routes = [
    "/about-tracka/townhalls",
    "/about-tracka/projects-tracked",
    "/about-tracka/community-champions",
    "/about-tracka/state-officers",
  ];

  return (
    <Box>
      <Box
        marginTop={{ xs: "5%", sm: "1%" }}
        paddingBottom={{ xs: "5%", sm: "3%" }}
        align={"left"}
      >
        <Typography
          variant="h3"
          color="#F89521"
          sx={{ fontWeight: 700 }}
          paddingBottom={{ xs: "5%", sm: "3%" }}
        >
          Photo Gallery
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="#025066"
          sx={{ fontWeight: 400 }}
          paddingBottom={{ xs: "3%", sm: "2%" }}
        >
          This section contains some images of our community town hall meetings,
          government projects tracked, our Community Champions and our State
          Officers.
        </Typography>
        <Typography variant="body1" color="#B84028" sx={{ fontWeight: 700 }}>
          Click on the Tabs to view images.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Route
          path="/"
          render={(history) => (
            <Tabs
              value={
                history.location.pathname !== "/"
                  ? history.location.pathname
                  : false
              }
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="Townhalls"
                component={RouterLink}
                value={routes[0]}
                to={routes[0]}
              />
              <Tab
                label="Projects Tracked"
                component={RouterLink}
                value={routes[1]}
                to={routes[1]}
              />
              <Tab
                label="Community Champions"
                component={RouterLink}
                value={routes[2]}
                to={routes[2]}
              />
              <Tab
                label="State Officers"
                component={RouterLink}
                value={routes[3]}
                to={routes[3]}
              />
            </Tabs>
          )}
        ></Route>
        <Switch>
          <Route path="/about-tracka/townhalls" component={Townhalls} />
          <Route path="/about-tracka/projects-tracked" component={Projects} />
          <Route
            path="/about-tracka/community-champions"
            component={Champions}
          />
          <Route path="/about-tracka/state-officers" component={Officers} />
        </Switch>
      </Box>
    </Box>
  );
};

export default Gallery;
