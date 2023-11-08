import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Scroll from "../Header/Scroll";
import Banner from "./components/Banner1";
import About from "./components/About";
import Image2 from "../../assets/banner/banner9.jpg";
import Services from "./components/Services";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";

const styles = {
  paperContainer: {
    height: 800,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const Home = () => {
  return (
    <Box>
      <Helmet>
        <title> Homepage | Forefront Africa</title>
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
      <Box>
        <Container>
          <About />
        </Container>
      </Box>
      <Box>
        <Highlights />
      </Box>
      <Box bgcolor={"#F2FFE9"}>
        <Container>
          <Services />
        </Container>
      </Box>
      <Box>
        <Contact />
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
