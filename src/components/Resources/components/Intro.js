import React from "react";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Infographics from "./Infographics";
import Gallery from "./Gallery";
import PdfDocuments from "./PdfDocuments";
import Videos from "./Videos";

const Intro = () => {
  const routes = [
    "/resources/infographics",
    "/resources/gallery",
    "/resources/docs",
    "/resources/videos",
  ];

  return (
    <Box>
      <Box
        marginTop={{ xs: "5%", sm: "1%" }}
        paddingBottom={"3%"}
        align={"left"}
      >
        <Typography
          variant="body1"
          component="p"
          color="#4f4f4f"
          sx={{ fontWeight: 400 }}
        >
          This page contains the additional resources of the Oluseun Onigbinde
          Resource Centre such as infographics, pictures, videos and reading
          materials.
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
                label="Infographics"
                component={RouterLink}
                value={routes[0]}
                to={routes[0]}
              />
              <Tab
                label="Gallery"
                component={RouterLink}
                value={routes[1]}
                to={routes[1]}
              />
              <Tab
                label="Documents"
                component={RouterLink}
                value={routes[2]}
                to={routes[2]}
              />
              <Tab
                label="Videos"
                component={RouterLink}
                value={routes[3]}
                to={routes[3]}
              />
            </Tabs>
          )}
        ></Route>
        <Switch>
          <Route
            exact
            path="/resources/infographics"
            component={Infographics}
          />
          <Route path="/resources/gallery" component={Gallery} />
          <Route path="/resources/docs" component={PdfDocuments} />
          <Route path="/resources/videos" component={Videos} />
        </Switch>
      </Box>
    </Box>
  );
};

export default Intro;
