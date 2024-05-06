import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import AppBar from "@mui/material/AppBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Details from "./components/Details";
import Gallery from "./components/Gallery";

const Literacy2023 = () => {
  return (
    <Box>
      <Helmet>
        <title>
          {" "}
          Oluseun Onigbinde Literacy Awards 2.0 | Oluseun Onigbinde Resource
          Centre
        </title>
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
        <Container>
          <Banner />
        </Container>
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Details />
        </Container>
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Gallery />
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

export default Literacy2023;
