import React from "react";
import Typography from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import loyola from "../../../assets/loyola/loyola3.jpg";

const Details = () => {
  return (
    <>
      <Grid container margin={{ xs: "8% 0%", sm: "2% 0%" }}>
        <Grid xs={12} sm={6} paddingRight={"3%"}>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            paragraph
            lineHeight={1.5}
          >
            Oluseun Onigbinde had his primary and secondary school education in
            Ibadan. He attended the prestigious Loyola College, Ibadan where he
            excelled in the sciences. He scored nine distinctions in his West
            African Examinations Council's exam, earning the best result of the
            school's 2001 set.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            paragraph
            lineHeight={1.5}
          >
            While in Loyola College, one of the iconic buildings of the schools
            was the Intro Tech Workshop. This workshop had machines and tools
            which were used to demonstrate their usage to students in the Junior
            Secondary School (JSS) classes.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            paragraph
            lineHeight={1.5}
          >
            Upon visiting the school in 2017, he noticed the deplorable state of
            the workshop. This was when he took it upon himself to renovate the
            it with the approval of the school authorities and convert it to a
            Technology Lab for students to equip themselves with computer
            skills.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            paragraph
            lineHeight={1.5}
          >
            The Technology Lab was equipped with 50 computers, 1 projector and
            it was commissioned on June 8, 2018 and dedicated to the memory of
            Oluseun Onigbinde late father, Mr Olatunbosun Onigbinde.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} display={{ xs: "none", sm: "block" }}>
          <Box
            component="img"
            height={{ xs: "95vh", sm: "450px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={loyola}
            alt={"image"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
