import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Scroll from "../Header/Scroll";
import Banner from "./components/Banner";
import About from "./components/About";
import Activities from "./components/Activities";
import Activities2 from "./components/Activities2";
import Activities3 from "./components/Activities3";

const Festival = () => {
  return (
    <Box>
      <Helmet>
        <title> Active Citizens' Festival | Tracka 10th Year Anniversary</title>
      </Helmet>
      <Scroll>
        <AppBar position={"fixed"} elevation={0}>
          <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
            <Header />
          </Container>
        </AppBar>
      </Scroll>
      <Box>
        <Banner />
      </Box>
      <Box bgcolor={"#025066"}>
        <Container>
          <About />
        </Container>
      </Box>
      <Box>
        <Container>
          <Activities />
          <Activities2 />
          <Activities3 />
        </Container>
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Festival;
