import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Banner = () => {
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
          height: "80%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${"#071783"} 20%, transparent 30%)`,
          opacity: 0.1,
        },
      }}
    >
      <Typography
        gutterBottom
        fontWeight={700}
        variant="h2"
        paddingTop={{ xs: "35%", sm: "5%" }}
        paddingBottom={"2%"}
        color="#025066"
      >
        About Tracka
      </Typography>
    </Box>
  );
};

export default Banner;
