import React from "react";
import Typography from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import gallery9 from "../../../assets/ennovate/ennovate_9.jpg";

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
            Oluseun Onigbinde Fellowship is a 12-week program organized in
            collaboration with Ennovate Lab to train shortlisted students and
            residents of Ogbomoso who want to transition to a Tech Career. The
            learning tracks available for this program are;
          </Typography>
          <Typography
            variant="body1"
            color={"#4f4f4f"}
            paddingBottom={"2%"}
            paragraph
          >
            <Typography
              component={"span"}
              color="#050C4C"
              fontWeight={800}
              variant={"body1"}
            >
              &#10004;{""}
            </Typography>{" "}
            Product Design
          </Typography>
          <Typography
            variant="body1"
            color={"#4f4f4f"}
            paddingBottom={"2%"}
            paragraph
          >
            <Typography
              component={"span"}
              color="#050C4C"
              fontWeight={800}
              variant={"body1"}
            >
              &#10004;{""}
            </Typography>{" "}
            Software Development
          </Typography>
          <Typography
            variant="body1"
            color={"#4f4f4f"}
            paddingBottom={"2%"}
            paragraph
          >
            <Typography
              component={"span"}
              color="#050C4C"
              fontWeight={800}
              variant={"body1"}
            >
              &#10004;{""}
            </Typography>{" "}
            Digital Marketing
          </Typography>
          <Typography
            variant="body1"
            color={"#4f4f4f"}
            paddingBottom={"2%"}
            paragraph
          >
            <Typography
              component={"span"}
              color="#050C4C"
              fontWeight={800}
              variant={"body1"}
            >
              &#10004;{""}
            </Typography>{" "}
            Data Analytics & Visualization
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} display={{ xs: "none", sm: "block" }}>
          <Box
            component="img"
            height={{ xs: "95vh", sm: "350px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={gallery9}
            alt={"image"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
