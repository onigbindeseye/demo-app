import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/tech.jpg";

const Youth = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
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
      <Box
        width={{ xs: "100%", sm: "50%" }}
        padding={{ xs: "20% 4%", sm: "4% 8%" }}
      >
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
          Youth Development Programs
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          Young people are the future leaders and change-makers of society. We
          are dedicated to empowering youth through mentorship, leadership
          development, tech skills trainings and youth-led initiatives that
          harness their talents, creativity, and energy to drive positive social
          change and community development.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          <Typography
            component={"span"}
            color={"#fff"}
            fontWeight={700}
            variant="h6"
          >
            &#8226;{" "}
          </Typography>
          <strong>Tech Fellowship: </strong>
          Offering a comprehensive fellowship program to train youths in
          cutting-edge technologies such as product design, software
          development, digital marketing, data analytics, and visualization.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          {" "}
          <Typography
            component={"span"}
            color={"#fff"}
            fontWeight={700}
            variant="h6"
          >
            &#8226;{" "}
          </Typography>
          <strong>Leadership Summit: </strong>
          Organizing leadership summits and workshops to empower young people
          with the skills, knowledge, and networks needed to become effective
          leaders and agents of change.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          {" "}
          <Typography
            component={"span"}
            color={"#fff"}
            fontWeight={700}
            variant="h6"
          >
            &#8226;{" "}
          </Typography>
          <strong>Community Football Competition: </strong> Using sports as a
          platform for youth development and community engagement, promoting
          teamwork, discipline, and healthy competition among young people.
        </Typography>
      </Box>
    </Box>
  );
};

export default Youth;
