import React from "react";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Infographics from "./Infographics";
import Gallery from "./Gallery";
import PdfDocuments from "./PdfDocuments";
import Videos from "./Videos";

const Intro = () => {
  const routes = [
    "/resources/gallery",
    "/resources/infographics",
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
          color="#000"
          sx={{ fontWeight: 400 }}
        >
          This page contains the additional resources of the Eco-Cyclers such as
          infographics, pictures, videos and reading materials.
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
              sx={{
                color: "#3CAB34",
                borderColor: "#3CAB34",
              }}
            >
              <Button
                variant={"outlined"}
                label="Photo Gallery"
                component={RouterLink}
                value={routes[0]}
                to={routes[0]}
                sx={{
                  color: "#3CAB34",
                  borderColor: "#3CAB34",
                  marginRight: "2%",
                  "&:hover": {
                    color: "#3CAB34",
                    borderColor: "#9ACB34",
                  },
                }}
              >
                Photo Gallery
              </Button>
              <Button
                variant={"outlined"}
                label="Infographic"
                component={RouterLink}
                value={routes[1]}
                to={routes[1]}
                sx={{
                  color: "#3CAB34",
                  borderColor: "#3CAB34",
                  marginRight: "2%",
                  "&:hover": {
                    color: "#3CAB34",
                    borderColor: "#9ACB34",
                  },
                }}
              >
                Infographic
              </Button>

              <Button
                variant={"outlined"}
                label="Documents"
                component={RouterLink}
                value={routes[2]}
                to={routes[2]}
                sx={{
                  color: "#3CAB34",
                  borderColor: "#3CAB34",
                  marginRight: "2%",
                  "&:hover": {
                    color: "#3CAB34",
                    borderColor: "#9ACB34",
                  },
                }}
              >
                Documents
              </Button>
              <Button
                variant={"outlined"}
                label="Videos"
                component={RouterLink}
                value={routes[3]}
                to={routes[3]}
                sx={{
                  color: "#3CAB34",
                  borderColor: "#3CAB34",
                  "&:hover": {
                    color: "#3CAB34",
                    borderColor: "#9ACB34",
                  },
                }}
              >
                Videos
              </Button>
            </Tabs>
          )}
        ></Route>
        <Switch>
          <Route path="/resources/gallery" component={Gallery} />
          <Route
            exact
            path="/resources/infographics"
            component={Infographics}
          />
          <Route path="/resources/docs" component={PdfDocuments} />
          <Route path="/resources/videos" component={Videos} />
        </Switch>
      </Box>
    </Box>
  );
};

export default Intro;
