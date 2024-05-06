import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/iread.jpg";

const Development = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
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
          Human Development Programs
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
          Each year, we organize a flagship literacy event tailored to secondary
          school students, aimed at promoting the joy of reading and the
          importance of literacy. Through interactive workshops, storytelling
          sessions, and book donations, we inspire a love for learning and
          empower young minds to reach their full potential.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"5%"}
          color="#fff"
        >
          We also offer comprehensive skills acquisition training programs
          designed to equip individuals with practical skills for personal and
          professional growth. From vocational training in trades such as
          carpentry, tailoring, and computer literacy to entrepreneurial skills
          development, we empower participants to pursue sustainable livelihoods
          and economic independence.
        </Typography>
      </Box>
      <Box width={{ xs: "100%", sm: "50%" }}>
        <Box
          component="img"
          height={{ xs: "95vh", sm: "810px" }}
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
          src={library}
          alt={"image"}
        />
      </Box>
    </Box>
  );
};

export default Development;
