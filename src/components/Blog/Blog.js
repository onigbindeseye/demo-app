import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppBar from "@mui/material/AppBar";
import Banner from "./components/Banner";
import BlogPosts from "./components/BlogPosts";
import Scroll from "../Header/Scroll";

const Blog = () => {
  return (
    <Box>
      <Helmet>
        <title> Blog | BudgIT Active Citizens Awards</title>
      </Helmet>
      <Scroll>
        <AppBar position={"fixed"} elevation={0}>
          <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
            <Header />
          </Container>
        </AppBar>
      </Scroll>
      <Box>
        <Container>
          <Banner />
        </Container>
      </Box>
      <Box>
        <Container>
          <BlogPosts />
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

export default Blog;
