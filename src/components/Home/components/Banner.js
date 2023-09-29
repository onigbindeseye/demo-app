import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner1 from "../../../assets/images/palace1.jpg";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import LandscapeIcon from "@mui/icons-material/Landscape";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "banner_image1",
    imgPath: banner1,
  },
];

const list = [
  {
    icon: (
      <LandscapeIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    title: "Land Mass",
    description: "235 sq km",
  },
  {
    icon: (
      <PublicIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    title: "State",
    description: "Oyo State",
  },
  {
    icon: (
      <AgricultureIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    title: "Occupation",
    description: "Farming",
  },
  {
    icon: (
      <PeopleIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    serial: "4",
    title: "Population",
    description: "628,682 (estimated)",
  },
];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "15%", sm: "4%" }}>
      <Box display={{ xs: "none", sm: "inline" }}>
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
                    height={{ xs: "30vh", sm: "75vh" }}
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
                    top={{ xs: "25%", sm: "23%" }}
                    marginLeft={{ xs: "10%", sm: "10%" }}
                    width={"75%"}
                  >
                    <Typography
                      variant="h2"
                      color="#fff"
                      fontWeight={700}
                      paddingBottom={"2%"}
                      textAlign={"center"}
                    >
                      Ògbómọ̀ṣọ́
                    </Typography>
                    <Typography
                      variant="h6"
                      color="#fff"
                      fontWeight={400}
                      paddingBottom={"2%"}
                      textAlign={"center"}
                    >
                      Ògbómọ̀ṣọ́ is a city in Oyo State, south-western Nigeria. It
                      was founded in the mid 17th century and an estimated
                      population of 628,682 as at 2023. It is the second largest
                      city in Oyo State and also among the most populated in
                      Nigeria. It is the 2nd most populated city in South
                      Western Nigeria after Lagos and Ibadan.
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      width={{ xs: "100%", sm: "75%" }}
                      flexWrap={"wrap"}
                    >
                      {list.map((lists, id) => (
                        <Box
                          key={id}
                          width={{ xs: "50%", sm: "23%" }}
                          marginTop={{ xs: "5%", sm: "4%" }}
                          padding={{ xs: "2%", sm: "1%" }}
                          data-aos={"fade-up"}
                          marginLeft={{ xs: "0%", sm: "0%" }}
                          display={"flex"}
                        >
                          <Box>
                            <Box marginTop={"2%"}>
                              <Avatar
                                sx={{
                                  bgcolor: "#fff",
                                  color: "#DC0000",
                                  width: 56,
                                  height: 56,
                                }}
                                variant="rounded"
                              >
                                {lists.icon}
                              </Avatar>
                            </Box>
                            <Typography
                              variant={"body1"}
                              fontWeight={400}
                              textAlign={"center"}
                              paddingTop={"5%"}
                              color={"#fff"}
                            >
                              {lists.title}
                            </Typography>
                            <Typography
                              variant={"body1"}
                              fontWeight={700}
                              textAlign={"center"}
                              color={"#fff"}
                            >
                              {lists.description}
                            </Typography>
                          </Box>
                          <Divider
                            color={"#fff"}
                            orientation="vertical"
                            variant="middle"
                            flexItem
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <Box display={{ xs: "inline", sm: "none" }}>
        <Box
          paddingBottom={"3%"}
          position={"absolute"}
          top={{ xs: "20%", sm: "23%" }}
          paddingLeft={{ xs: "7%", sm: "10%" }}
          width={{ xs: "90%", sm: "75%" }}
        >
          <Typography
            variant="h2"
            color="#fff"
            fontWeight={700}
            paddingBottom={"2%"}
            textAlign={"center"}
          >
            Ògbómọ̀ṣọ́
          </Typography>
          <Typography
            variant="h6"
            color="#fff"
            fontWeight={400}
            paddingBottom={"2%"}
            textAlign={"center"}
          >
            Ògbómọ̀ṣọ́ is a city in Oyo State, south-western Nigeria. It was
            founded in the mid 17th century and an estimated population of
            628,682 as at 2023. It is the second largest city in Oyo State and
            also among the most populated in Nigeria. It is the 2nd most
            populated city in South Western Nigeria after Lagos and Ibadan.
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={{ xs: "100%", sm: "75%" }}
            flexWrap={"wrap"}
          >
            {list.map((lists, id) => (
              <Box
                key={id}
                width={{ xs: "50%", sm: "23%" }}
                marginTop={{ xs: "5%", sm: "4%" }}
                padding={{ xs: "2%", sm: "1%" }}
                data-aos={"fade-up"}
                marginLeft={{ xs: "0%", sm: "0%" }}
                display={"flex"}
              >
                <Box>
                  <Box marginTop={"2%"}>
                    <Avatar
                      sx={{
                        bgcolor: "#fff",
                        color: "#DC0000",
                        width: 56,
                        height: 56,
                      }}
                      variant="rounded"
                    >
                      {lists.icon}
                    </Avatar>
                  </Box>
                  <Typography
                    variant={"body1"}
                    fontWeight={400}
                    textAlign={"center"}
                    paddingTop={"5%"}
                    color={"#fff"}
                  >
                    {lists.title}
                  </Typography>
                  <Typography
                    variant={"body1"}
                    fontWeight={700}
                    textAlign={"center"}
                    color={"#fff"}
                  >
                    {lists.description}
                  </Typography>
                </Box>
                <Divider
                  color={"#fff"}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
