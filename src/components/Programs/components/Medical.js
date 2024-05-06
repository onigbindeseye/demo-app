import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/medical.jpg";

const Medical = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box width={{ xs: "100%", sm: "50%" }}>
        <Box
          component="img"
          height={{ xs: "95vh", sm: "100vh" }}
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
          src={library}
          alt={"image"}
        />
      </Box>
      <Box width={{ xs: "100%", sm: "50%" }} padding={"4% 10%"}>
        <Typography
          fontWeight={500}
          variant="body2"
          color={"#F2C844"}
          padding={"4% 0%"}
        >
          PROGRAM
        </Typography>
        <Typography
          gutterBottom
          fontWeight={300}
          variant="h3"
          paddingTop={"5%"}
          paddingBottom={"2%"}
          color="#fff"
        >
          Medical Outreach
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingTop={"5%"}
          paddingBottom={"5%"}
          color="#fff"
        >
          We conduct regular medical outreach programs, bringing essential
          healthcare services directly to underserved communities. Through
          health screenings, vaccination drives, and health education
          initiatives, we strive to improve access to quality healthcare and
          promote overall well-being.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"5%"}
          color="#fff"
        >
          We believe that access to quality healthcare is a fundamental human
          right.Through our medical outreach programs, we provide essential
          healthcare services to the people of Oyo state, focusing on preventive
          care, health education, and access to medical facilities.
        </Typography>
      </Box>
    </Box>
  );
};

export default Medical;
