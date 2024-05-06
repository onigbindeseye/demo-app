import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import AppBar from "@mui/material/AppBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Image2 from "../../assets/banner/banner1.jpg";
import Intro from "./components/Intro";
import Founder from "./components/Founder";
import Impact from "./components/Impact";

const styles = {
  paperContainer: {
    height: 700,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const About = () => {
  return (
    <Box>
      <Helmet>
        <title> About Us | Oluseun Onigbinde Resource Centre</title>
      </Helmet>
      {/* <Scroll> */}
      <AppBar
        position={"sticky"}
        elevation={0}
        padding={"5px 0px"}
        sx={{
          backgroundColor: "#F6F5F5",
        }}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      {/* </Scroll> */}
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Banner />
        </Container>
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Intro />
        </Container>
      </Box>
      <Box bgcolor={"#071783"}>
        <Container>
          <Impact />
        </Container>
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Founder />
        </Container>
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
