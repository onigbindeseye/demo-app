import React from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Scroll from "../Header/Scroll";
import Container from "../../common/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import ContactDetails from "./components/ContactDetails";
// import Image from "../../assets/images/cage.jpg";

// const styles = {
//   paperContainer: {
//     height: 300,
//     backgroundImage: `url(${Image})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
// };

const Contact = () => {
  const theme = useTheme();
  return (
    <Box>
      <Helmet>
        <title> Contact Us | Eco-Cyclers</title>
      </Helmet>
      <Scroll>
        <AppBar
          position={"sticky"}
          elevation={0}
          sx={{
            backgroundColor: theme.palette.background.paper,
            padding: "10px 0px",
          }}
        >
          <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
            <Header />
          </Container>
        </AppBar>
      </Scroll>
      <Box>
        <Banner />
      </Box>
      <Box>
        <Container>
          <ContactDetails />
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

export default Contact;
