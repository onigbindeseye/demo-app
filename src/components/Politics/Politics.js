import React from "react";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import PoliticsSearch from "./components/PoliticsSearch";
import politicsInfo from "./components/politicianInfo";
import Image from "../../assets/images/arcade_1.jpg";

const styles = {
  paperContainer: {
    height: 450,
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
};

const Agency = () => {
  const theme = useTheme();
  const [politics, setPolitics] = React.useState(politicsInfo);

  return (
    <Box>
      <Helmet>
        <title> Prominent Indigenes | Ogbomoso Sons & Daughters</title>
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
      <Box style={styles.paperContainer}>
        <Banner />
      </Box>
      <Box>
        <Container>
          <PoliticsSearch details={politics} setPolitics={setPolitics} />
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

export default Agency;
