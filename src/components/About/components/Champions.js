import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import gallery1 from "../../../assets/champions/champion_1.jpg";
import gallery2 from "../../../assets/champions/champion_2.jpg";
import gallery3 from "../../../assets/champions/champion_3.jpg";
import gallery4 from "../../../assets/champions/champion_4.jpg";
import gallery5 from "../../../assets/champions/champion_5.jpg";
import gallery6 from "../../../assets/champions/champion_6.jpg";
import gallery7 from "../../../assets/champions/champion_7.jpg";
import gallery9 from "../../../assets/champions/champion_9.jpg";
import gallery10 from "../../../assets/champions/champion_10.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery9,
  gallery10,
];

const WithStyles = ({ image, width }) => (
  <Box
    component="img"
    sx={{
      height: { xs: "30vh", sm: "50vh" },
      objectFit: "cover",
      width: width,
      marginRight: "1%",
      flexShrink: 0,
    }}
    src={image}
    alt={image}
  />
);

function Champions() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const imagesPerSlide = isSmallScreen ? 1 : 3;
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(images.length / imagesPerSlide);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }} margin={{ xs: "25% 0%", sm: "10% 0%" }}>
      <Typography
        variant="h3"
        color="#F89521"
        sx={{ fontWeight: 700 }}
        paddingBottom={{ xs: "5%", sm: "3%" }}
        textAlign={"center"}
      >
        Community Champions
      </Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {Array.from({ length: maxSteps }).map((_, index) => (
          <div key={index}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {images
                .slice(
                  index * imagesPerSlide,
                  index * imagesPerSlide + imagesPerSlide
                )
                .map((image, imgIndex) => (
                  <WithStyles
                    key={imgIndex}
                    image={image}
                    width={isSmallScreen ? "100%" : "calc(33.33% - 1.33%)"}
                  />
                ))}
            </Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ color: "#F89521" }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ color: "#F89521" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Champions;
