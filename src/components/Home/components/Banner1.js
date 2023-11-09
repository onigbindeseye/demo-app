import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner1 from "../../../assets/banner/banner9.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "banner_image1",
    imgPath: banner1,
    title: "Empowering Sustainability, Forging a Greener Tomorrow in Africa",
    subtitle: "Leading the Path Towards a Sustainable Future!",
  },
];

function Banner1() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 200,
    height: 65,
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#5BB318",
    borderColor: "#5BB318",
    "&:hover": {
      color: "#1A4D2E",
      backgroundColor: "#fff",
      borderColor: "#fff",
    },
  }));

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
                  top={{ xs: "55%", sm: "25%" }}
                  marginLeft={{ xs: "0%", sm: "0%" }}
                  width={"80%"}
                >
                  <Typography
                    variant="h2"
                    color="#379237"
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
                    padding={"2% 2% 1% 15%"}
                    color={"#fff"}
                  >
                    {step.subtitle}
                  </Typography>
                  <Box padding={"2% 1% 1% 50%"}>
                    <ColorButton
                      component={"a"}
                      variant="contained"
                      size="medium"
                      href={"/contact-us"}
                      endIcon={
                        <ArrowRightAltIcon
                          sx={{
                            color: "#fff",
                            height: "32px",
                            width: "32px",
                            "&:hover": {
                              color: "#1A4D2E",
                            },
                          }}
                        />
                      }
                    >
                      Talk to us
                    </ColorButton>
                  </Box>
                </Box>
                <Box
                  display={{ xs: "block", sm: "none" }}
                  paddingBottom={"3%"}
                  width={"90%"}
                >
                  <Typography
                    variant="h3"
                    color="#fff"
                    fontWeight={700}
                    padding={"40% 3% 1% 3%"}
                    textAlign={"left"}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant={"body1"}
                    fontWeight={600}
                    textAlign={"left"}
                    padding={"4% 3% 1% 3%"}
                    color={"#fff"}
                  >
                    {step.subtitle}
                  </Typography>
                  <Box padding={"4% 2% 1% 4%"}>
                    <ColorButton
                      component={"a"}
                      variant="contained"
                      size="medium"
                      href={"/about-us"}
                      endIcon={
                        <ArrowRightAltIcon
                          sx={{
                            color: "#fff",
                            height: "32px",
                            width: "32px",
                            "&:hover": {
                              color: "#1A4D2E",
                            },
                          }}
                        />
                      }
                    >
                      Talk to us
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

export default Banner1;
