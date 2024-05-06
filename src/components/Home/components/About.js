import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import outreach from "../../../assets/images/medical.jpg";
import library from "../../../assets/images/library.jpg";
import iread from "../../../assets/images/iread3.jpeg";
import fellowship from "../../../assets/images/fellowship.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "banner_image1",
    imgPath: outreach,
  },
  {
    label: "banner_image2",
    imgPath: library,
  },
  {
    label: "banner_image3",
    imgPath: iread,
  },
  {
    label: "banner_image4",
    imgPath: fellowship,
  },
];

const ColorButton = styled(Button)(() => ({
  color: "#F2C844",
  width: 185,
  height: 55,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#050C4C",
  borderColor: "#050C4C",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#071783",
    borderColor: "#071783",
  },
}));

const About = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "21%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${"#050C4C"} 20%, transparent 30%)`,
          opacity: 0.05,
        },
      }}
    >
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        marginTop={{ xs: "0%", sm: "5%" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          padding={{ xs: "30% 0% 5% 0%", sm: "4% 6% 3% 0%" }}
          marginBottom={{ xs: "0%", sm: "5%" }}
        >
          <Typography
            variant={"h3"}
            fontWeight={300}
            textAlign={"left"}
            color={"#071783"}
            paddingBottom={"1%"}
          >
            Who We Are
          </Typography>

          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#4f4f4f"}
            padding={{ xs: "1% 0%", sm: "4% 0% 0% 0%" }}
            lineHeight={1.5}
          >
            Oluseun Onigbinde Resource Centre is a dynamic charitable
            organization founded by Oluseun Onigbinde, dedicated to fostering
            positive change and empowerment within communities across Oyo State.
            With a steadfast commitment to uplifting individuals and creating
            sustainable opportunities, the Trust operates across various sectors
            including healthcare, education, skill development, and
            entrepreneurship.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#4f4f4f"}
            padding={{ xs: "2% 0%", sm: "2% 0%" }}
            lineHeight={1.5}
          >
            With a firm belief in the transformative power of collective action
            and community engagement, the Trust endeavors to address pressing
            social challenges and unlock opportunities for individuals to
            thrive.
          </Typography>
          <Box marginTop={"4%"}>
            <ColorButton
              component={"a"}
              variant="contained"
              size="medium"
              href={"/who-we-are"}
            >
              Read More
            </ColorButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} margin={{ xs: "2% 0% 20% 0%", sm: "0%" }}>
          {/* <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={10000}
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box>
                    <Box
                      component="img"
                      height={{ xs: "105vh", sm: "450px" }}
                      width={{ xs: "100%", sm: "100%" }}
                      src={step.imgPath}
                      alt={step.label}
                      sx={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews> */}
          <Box
            component="img"
            height={{ xs: "105vh", sm: "450px" }}
            width={{ xs: "100%", sm: "100%" }}
            src={library}
            alt={"image"}
            sx={{
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
