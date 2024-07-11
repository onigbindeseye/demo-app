import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Impact from "./components/Impact";
import Townhall from "./components/Townhall";
import Projects from "./components/Projects";
import Champions from "./components/Champions";

const About = () => {
  return (
    <Box>
      <Helmet>
        <title> About Tracka | Tracka 10th Year Anniversary</title>
      </Helmet>
      <AppBar
        position={"sticky"}
        elevation={0}
        padding={"5px 0px"}
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box>
        <Container>
          <Banner />
        </Container>
      </Box>
      <Box>
        <Container>
          <Intro />
        </Container>
      </Box>
      <Box bgcolor={"#025066"}>
        <Container>
          <Impact />
        </Container>
      </Box>
      <Box>
        <Townhall />
      </Box>
      <Box>
        <Projects />
      </Box>
      <Box>
        <Champions />
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
