import React from "react";
import Typography from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import medical from "../../../assets/outreach/medical_12.jpg";

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
            The one day free medical outreach program organized by Oluseun
            Onigbinde Resource center in collaboration with Pouring Water
            Foundation was held in March 2024 at Ogbomosho. The free medical
            outreach program started with a health talk on various topics
            including eye care, body Mass index, nutrition and how to monitor
            blood pressure and sugar. Several tests were conducted by the
            trained nurse involving the check of blood pressure, blood glucose
            and body Mass index. There was free consultation and free drugs like
            malaria drugs, paracetamol and vitamin C. There were also free eye
            check and reading glasses were given to various people with eye
            defect and there were referrals to appropriate health facility when
            needed.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            paragraph
            lineHeight={1.5}
          >
            A total of 177 people benefitted from the medical outreach in the
            community. The sex distribution shows that 107 female (60%)
            participated more than 70 male (40%) while Most number of
            attendances were witnessed within the age group 50 years plus with
            103 attendees while the least attendance was seen within the age
            group of 15 -19 years and 0 - 14 years with 7 and 11 attendees
            respectively. The next highest proportion were 25 - 49 years and 20
            - 24 years with 42 and 14 attendees respectively.The high proportion
            recorded among 50 years plus may be attributed to illness always
            connected to old age and public negligence towards the health of
            aged people.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} display={{ xs: "none", sm: "block" }}>
          <Box
            component="img"
            height={{ xs: "95vh", sm: "550px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={medical}
            alt={"image"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
