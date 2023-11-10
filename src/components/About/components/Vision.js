import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import image_1 from "../../../assets/images/mission.jpg";

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

const Vision = () => {
  return (
    <Box marginTop={{ xs: "10%", sm: "8%" }}>
      <Box width={"100%"}>
        <Box width={{ xs: "100%", sm: "100%" }}>
          <ImageContainer>
            <Box
              component="img"
              height={{ xs: "90vh", sm: "75vh" }}
              marginRight={{ xs: "0%", sm: "0%" }}
              sx={{
                objectFit: "cover",
                position: "relative",
                overflow: "hidden",
                width: "100%",
              }}
              src={image_1}
              alt={"our_mission"}
            />
            <OverlayText>
              <Typography
                variant="h3"
                color="#fff"
                paddingBottom={"4%"}
                fontWeight={800}
                textAlign={"center"}
              >
                Our Mission
              </Typography>
              <Typography
                variant={"h6"}
                fontWeight={400}
                textAlign={"center"}
                color={"#fff"}
                data-aos={"fade-up"}
                lineHeight={"1.625em"}
              >
                Our mission is to provide comprehensive services that empower
                businesses, organizations, and individuals to actively engage in
                sustainable practices and make a positive difference for our
                planet. Together, we can create a world that thrives on
                renewable energy, responsible consumption, and a resilient
                climate.
              </Typography>
              <Box
                display={"flex"}
                marginLeft={{ xs: "0%", sm: "0%" }}
                justifyContent={"space-between"}
                width={{ xs: "100%", sm: "80%" }}
              ></Box>
            </OverlayText>
          </ImageContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Vision;
