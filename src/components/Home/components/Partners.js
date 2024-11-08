import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import civic from "../../../assets/logos/civic.svg";
import gene from "../../../assets/logos/gene.jpg";
import wecyclers from "../../../assets/logos/wecyclers.jpg";
import plant from "../../../assets/logos/plant.jpg";

const Partners = () => {
  return (
    <Box padding={{ xs: "20% 0%", sm: "2% 0% 0% 0%" }} width={"100%"}>
      <Box>
        <Typography
          variant="h3"
          color="#3CAB34"
          fontWeight={300}
          paddingBottom={"1%"}
          textAlign={"left"}
        >
          Our Partners
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        width={{ xs: "100%", sm: "100%" }}
        padding={{ xs: "5% 0%", sm: "2% 0%" }}
        marginLeft={{ xs: "0%", sm: "0%" }}
        // data-aos={"fade-down"}
      >
        <Box
          component="img"
          height={{ xs: "4vh", sm: "13vh" }}
          width={{ xs: "45%", sm: "21%" }}
          marginTop={{ xs: "8%", sm: "0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          sx={{
            filter: "grayscale(0%)",
            "&:hover": {
              filter: "grayscale(100%)",
            },
          }}
          src={civic}
          alt={"CivicHive_logo"}
        />

        <Box
          component="img"
          height={{ xs: "6vh", sm: "10vh" }}
          width={{ xs: "45%", sm: "21%" }}
          marginTop={{ xs: "8%", sm: "0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          sx={{
            filter: "grayscale(0%)",
            "&:hover": {
              filter: "grayscale(100%)",
            },
          }}
          src={wecyclers}
          alt={"Wecyclers_logo"}
        />
        <Box
          component="img"
          height={{ xs: "17vh", sm: "21vh" }}
          width={{ xs: "45%", sm: "13%" }}
          marginTop={{ xs: "8%", sm: "0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          sx={{
            filter: "grayscale(0%)",
            "&:hover": {
              filter: "grayscale(100%)",
            },
          }}
          src={gene}
          alt={"Green_Environment_Network_Enugu"}
        />
        <Box
          component="img"
          height={{ xs: "11vh", sm: "18vh" }}
          width={{ xs: "45%", sm: "21%" }}
          marginTop={{ xs: "8%", sm: "0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          sx={{
            filter: "grayscale(0%)",
            "&:hover": {
              filter: "grayscale(100%)",
            },
          }}
          src={plant}
          alt={"Society_for_Planet_and_Prosperity"}
        />
      </Box>
    </Box>
  );
};

export default Partners;
