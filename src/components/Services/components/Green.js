import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import service from "../../../assets/images/forest1.jpg";

const Green = () => {
  return (
    <Box marginBottom={{ xs: "25%", sm: "15%" }}>
      <Box
        width={"100%"}
        margin={{ xs: "25% 0%", sm: "5% 0%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          data-aos={"fade-up"}
          display={{ xs: "none", sm: "inline" }}
        >
          <Box
            component="img"
            height={{ xs: "27vh", sm: "50vh" }}
            sx={{
              objectFit: "cover",
            }}
            src={service}
            alt={"Innovation"}
            marginRight={{ xs: "0%", sm: "8%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
            borderRadius={"20px"}
          />
        </Box>
        <Box
          width={{ xs: "100%", sm: "40%" }}
          marginLeft={{ xs: "0%", sm: "8%" }}
        >
          <Typography
            variant="h4"
            color="#5BB318"
            fontWeight={800}
            paddingBottom={"3%"}
            textAlign={"left"}
          >
            Green Innovation Advisory and Investment
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
          >
            The urgent need for the increased adoption of cleaner and safer
            energy fuels has necessitated the creation of products, services and
            processes to reduce the harm on the environment while at the same
            time optimising the use of natural resources.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            paddingTop={"2%"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
          >
            At Forefront, we offer green innovation advisory services that help
            you identify and implement appropriate innovative solutions to
            reduce your carbon footprint. This may range from ecosystem
            restoration to scaling up renewable energy capacity. We help to set
            and track progress for emission reduction, ensuring your commitment
            to combating climate change.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          data-aos={"fade-up"}
          marginTop={"5%"}
          display={{ xs: "inline", sm: "none" }}
        >
          <Box
            component="img"
            height={{ xs: "27vh", sm: "50vh" }}
            sx={{
              objectFit: "cover",
            }}
            src={service}
            alt={"about_img"}
            marginRight={{ xs: "0%", sm: "8%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
            borderRadius={"20px"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Green;
