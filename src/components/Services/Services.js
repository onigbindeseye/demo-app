import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../Footer";
import Banner from "./components/Banner";
import Scroll from "../Header/Scroll";
import Image2 from "../../assets/images/forest3.jpg";
import Carbon from "./components/Carbon";
import Green from "./components/Green";
import Climate from "./components/Climate";
import Energy from "./components/Energy";
import Intro from "./components/Intro";

const styles = {
  paperContainer: {
    height: 350,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const Services = () => {
  return (
    <Box>
      <Helmet>
        <title> Our Services | Forefront Africa</title>
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
        <Container>
          <Carbon />
          <Green />
          <Climate />
          <Energy />
        </Container>
      </Box>
      <Box>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
