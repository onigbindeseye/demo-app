import React from "react";
import Typography from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import center from "../../../assets/images/center.jpg";

const Details = () => {
  return (
    <>
      <Grid container margin={{ xs: "8% 0%", sm: "2% 0%" }}>
        <Grid xs={12} sm={6} paddingRight={"3%"}>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            The Oluseun Onigbinde Resource Centre is a testament to our
            commitment to fostering learning, innovation, and community
            development. Equipped with a library, computers for research, and a
            skills training centre, the centre aims to serve as a catalyst for
            knowledge dissemination, skill acquisition, and personal growth.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            At the heart of the Resource Centre is our library, a haven for avid
            readers, students, and researchers alike. With a diverse collection
            of books, journals, and educational materials, the library offers a
            wealth of resources to support learning and intellectual
            exploration.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            In addition to our library, the Resource Centre features a
            state-of-the-art computer lab equipped with modern technology and
            high-speed internet access. This facility provides individuals with
            access to information, online resources, and digital tools for
            research, learning, and professional development.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            Furthermore, the Resource Centre houses a skills training center
            designed to equip individuals with practical skills and expertise
            for personal and professional advancement. Through hands-on
            training, workshops, and mentorship programs, we aim to empower
            individuals with the knowledge and skills needed to thrive in
            today's ever-changing world.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            We believe that the Oluseun Onigbinde Resource Centre will serve as
            a beacon of hope, opportunity, and progress for Ogbomosho and Oyo
            State at large. We invite you to join us in celebrating this
            milestone and to witness firsthand the impact that the Resource
            Centre will have on the lives of the people of Ogbomosho as a whole.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} display={{ xs: "none", sm: "block" }}>
          <Box
            component="img"
            height={{ xs: "95vh", sm: "650px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={center}
            alt={"image"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
