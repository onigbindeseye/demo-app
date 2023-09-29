import React from "react";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Image2 from "../../assets/images/lautech3.jpg";
import About from "./components/About";
import Places from "./components/Places";
import Prominent from "./components/Prominent";

const styles = {
  paperContainer: {
    height: 900,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Helmet>
        <title> Home | Ogbomoso Sons & Daughters</title>
      </Helmet>
      <AppBar
        position={"fixed"}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box display={{ xs: "none", sm: "inline" }}>
        <Banner />
      </Box>
      <Box style={styles.paperContainer} display={{ xs: "block", sm: "none" }}>
        <Banner />
      </Box>
      <Box>
        <Container>
          <About />
        </Container>
      </Box>
      <Box>
        <Container>
          <Prominent />
        </Container>
      </Box>
      <Box>
        <Container>
          <Places />
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

export default Home;
