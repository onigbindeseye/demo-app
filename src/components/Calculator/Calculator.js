import React from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Scroll from "../Header/Scroll";
import Container from "../../common/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TheCalculator from "./components/TheCalculator";
import Banner from "./components/Banner";

const Calculator = () => {
  const theme = useTheme();
  return (
    <Box>
      <Helmet>
        <title> About Us | Eco-Cyclers</title>
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
          <TheCalculator />
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

export default Calculator;