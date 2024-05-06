import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpeg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";
import banner6 from "../../../assets/banner/banner6.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "banner_image1",
    imgPath: banner1,
    title: "Empowering Individuals, Building Resilient Communities",
    subtitle:
      "...fostering a society rooted in compassion and collective well-being.",
  },
  {
    label: "banner_image2",
    imgPath: banner2,
    title: "Empowering Individuals, Building Resilient Communities",
    subtitle:
      "...fostering a society rooted in compassion and collective well-being.",
  },
  {
    label: "banner_image3",
    imgPath: banner3,
    title: "Empowering Individuals, Building Resilient Communities",
    subtitle:
      "...fostering a society rooted in compassion and collective well-being.",
  },
  {
    label: "banner_image4",
    imgPath: banner4,
    title: "Empowering Individuals, Building Resilient Communities",
    subtitle:
      "...fostering a society rooted in compassion and collective well-being.",
  },
  {
    label: "banner_image5",
    imgPath: banner5,
    title: "Empowering Individuals, Building Resilient Communities",
    subtitle:
      "...fostering a society rooted in compassion and collective well-being.",
  },
  {
    label: "banner_image6",
    imgPath: banner6,
    title: "Empowering Individuals, Building Resilient Communities",
    subtitle:
      "...fostering a society rooted in compassion and collective well-being.",
  },
];

function Banner1() {
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
        interval={7500}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>
                <Box
                  component="img"
                  height={{ xs: "100vh", sm: "900px" }}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box
                  display={{ xs: "none", sm: "block" }}
                  paddingBottom={"3%"}
                  position={"absolute"}
                  top={{ xs: "55%", sm: "25%" }}
                  marginLeft={{ xs: "0%", sm: "5%" }}
                  width={"80%"}
                >
                  <Typography
                    variant="h2"
                    color="#fff"
                    fontWeight={800}
                    padding={"1% 1% 1% 18%"}
                    textAlign={"center"}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant={"h6"}
                    fontWeight={600}
                    textAlign={"center"}
                    padding={"3% 2% 1% 15%"}
                    color={"#fff"}
                  >
                    {step.subtitle}
                  </Typography>
                </Box>
                <Box
                  display={{ xs: "block", sm: "none" }}
                  position={"absolute"}
                  top={{ xs: "5%", sm: "25%" }}
                  paddingBottom={"3%"}
                  width={"90%"}
                >
                  <Typography
                    variant="h3"
                    color="#fff"
                    fontWeight={700}
                    padding={"40% 3% 1% 2%"}
                    textAlign={"left"}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant={"body1"}
                    fontWeight={600}
                    textAlign={"left"}
                    padding={"4% 3% 1% 2%"}
                    color={"#fff"}
                  >
                    {step.subtitle}
                  </Typography>
                </Box>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Banner1;
