import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/library.jpg";

const Resource = () => {
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
          Resource Centre
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
          We operate a dynamic resource center equipped with a diverse
          collection of books, educational materials, and technology resources.
          Our library serves as a hub for learning, research, and community
          engagement, providing individuals with access to knowledge and
          information that enriches their lives.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"5%"}
          color="#fff"
        >
          We offer tailored support and resources to aspiring entrepreneurs and
          small business owners, including access to financing, business
          development training, and mentorship opportunities. By fostering an
          enabling environment for entrepreneurship, we seek to drive economic
          growth, create employment opportunities, and promote innovation within
          communities.
        </Typography>
      </Box>
    </Box>
  );
};

export default Resource;
