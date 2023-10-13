import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import image_1 from "../../../assets/images/contact.jpg";

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
    <Box marginTop={{ xs: "25%", sm: "0%" }}>
      <Box width={{ xs: "100%", sm: "100%" }}>
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
          top={{ xs: "55%", sm: "440%" }}
          left={{ xs: "55%", sm: "30%" }}
          padding={{ xs: "0%", sm: "4%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          width={"40%"}
        >
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
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
