import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import AppBar from "@mui/material/AppBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Youth from "./components/Youth";
import Educational from "./components/Educational";
import Community from "./components/Community";
import Business from "./components/Business";

const Programs = () => {
  return (
    <Box>
      <Helmet>
        <title> Our Programs | Oluseun Onigbinde Resource Centre</title>
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
      <Box bgcolor={"#050C4C"}>
        <Educational />
      </Box>
      <Box bgcolor={"#071783"}>
        <Community />
      </Box>
      <Box bgcolor={"#071783"}>
        <Youth />
      </Box>
      <Box bgcolor={"#071783"}>
        <Business />
      </Box>
      <Box bgcolor={"#F6F5F5"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Programs;
