import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import AppBar from "@mui/material/AppBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Intro from "./components/Intro";
import Banner from "./components/Banner";

const Resources = () => {
  return (
    <Box>
      <Helmet>
        <title> Our Resources | Eco-Cyclers</title>
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
        <Banner />
      </Box>
      <Box>
        <Container>
          <Intro />
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

export default Resources;
