import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image_1 from "../../../assets/images/palace.jpg";
import image_2 from "../../../assets/images/baptist.jpg";
import image_3 from "../../../assets/images/lautech1.jpg";
import image_4 from "../../../assets/images/bowen.jpg";
import image_5 from "../../../assets/images/lautech2.jpg";
import image_6 from "../../../assets/images/arcade.jpg";

export default function Places() {
  return (
    <Box marginTop={"5%"}>
      <Box width={{ xs: "100%", sm: "100%" }}>
        <Typography
          variant="h3"
          color="#DC0000"
          fontWeight={700}
          paddingBottom={"4%"}
          textAlign={"center"}
        >
          Popular Places in Ogbomoso
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box width={{ xs: "100%", sm: "48%" }} marginRight="2%">
          <Box
            component="img"
            height={{ xs: "30vh", sm: "45vh" }}
            marginBottom={{ xs: "3%", sm: "0%" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              borderRadius: "10px",
            }}
            src={image_1}
            alt={"Palace"}
          />
        </Box>
        <Box width={{ xs: "100%", sm: "23%" }} marginRight="2%">
          <Box
            component="img"
            height={{ xs: "30vh", sm: "45vh" }}
            marginBottom={{ xs: "3%", sm: "0%" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              width: "100%",
            }}
            src={image_2}
            alt={"Baptist Seminary"}
          />
        </Box>
        <Box width={{ xs: "100%", sm: "23%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "45vh" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              width: "100%",
            }}
            src={image_3}
            alt={"Teaching Hospital"}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginTop={"3%"}
        flexWrap={"wrap"}
      >
        <Box width={{ xs: "100%", sm: "23%" }} marginRight="2%">
          <Box
            component="img"
            height={{ xs: "30vh", sm: "45vh" }}
            marginBottom={{ xs: "3%", sm: "0%" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              width: "100%",
              marginRight: "2%",
            }}
            src={image_6}
            alt={"Heroes Arcade"}
          />
        </Box>
        <Box width={{ xs: "100%", sm: "23%" }} marginRight="2%">
          <Box
            component="img"
            height={{ xs: "30vh", sm: "45vh" }}
            marginBottom={{ xs: "3%", sm: "0%" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              width: "100%",
            }}
            src={image_5}
            alt={"LauTech"}
          />
        </Box>
        <Box width={{ xs: "100%", sm: "48%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "45vh" }}
            marginBottom={{ xs: "3%", sm: "0%" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              borderRadius: "10px",
            }}
            src={image_4}
            alt={"Bowen"}
          />
        </Box>
      </Box>
    </Box>
  );
}
