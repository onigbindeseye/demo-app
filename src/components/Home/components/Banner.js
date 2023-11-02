import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";
import banner6 from "../../../assets/banner/banner6.jpg";
import banner7 from "../../../assets/banner/banner7.jpg";
import banner8 from "../../../assets/banner/banner8.jpg";
import Container from "../../../common/Container";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

const images = [
  {
    label: "banner_image1",
    imgPath: banner1,
  },
  {
    label: "banner_image3",
    imgPath: banner3,
  },

  {
    label: "banner_image2",
    imgPath: banner2,
  },
  {
    label: "banner_image5",
    imgPath: banner5,
  },
];

const images2 = [
  {
    label: "banner_image6",
    imgPath: banner6,
  },
  {
    label: "banner_image8",
    imgPath: banner8,
  },
  {
    label: "banner_image4",
    imgPath: banner4,
  },
  {
    label: "banner_image7",
    imgPath: banner7,
  },
];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep2, setActiveStep2] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleStepChange2 = (step) => {
    setActiveStep2(step);
  };

  return (
    <Box
      backgroundColor={"#1A4D2E"}
      padding={{ xs: "5% 3%", sm: "3% 3% 3% 3%" }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // flexWrap={"wrap"}
      >
        <Box
          sx={{ flexGrow: 1 }}
          marginTop={{ xs: "15%", sm: "0%" }}
          display={{ xs: "none", sm: "block" }}
          width={{ xs: "100%", sm: "48%" }}
        >
          <AutoPlaySwipeableViews
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
                      height={{ xs: "30vh", sm: "40vh" }}
                      marginRight={{ xs: "0%", sm: "0%" }}
                      sx={{
                        objectFit: "cover",
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
        <Box
          width={{ xs: "100%", sm: "65%" }}
          paddingLeft={{ xs: "0%", sm: "4%" }}
          marginRight={{ xs: "0%", sm: "5%" }}
          marginTop={{ xs: "30%", sm: "10%" }}
          display={{ xs: "none", sm: "block" }}
        >
          <Typography
            variant="h2"
            color="#fff"
            paddingBottom={"4%"}
            fontWeight={700}
            textAlign={"left"}
          >
            Empowering Sustainability, Forging a Greener Tomorrow
          </Typography>
          <Typography
            variant="body1"
            color="#fff"
            fontWeight={500}
            textAlign={"left"}
          >
            Leading the Path Towards a Sustainable Future!
          </Typography>
          <Box padding={"5% 2% 1% 0%"}>
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
        <Box
          width={{ xs: "100%", sm: "65%" }}
          paddingLeft={{ xs: "0%", sm: "4%" }}
          marginRight={{ xs: "0%", sm: "5%" }}
          marginTop={{ xs: "45%", sm: "10%" }}
          display={{ xs: "block", sm: "none" }}
        >
          <Typography
            variant="h3"
            color="#fff"
            paddingBottom={"4%"}
            fontWeight={700}
            textAlign={"left"}
          >
            Empowering Sustainability, Forging a Greener Tomorrow
          </Typography>
          <Typography
            variant="body1"
            color="#fff"
            fontWeight={500}
            textAlign={"left"}
          >
            Leading the Path Towards a Sustainable Future!
          </Typography>
          <Box padding={"5% 2% 1% 0%"}>
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
        <Box
          sx={{ flexGrow: 1 }}
          marginTop={{ xs: "15%", sm: "20%" }}
          width={{ xs: "100%", sm: "48%" }}
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep2}
            onChangeIndex={handleStepChange2}
            enableMouseEvents
            interval={10000}
          >
            {images2.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep2 - index) <= 2 ? (
                  <Box>
                    <Box
                      component="img"
                      height={{ xs: "50vh", sm: "40vh" }}
                      marginRight={{ xs: "0%", sm: "0%" }}
                      sx={{
                        objectFit: "cover",
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
      <Container display={{ xs: "none", sm: "block" }}>
        <Box
          position={"absolute"}
          top={{ xs: "55%", sm: "105%" }}
          width={"70%"}
          left={"15%"}
          backgroundColor={"#5BB318"}
          padding={"0.5%"}
          transform="translate(-50%, -50%)"
        >
          <Box
            width={"100%"}
            backgroundColor={"#fff"}
            padding={"2%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box width={{ xs: "100%", sm: "20%" }}>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                Carbon Dioxide
              </Typography>
              <Typography
                variant="h4"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                417
              </Typography>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={500}
                textAlign={"center"}
              >
                {" "}
                parts per million
              </Typography>
            </Box>
            <Box width={{ xs: "100%", sm: "20%" }}>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                Global Temperature
              </Typography>
              <Typography
                variant="h4"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                1.9 &#176;F
              </Typography>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={500}
                textAlign={"center"}
              >
                {" "}
                since 1880
              </Typography>
            </Box>
            <Box width={{ xs: "100%", sm: "20%" }}>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                Arctic Ice Minimum
              </Typography>
              <Typography
                variant="h4"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                13 %
              </Typography>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={500}
                textAlign={"center"}
              >
                {" "}
                percent per decade
              </Typography>
            </Box>
            <Box width={{ xs: "100%", sm: "20%" }}>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                Sea Level
              </Typography>
              <Typography
                variant="h4"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={700}
                textAlign={"center"}
              >
                {" "}
                3.3
              </Typography>
              <Typography
                variant="body1"
                color="#1A4D2E"
                paddingBottom={"0.5%"}
                fontWeight={500}
                textAlign={"center"}
              >
                {" "}
                millimeters per year
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
