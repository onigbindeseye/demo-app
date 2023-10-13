import React from "react";
import Box from "@mui/material/Box";
import Image from "../../../assets/banner/banner7.jpg";

const Banner = () => {
  return (
    <Box
      marginTop={{ xs: "40%", sm: "10%" }}
      display={{ xs: "none", sm: "inline" }}
    >
      <Box>
        <Box
          component="img"
          height={{ xs: "30vh", sm: "110vh" }}
          display={{ xs: "none", sm: "block" }}
          sx={{
            objectFit: "cover",
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
          src={Image}
          alt={"banner"}
        />
      </Box>
    </Box>
  );
};

export default Banner;
