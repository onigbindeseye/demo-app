import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import civic from "../../../assets/logos/civic.svg";

const Partners = () => {
  return (
    <Box padding={{ xs: "20% 0%", sm: "5% 0% 0% 0%" }} width={"100%"}>
      <Box>
        <Typography
          variant="h3"
          color="#F89521"
          fontWeight={800}
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
          alt={"civicHive_logo"}
        />
      </Box>
    </Box>
  );
};

export default Partners;
