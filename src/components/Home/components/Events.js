import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/center.jpg";

const ColorButton = styled(Button)(() => ({
  color: "#071783",
  width: 185,
  height: 55,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#F2C844",
  borderColor: "#F2C844",
  "&:hover": {
    color: "#071783",
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
}));

const Events = () => {
  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "21%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${"#050C4C"} 20%, transparent 30%)`,
          opacity: 0.1,
        },
      }}
    >
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        margin={{ xs: "0%", sm: "5% 0%" }}
      >
        <Grid item xs={12} sm={6} margin={{ xs: "2% 0% 20% 0%", sm: "0%" }}>
          <Box
            component="img"
            height={{ xs: "105vh", sm: "450px" }}
            width={{ xs: "100%", sm: "100%" }}
            src={library}
            alt={"image"}
            sx={{
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          padding={{ xs: "30% 0% 5% 0%", sm: "0% 0% 3% 6%" }}
          marginBottom={{ xs: "0%", sm: "0%" }}
        >
          <Typography
            variant={"h3"}
            fontWeight={400}
            textAlign={"left"}
            color={"#F2C844"}
            paddingBottom={"4%"}
          >
            Upcoming Events
          </Typography>
          <Typography
            variant={"h6"}
            fontWeight={400}
            textAlign={"left"}
            color={"#fff"}
            paddingBottom={"1%"}
          >
            Official Launching !!!
          </Typography>

          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#fff"}
            padding={{ xs: "1% 0%", sm: "4% 0% 0% 0%" }}
            lineHeight={1.5}
          >
            We are delighted to announce the official opening of the Oluseun
            Onigbinde Resource Centre, a dedicated hub for education, research,
            and skills development in ogbomosho.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#fff"}
            padding={{ xs: "1% 0%", sm: "4% 0% 0% 0%" }}
            lineHeight={1.5}
          >
            We cordially invite you to join us for this momentous occasion as we
            celebrate the culmination of our efforts to provide valuable
            resources and opportunities for growth and empowerment.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#F2C844"}
            padding={{ xs: "2% 0%", sm: "2% 0% 0% 0%" }}
            lineHeight={1.5}
          >
            <strong>Date: </strong>May 11, 2024
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#F2C844"}
            padding={{ xs: "2% 0%", sm: "1%" }}
            lineHeight={1.5}
          >
            <strong>Time: </strong>1p.m
          </Typography>
          <Box marginTop={"4%"}>
            <ColorButton
              component={"a"}
              variant="contained"
              size="medium"
              href={"/official-launching-of-oluseun-onigbinde-resource-centre"}
            >
              Read More
            </ColorButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Events;
