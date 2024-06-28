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
import Image2 from "../../assets/banner/rollup.jpg";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";

const styles = {
  paperContainer: {
    height: 1000,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const Home = () => {
  return (
    <Box>
      <Helmet>
        <title> Homepage | Tracka 10th Year Anniversary</title>
      </Helmet>
      <Scroll>
        <AppBar position={"fixed"} elevation={0}>
          <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
            <Header />
          </Container>
        </AppBar>
      </Scroll>
      <Box display={{ xs: "none", sm: "inline" }}>
        <Banner />
      </Box>
      <Box style={styles.paperContainer} display={{ xs: "block", sm: "none" }}>
        <Banner />
      </Box>
      <Box bgcolor={"#025066"}>
        <Container>
          <About />
        </Container>
      </Box>
      <Box>
        <Impact />
      </Box>
      <Box bgcolor={"#F89521"}>
        <Container>
          <Gallery />
        </Container>
      </Box>
      <Box bgcolor={"#025066"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
