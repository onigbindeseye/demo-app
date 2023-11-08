import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../Footer";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Scroll from "../Header/Scroll";
import Image2 from "../../assets/banner/banner3.jpg";
import Vision from "./components/Vision";

const styles = {
  paperContainer: {
    height: 350,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const About = () => {
  return (
    <Box>
      <Helmet>
        <title> About Us | Forefront Africa</title>
      </Helmet>
      <Scroll>
        <AppBar
          position={"sticky"}
          elevation={0}
          sx={{
            padding: "10px 0px",
          }}
        >
          <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
            <Header />
          </Container>
        </AppBar>
      </Scroll>
      {/* <Box display={{ xs: "none", sm: "inline" }}>
        <Banner />
      </Box> */}
      <Box style={styles.paperContainer}>
        <Container>
          <Banner />
        </Container>
      </Box>
      <Box>
        <Container>
          <Intro />
        </Container>
      </Box>
      <Box>
        <Vision />
      </Box>
      <Box>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
