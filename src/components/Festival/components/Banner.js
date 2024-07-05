import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner1 from "../../../assets/banner/banner.jpg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "banner_image1",
    imgPath: banner1,
  },
];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "15%", sm: "0%" }}>
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
                  height={{ xs: "30vh", sm: "130vh" }}
                  display={{ xs: "none", sm: "block" }}
                  sx={{
                    objectFit: "cover",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box
                  display={{ xs: "none", sm: "inline" }}
                  paddingBottom={"3%"}
                  position={"absolute"}
                  top={{ xs: "55%", sm: "29%" }}
                  marginLeft={{ xs: "0%", sm: "2%" }}
                  width={"85%"}
                ></Box>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Banner;
