import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "../../common/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactDetails from "./components/ContactDetails";
import Banner from "./components/Banner";

const Contact = () => {
  return (
    <Box>
      <Helmet>
        <title> Contact Us | Oluseun Onigbinde Resource Centre</title>
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
          <ContactDetails />
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

export default Contact;
