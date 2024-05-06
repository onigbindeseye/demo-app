import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import banner1 from "../../../assets/images/outreach.jpg";

function Banner() {
  return (
    <Box>
      <Box
        sx={{ flexGrow: 1 }}
        marginTop={{ xs: "5%", sm: "0%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          paddingBottom={"3%"}
          top={{ xs: "15%", sm: "20%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          width={{ xs: "100%", sm: "40%" }}
        >
          {" "}
          <Typography
            variant="h2"
            color="#071783"
            fontWeight={500}
            padding={{ xs: "0%", sm: "0% 15% 0% 0%" }}
            textTransform={"capitalize"}
            textAlign={"left"}
          >
            Empowering Individuals, Building Resilient Communities
          </Typography>
        </Box>
        <Box width={{ xs: "100%", sm: "60%" }}>
          {" "}
          <Box
            component="img"
            height={{ xs: "95vh", sm: "80vh" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={banner1}
            alt={"image"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
