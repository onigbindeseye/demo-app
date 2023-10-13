import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import image_1 from "../../../assets/images/forest.jpg";
import image_2 from "../../../assets/images/elephant.jpg";

const Highlights = () => {
  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 275,
    height: 65,
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "rgba(0,0,0,0)",
    border: "2px solid #fff",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#5BB318",
      borderColor: "#5BB318",
    },
  }));

  return (
    <Box marginTop={{ xs: "25%", sm: "8%" }}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "75vh" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            display={{ xs: "none", sm: "block" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
            src={image_1}
            alt={"image_1"}
          />
          <Box
            paddingBottom={"3%"}
            position={"absolute"}
            top={{ xs: "55%", sm: "240%" }}
            padding={{ xs: "0%", sm: "4%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
            width={"50%"}
          >
            <Typography
              variant="h3"
              color="#fff"
              paddingBottom={"4%"}
              fontWeight={800}
              textAlign={"center"}
            >
              Our Services
            </Typography>
            <Typography
              variant={"h6"}
              fontWeight={400}
              textAlign={"center"}
              color={"#fff"}
              data-aos={"fade-up"}
              lineHeight={"1.625em"}
            >
              A detailed overview of our Green Innovation Advisory & Investment
              services
            </Typography>
            <Box
              display={"flex"}
              marginLeft={{ xs: "0%", sm: "0%" }}
              justifyContent={"space-between"}
              width={"80%"}
            >
              <Box padding={"5% 0% 1% 18%"}>
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
                          color: "#fff",
                        },
                      }}
                    />
                  }
                >
                  Let's find out together
                </ColorButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "75vh" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            display={{ xs: "none", sm: "block" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
            src={image_2}
            alt={"image_2"}
          />
          <Box
            paddingBottom={"3%"}
            position={"absolute"}
            top={{ xs: "55%", sm: "240%" }}
            padding={{ xs: "0%", sm: "4%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
            width={"50%"}
          >
            <Typography
              variant="h3"
              color="#fff"
              paddingBottom={"4%"}
              fontWeight={800}
              textAlign={"center"}
            >
              Climate Financing Sourcing
            </Typography>
            <Typography
              variant={"h6"}
              fontWeight={400}
              textAlign={"center"}
              color={"#fff"}
              data-aos={"fade-up"}
              lineHeight={"1.625em"}
            >
              We connect you with the right financial partners and opportunities
              for your sustainable projects.
            </Typography>
            <Box
              display={"flex"}
              marginLeft={{ xs: "0%", sm: "0%" }}
              justifyContent={"space-between"}
              width={"80%"}
            >
              <Box padding={"5% 0% 1% 18%"}>
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
                          color: "#fff",
                        },
                      }}
                    />
                  }
                >
                  Talk to Us
                </ColorButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Highlights;
