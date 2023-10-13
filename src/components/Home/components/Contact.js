import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import image_1 from "../../../assets/images/contact.jpg";

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
});

const OverlayText = styled(Box)({
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
});

const Contact = () => {
  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 225,
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
    <Box marginTop={{ xs: "0%", sm: "0%" }}>
      <ImageContainer>
        <Box
          component="img"
          height={{ xs: "70vh", sm: "75vh" }}
          marginRight={{ xs: "0%", sm: "0%" }}
          sx={{
            objectFit: "cover",
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
          src={image_1}
          alt={"image_1"}
        />
        <OverlayText>
          <Typography
            variant="h3"
            color="#fff"
            paddingBottom={"4%"}
            fontWeight={800}
            textAlign={"center"}
          >
            Watch Your Investment Grow
          </Typography>
          <Typography
            variant={"h6"}
            fontWeight={400}
            textAlign={"center"}
            color={"#fff"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
          >
            Get in touch with Frontfront Africa to find out more
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
                href={"/contact-us"}
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
                Contact Us
              </ColorButton>
            </Box>
          </Box>
        </OverlayText>
      </ImageContainer>
    </Box>
  );
};

export default Contact;
