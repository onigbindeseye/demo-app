import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Award from "./components/Award";
import Scroll from "../Header/Scroll";
import Image2 from "../../assets/banner/rollup2.jpg";

const styles = {
  paperContainer: {
    height: 1000,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const About = () => {
  return (
    <Box>
      <Helmet>
        <title> The Award | BudgIT Active Citizens Awards</title>
      </Helmet>
      <Scroll>
        <AppBar
          position={"fixed"}
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
      <Box display={{ xs: "none", sm: "inline" }}>
        <Banner />
      </Box>
      <Box style={styles.paperContainer} display={{ xs: "block", sm: "none" }}>
        <Banner />
      </Box>
      <Box>
        <Container>
          <Award />
        </Container>
      </Box>
      <Box bgcolor={"#049593"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
