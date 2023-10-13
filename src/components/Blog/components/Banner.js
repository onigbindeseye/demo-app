import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <Box
      marginTop={{ xs: "35%", sm: "12%" }}
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "50%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${"#D7A036"} 20%, transparent 30%)`,
          opacity: 0.1,
        },
      }}
    >
      <Box width={"100%"}>
        <Typography
          variant="h2"
          color="#D7A036"
          fontWeight={800}
          paddingBottom={"2%"}
          textAlign={"left"}
        >
          <Typography
            component={"span"}
            color="#049593"
            fontWeight={800}
            variant={"h2"}
          >
            Latest {""}
          </Typography>
          Blog Posts
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
