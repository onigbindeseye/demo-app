import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import banner1 from "../../../assets/images/trash.jpg";
import Container from "../../../common/Container";

function Banner() {
  return (
    <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "5%", sm: "0%" }}>
      <Box>
        <Box
          component="img"
          height={{ xs: "80vh", sm: "55vh" }}
          sx={{
            objectFit: "cover",
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
          src={banner1}
          alt={"banner"}
        />
        <Container>
          <Box
            position={"absolute"}
            bottom={{ xs: "40%", sm: "30%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
            width={{ xs: "95%", sm: "40%" }}
            padding={{ xs: "8%", sm: "3%" }}
            bgcolor={"rgb(60, 171, 52, 0.8)"}
          >
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              textAlign={"left"}
            >
              We are Eco-Cyclers
            </Typography>
            <Typography
              variant="subtitle1"
              color="#fff"
              fontWeight={400}
              textAlign={"left"}
              paddingTop={"2%"}
            >
              We are transforming waste into value for a sustainable tomorrow
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Banner;