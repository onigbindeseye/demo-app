import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Avatar from "@mui/material/Avatar";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ParkIcon from "@mui/icons-material/Park";
import HubIcon from "@mui/icons-material/Hub";

const About = () => {
  const ColorButton = styled(Button)(() => ({
    color: "#205723",
    width: 225,
    height: 65,
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#fff",
    border: "2px solid #205723",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#5BB318",
      borderColor: "#5BB318",
    },
  }));
  const ColorButton2 = styled(Button)(() => ({
    color: "#fff",
    width: 225,
    height: 65,
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#205723",
    borderColor: "#205723",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#5BB318",
      borderColor: "#5BB318",
    },
  }));

  return (
    <Box paddingTop={{ xs: "25%", sm: "12%" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignCenter={"center"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          padding={{ xs: "5% 1%", sm: "1% 3% 3% 0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Box
            width={{ xs: "100%", sm: "90%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Typography
              variant="h2"
              color="#5BB318"
              fontWeight={800}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              Who We Are?
            </Typography>
          </Box>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
            padding={"2% 10% 1% 0%"}
          >
            We are a team passionate in creating a world that thrives on green
            innovation, responsible consumption, and a healthier climate for
            generations to come.
          </Typography>
          <Box
            marginTop={{ xs: "7%", sm: "4%" }}
            marginBottom={{ xs: "7%", sm: "2%" }}
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box
              width={"50%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              data-aos={"fade-down"}
            >
              <Box width={"15%"} marginRight={2}>
                <Avatar
                  variant="square"
                  sx={{
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <EmojiObjectsIcon
                    sx={{ color: "#5BB318", width: 36, height: 36 }}
                  />
                </Avatar>
              </Box>
              <Box width={"85%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={700}
                  textAlign={"left"}
                  color={"#000"}
                  paddingBottom={"1%"}
                >
                  Innovation
                </Typography>
              </Box>
            </Box>
            <Box
              width={"50%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              data-aos={"fade-down"}
            >
              <Box width={"15%"} marginRight={2}>
                <Avatar
                  variant="square"
                  sx={{
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <ParkIcon sx={{ color: "#5BB318", width: 36, height: 36 }} />
                </Avatar>
              </Box>
              <Box width={"85%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={700}
                  textAlign={"left"}
                  color={"#000"}
                  paddingBottom={"1%"}
                >
                  Sustainability
                </Typography>
              </Box>
            </Box>
            <Box
              width={"50%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginTop={"5%"}
              data-aos={"fade-down"}
            >
              <Box width={"15%"} marginRight={2}>
                <Avatar
                  variant="square"
                  sx={{
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <ThumbUpAltIcon
                    sx={{ color: "#5BB318", width: 36, height: 36 }}
                  />
                </Avatar>
              </Box>
              <Box width={"85%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={700}
                  textAlign={"left"}
                  color={"#000"}
                  paddingBottom={"1%"}
                >
                  Integrity
                </Typography>
              </Box>
            </Box>
            <Box
              width={"50%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginTop={"5%"}
              data-aos={"fade-down"}
            >
              <Box width={"15%"} marginRight={2}>
                <Avatar
                  variant="square"
                  sx={{
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <HubIcon sx={{ color: "#5BB318", width: 36, height: 36 }} />
                </Avatar>
              </Box>
              <Box width={"85%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={700}
                  textAlign={"left"}
                  color={"#000"}
                  paddingBottom={"1%"}
                >
                  Resilience
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            marginLeft={{ xs: "0%", sm: "0%" }}
            justifyContent={"space-between"}
            width={"80%"}
          >
            <Box padding={"5% 0% 1% 0%"}>
              <ColorButton
                component={"a"}
                variant="contained"
                size="medium"
                href={"/about-us"}
                endIcon={
                  <ArrowRightAltIcon
                    sx={{
                      color: "#205723",
                      height: "32px",
                      width: "32px",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  />
                }
              >
                About Forefront
              </ColorButton>
            </Box>
            <Box padding={"5% 2% 1% 4%"}>
              <ColorButton2
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
                        color: "#fff",
                      },
                    }}
                  />
                }
              >
                Our Services
              </ColorButton2>
            </Box>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", sm: "40%" }}
          backgroundColor={"#D4F6CC"}
          padding={"2%"}
        >
          <Box padding={"5%"} backgroundColor={"#fff"}>
            <Typography
              variant="h3"
              color="#000"
              fontWeight={800}
              paddingTop={"9%"}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              Why Forefront Africa?
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingTop={"9%"}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              At Forefront Africa, we are committed to making a meaningful
              impact on the fight against climate change. Our mission is to
              provide comprehensive services that empower businesses,
              organizations, and individuals to actively engage in sustainable
              practices and make a positive difference for our planet. Together,
              we can create a world that thrives on renewable energy,
              responsible consumption, and a resilient climate.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
