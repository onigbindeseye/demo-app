import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppBar from "@mui/material/AppBar";
import Banner from "./components/Banner";

const Blog = () => {
  return (
    <Box>
      <Helmet>
        <title> Blog | Tracka 10th Year Anniversary</title>
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
      <Box>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Blog;
