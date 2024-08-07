import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import SuccessStory from "./components/SuccessStory";
import Intro from "./components/Intro";
import Mentions from "./components/Mentions";

const Story = () => {
  return (
    <Box>
      <Helmet>
        <title> Our Success Story | Tracka 10th Year Anniversary</title>
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
        <Container>
          <Banner />
        </Container>
      </Box>
      {/* <Box style={styles.paperContainer} display={{ xs: "block", sm: "none" }}>
        <Banner />
      </Box> */}
      <Box>
        <Container>
          <Intro />
          <SuccessStory />
        </Container>
      </Box>
      <Box bgcolor={"#025066"}>
        <Container>
          <Mentions />
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

export default Story;
