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
import gallery1 from "../../../assets/townhall/townhall_17.jpg";
import gallery2 from "../../../assets/townhall/townhall_18.jpg";
import gallery3 from "../../../assets/townhall/townhall_19.jpg";
import gallery4 from "../../../assets/townhall/townhall_20.jpg";
import gallery5 from "../../../assets/townhall/townhall_21.jpg";
import gallery6 from "../../../assets/townhall/townhall_22.jpg";
import gallery7 from "../../../assets/townhall/townhall_23.jpg";
import gallery8 from "../../../assets/townhall/townhall_24.jpg";
import gallery9 from "../../../assets/townhall/townhall_25.jpg";
import gallery11 from "../../../assets/townhall/townhall_11.jpg";
import gallery12 from "../../../assets/townhall/townhall_12.jpg";
import gallery13 from "../../../assets/townhall/townhall_13.jpg";
import gallery14 from "../../../assets/townhall/townhall_14.jpg";
import gallery15 from "../../../assets/townhall/townhall_15.jpg";
import gallery16 from "../../../assets/townhall/townhall_16.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
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

function Townhall() {
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
    <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "25%", sm: "10%" }}>
      <Typography
        variant="h3"
        color="#F89521"
        sx={{ fontWeight: 700 }}
        paddingBottom={{ xs: "5%", sm: "3%" }}
        textAlign={"center"}
      >
        Community Town Hall Meetings
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
            sx={{ color: "#025066" }}
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
            sx={{ color: "#025066" }}
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

export default Townhall;
