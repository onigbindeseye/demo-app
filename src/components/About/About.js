import React from "react";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Image from "../../assets/images/lautech3.jpg";
import Intro from "./components/Intro";
import History from "./components/History";

const styles = {
  paperContainer: {
    height: 450,
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const About = () => {
  const theme = useTheme();
  return (
    <Box>
      <Helmet>
        <title> About Ogbomoso | Ogbomoso Sons & Daughters</title>
      </Helmet>
      <AppBar
        position={"fixed"}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box style={styles.paperContainer}>
        <Banner />
      </Box>
      <Box>
        <Container>
          <Intro />
        </Container>
      </Box>
      <Box>
        <Container>
          <History />
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

export default About;
