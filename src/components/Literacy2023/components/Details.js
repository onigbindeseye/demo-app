import React from "react";
import Typography from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import iread from "../../../assets/iread/iRead_23_1.jpeg";

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
            The Oluseun Onigbinde Literacy Awards is organized by the iRead To
            Live Initiative, an NGO committed to achieving and advocating for
            Sustainable Development Goals of Quality Education in Nigeria and
            promoting reading cultures in Students and youths.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            The Literacy Awards 2.0 was held on June 24, 2023 at the the Liberty
            Event Centre, Ogbomoso. The theme for this event was "Transforming
            Civic Education and Literacy in Rural Communities". This event which
            was a quiz competition was in two parts. In the first part of the
            event, 22 students from 11 schools participated out of which one 10
            students were able to progress into the second part.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            The names of the successful contestants in the second part are as
            follows: <strong>Oladiti Best </strong>from Federal Government
            College, <strong>Shittu Toluwase</strong> from Anglican Model
            College, <strong>Oyelabi Charles </strong>from Smith International
            Baptist Academy, <strong>Adepoju Joseph</strong> from Anglican High
            School,<strong> Ademola Praise</strong> also from Anglican High
            School, <strong>Odetunde Precious</strong> from Mighty Miracle
            College, <strong>Olatunbosun Darasimi </strong>from Ogbomoso High
            School, <strong>Adeleke Joshua</strong> from Smith International
            Baptist Academy, <strong>Emmanuel Gold </strong>from Oyo State
            School of Science, and
            <strong> Ashafat Faridat </strong> from Relics College.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            lineHeight={1.5}
          >
            At the end of the final phase of the event, the following students
            emerged 1st, 2nd and 3rd.
          </Typography>
          <Typography
            variant="body1"
            color={"#4f4f4f"}
            paragraph
            paddingBottom={"2%"}
          >
            <Typography
              component={"span"}
              color="#050C4C"
              fontWeight={800}
              variant={"body1"}
            >
              1st -
            </Typography>{" "}
            Adeleke Joshua
          </Typography>
          <Typography
            variant="body1"
            color={"#4f4f4f"}
            paragraph
            paddingBottom={"2%"}
          >
            <Typography
              component={"span"}
              color="#050C4C"
              fontWeight={800}
              variant={"body1"}
            >
              2nd -
            </Typography>{" "}
            Ashafat Faridat
          </Typography>
          <Typography
            variant="body1"
            color={"#4f4f4f"}
            paragraph
            paddingBottom={"2%"}
          >
            <Typography
              component={"span"}
              color="#050C4C"
              fontWeight={800}
              variant={"body1"}
            >
              3rd -
            </Typography>{" "}
            Olatunbosun Darasimi
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} display={{ xs: "none", sm: "block" }}>
          <Box
            component="img"
            height={{ xs: "95vh", sm: "680px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={iread}
            alt={"image"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
