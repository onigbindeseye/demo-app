import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Intro = () => {
  return (
    <Box paddingTop={{ xs: "25%", sm: "5%" }}>
      <Typography
        variant={"h6"}
        fontWeight={400}
        textAlign={"left"}
        color={"#000"}
        data-aos={"fade-up"}
        lineHeight={"1.625em"}
      >
        Forefront Africa is a fast growing energy and climate based company
        focused on providing solutions on decarbonisation, emission mitigation
        to private and public organisations. Our team of experts provide
        advisory and consultancy services to guide clients through the process
        of selecting the right projects that are tailored to company budgets and
        securing financing to achieve desired goals.
      </Typography>
    </Box>
  );
};

export default Intro;
