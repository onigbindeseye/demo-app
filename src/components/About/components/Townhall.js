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
import gallery1 from "../../../assets/townhall/townhall_1.jpg";
import gallery2 from "../../../assets/townhall/townhall_2.jpg";
import gallery3 from "../../../assets/townhall/townhall_3.jpg";
import gallery4 from "../../../assets/townhall/townhall_4.jpg";
import gallery5 from "../../../assets/townhall/townhall_5.jpg";
import gallery6 from "../../../assets/townhall/townhall_6.jpg";
import gallery7 from "../../../assets/townhall/townhall_7.jpg";
import gallery9 from "../../../assets/townhall/townhall_8.jpg";
import gallery8 from "../../../assets/townhall/townhall_9.jpg";
import gallery10 from "../../../assets/townhall/townhall_10.jpg";
import gallery11 from "../../../assets/townhall/townhall_11.jpg";
import gallery12 from "../../../assets/townhall/townhall_12.jpg";
import gallery13 from "../../../assets/townhall/townhall_13.jpg";
import gallery14 from "../../../assets/townhall/townhall_14.jpg";
import gallery15 from "../../../assets/townhall/townhall_15.jpg";
import gallery16 from "../../../assets/townhall/townhall_16.jpg";
// import gallery17 from "../../../assets/townhall/townhall_17.jpg";
// import gallery18 from "../../../assets/townhall/townhall_18.jpg";
// import gallery19 from "../../../assets/townhall/townhall_19.jpg";
// import gallery20 from "../../../assets/townhall/townhall_20.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "img_1",
    imgPath: gallery1,
  },
  {
    label: "img_2",
    imgPath: gallery2,
  },
  {
    label: "img_3",
    imgPath: gallery3,
  },
  {
    label: "img_4",
    imgPath: gallery4,
  },
  {
    label: "img_5",
    imgPath: gallery5,
  },
  {
    label: "img_6",
    imgPath: gallery6,
  },
  {
    label: "img_7",
    imgPath: gallery7,
  },
  {
    label: "img_8",
    imgPath: gallery8,
  },
  {
    label: "img_9",
    imgPath: gallery9,
  },
  {
    label: "img_10",
    imgPath: gallery10,
  },
  {
    label: "img_11",
    imgPath: gallery11,
  },
  {
    label: "img_12",
    imgPath: gallery12,
  },
  {
    label: "img_13",
    imgPath: gallery13,
  },
  {
    label: "img_14",
    imgPath: gallery14,
  },
  {
    label: "img_15",
    imgPath: gallery15,
  },
  {
    label: "img_16",
    imgPath: gallery16,
  },
  //   {
  //     label: "img_17",
  //     imgPath: gallery17,
  //   },
  //   {
  //     label: "img_18",
  //     imgPath: gallery18,
  //   },
  //   {
  //     label: "img_19",
  //     imgPath: gallery19,
  //   },
  //   {
  //     label: "img_20",
  //     imgPath: gallery20,
  //   },
];

function Townhall() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "15%", sm: "0%" }}>
      <Typography
        variant="h3"
        color="#F89521"
        sx={{ fontWeight: 700 }}
        paddingBottom={{ xs: "5%", sm: "3%" }}
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
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>
                <Box
                  component="img"
                  height={{ xs: "35vh", sm: "80vh" }}
                  sx={{
                    objectFit: "cover",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              </Box>
            ) : null}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
