import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Intro = () => {
  return (
    <Box paddingTop={{ xs: "20%", sm: "0%" }}>
      <Box>
        <Typography
          variant="h3"
          color="#9ACB34"
          fontWeight={300}
          textAlign={"center"}
        >
          Words About Us
        </Typography>
        <Typography
          variant="h6"
          color="#000"
          fontWeight={400}
          textAlign={"center"}
          paddingTop={"2%"}
          paddingBottom={{ xs: "20%", sm: "0%" }}
        >
          Founded in 2022, Eco Cyclers began as a grassroots initiative in Enugu
          State, Nigeria, with a vision to tackle the pressing issue of plastic
          waste through community-driven recycling and environmental education.
          Recognizing the growing waste management crisis and the environmental
          harm caused by plastic pollution, Eco Cyclers set out to inspire a
          shift in public perception about waste by treating it as a resource
          rather than refuse.
        </Typography>
      </Box>
    </Box>
  );
};

export default Intro;
