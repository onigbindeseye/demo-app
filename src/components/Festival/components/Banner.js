import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/rollup1.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ColorButton = styled(Button)(() => ({
  color: "#fff",
  width: 200,
  height: 55,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#F89521",
  borderColor: "3px solid #F89521",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#B84028",
    borderColor: "#B84028",
  },
}));

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
                  component="img"
                  height={{ xs: "120vh", sm: "130vh" }}
                  display={{ xs: "block", sm: "none" }}
                  sx={{
                    objectFit: "cover",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={banner2}
                  alt={step.label}
                />
                <Box
                  paddingBottom={"3%"}
                  position={"absolute"}
                  top={{ xs: "35%", sm: "78%" }}
                  marginLeft={{ xs: "0%", sm: "0%" }}
                  width={"100%"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    marginTop={{ xs: "10%", sm: "2%" }}
                  >
                    <ColorButton
                      component={"a"}
                      variant="contained"
                      size="medium"
                      target={"_blank"}
                      href={"https://forms.gle/up29j1w3wSX8bPEZ9"}
                    >
                      Register
                    </ColorButton>
                  </Box>
                </Box>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Banner;
