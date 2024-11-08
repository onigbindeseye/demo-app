import React from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Scroll from "../Header/Scroll";
import Banner from "./components/Banner";
import Image2 from "../../assets/banner/banner1.jpg";
import Approach from "./components/Approach";
import About from "./components/About";
import HowWeHelp from "./components/HowWeHelp";
import Trash4Cash from "./components/Trash4Cash";
import FAQs from "./components/FAQs";
import Partners from "./components/Partners";

const styles = {
  paperContainer: {
    height: 850,
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
        <title> Homepage | Eco-Cyclers</title>
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
      <Box display={{ xs: "none", sm: "block" }} bgcolor={"#F4F6FF"}>
        <Banner />
      </Box>
      <Box style={styles.paperContainer} display={{ xs: "block", sm: "none" }}>
        <Banner />
      </Box>
      <Box bgcolor={"#F4F6FF"} display={{ xs: "block", sm: "none" }}>
        <Container>
          <Approach />
        </Container>
      </Box>
      <Box bgcolor={"#F4F6FF"}>
        <Container>
          <About />
        </Container>
      </Box>

      <Box>
        <Container>
          <HowWeHelp />
        </Container>
      </Box>
      <Box bgcolor={"#f2fff7"}>
        <Container>
          <Trash4Cash />
        </Container>
      </Box>
      <Box>
        <Container>
          <FAQs />
        </Container>
      </Box>
      <Box>
        <Container>
          <Partners />
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
