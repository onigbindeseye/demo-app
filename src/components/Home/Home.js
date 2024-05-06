import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import AppBar from "@mui/material/AppBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./components/Banner1";
import Image2 from "../../assets/banner/banner1.jpg";
import Programs from "./components/Programs";
import About from "./components/About";
import Events from "./components/Events";

const Home = () => {
  return (
    <Box>
      <Helmet>
        <title> Homepage | Oluseun Onigbinde Resource Centre</title>
      </Helmet>

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
      <Box bgcolor={"#F6F5F5"}>
        <Banner />
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <About />
        </Container>
      </Box>
      <Box bgcolor={"#050C4C"}>
        <Container>
          <Events />
        </Container>
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Programs />
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

export default Home;
