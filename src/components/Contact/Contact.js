import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import Scroll from "../Header/Scroll";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Image from "../../assets/banner/banner8.jpg";
import Map from "./components/Map";
import Form from "./components/Form";

const styles = {
  paperContainer: {
    height: 350,
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const Contact = () => {
  const theme = useTheme();

  return (
    <Box>
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
      <Box style={styles.paperContainer}>
        <Container>
          <Banner />
        </Container>
      </Box>
      <Box>
        <Map />
      </Box>
      <Box>
        <Container>
          <Form />
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

export default Contact;
