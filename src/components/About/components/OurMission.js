import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import team from "../../../assets/images/team.jpg";

const OurMission = () => {
  return (
    <Grid container margin={{ xs: "25% 0%", sm: "5% 0%" }}>
      <Grid item xs={12} sm={6}>
        {" "}
        <Box
          component="img"
          height={{ xs: "32vh", sm: "50vh" }}
          sx={{
            width: "100%",
            objectFit: "cover",
          }}
          src={team}
          alt={"team_img"}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          width={{ xs: "100%", sm: "80%" }}
          paddingBottom={"4%"}
          paddingTop={{ xs: "5%", sm: "0%" }}
        >
          <Typography
            variant="h4"
            color={"#3CAB34"}
            fontWeight={300}
            gutterBottom
            textAlign={"left"}
          >
            Vision
          </Typography>
          <Typography
            variant="body1"
            color={"#000"}
            fontWeight={400}
            paragraph
            lineHeight={1.5}
            paddingTop={"2%"}
            textAlign={"left"}
          >
            Our vision for Nigeria is an eco-conscious nation where citizens
            actively participate in waste management practices that foster
            sustainability and a zero-waste future.
          </Typography>
        </Box>
        <Box width={{ xs: "100%", sm: "80%" }}>
          <Typography
            variant="h4"
            color={"#3CAB34"}
            fontWeight={300}
            gutterBottom
            textAlign={"left"}
          >
            Mission
          </Typography>
          <Typography
            variant="body1"
            color={"#000"}
            fontWeight={400}
            paragraph
            lineHeight={1.5}
            paddingTop={"2%"}
            textAlign={"left"}
          >
            Our mission is to drive transformative change within communities,
            inspiring citizens to actively participate in climate action and
            work towards zero waste through meaningful behavioral change.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OurMission;
