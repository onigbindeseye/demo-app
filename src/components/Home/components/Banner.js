import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner1 from "../../../assets/banner/landmark.jpg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
                  height={{ xs: "105vh", sm: "120vh" }}
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
                  paddingBottom={"3%"}
                  position={"absolute"}
                  top={{ xs: "18%", sm: "29%" }}
                  marginLeft={{ xs: "0%", sm: "2%" }}
                  width={"100%"}
                >
                  <Typography
                    color={"#F89521"}
                    variant="h2"
                    fontWeight={700}
                    align="center"
                    paddingTop={{ xs: "10%", sm: "5%" }}
                    fontFamily={("Caveat", "cursive")}
                  >
                    Building People, Moulding Nations
                  </Typography>
                  <Typography
                    color={"#fff"}
                    variant="h6"
                    fontWeight={700}
                    align="center"
                    paddingTop={{ xs: "3%", sm: "2%" }}
                  >
                    September 14, 2024
                  </Typography>
                  <Typography
                    color={"#fff"}
                    variant="h6"
                    fontWeight={700}
                    align="center"
                  >
                    Landmark Centre, Oniru, Victoria Island, Lagos
                  </Typography>
                  <Typography
                    color={"#fff"}
                    variant="h6"
                    fontWeight={700}
                    align="center"
                  >
                    Time: 9am - 5pm
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    marginTop={{ xs: "10%", sm: "2%" }}
                  >
                    <ColorButton
                      component={"a"}
                      variant="contained"
                      size="medium"
                      target="_blank"
                      href={"/active-citizens-festival"}
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
