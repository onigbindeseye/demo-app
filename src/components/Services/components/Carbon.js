import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import service from "../../../assets/banner/banner2.jpg";

const Carbon = () => {
  return (
    <Box marginBottom={{ xs: "25%", sm: "15%" }}>
      <Box
        width={"100%"}
        margin={{ xs: "25% 0%", sm: "2% 0%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "45%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Typography
            variant="h4"
            color="#5BB318"
            fontWeight={800}
            paddingBottom={"3%"}
            textAlign={"left"}
          >
            Carbon Credit Certification
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
          >
            We help organisations and governments, capture a comprehensive and
            accurate perspective of carbon footprints. Calculating your
            company’s carbon footprint means determining the amount of emissions
            it emits into the atmosphere. This is the first step in the entire
            offsetting process: by purchasing carbon credits, you can finance
            projects that aim to absorb these emissions, effectively achieving
            carbon neutrality.
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
            At Forefront, We guide you through the certification process
            enabling you to earn carbon credits that contribute to a greener
            future and demonstrate your commitment to sustainability.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          marginTop={{ xs: "5%", sm: "0%" }}
          data-aos={"fade-up"}
        >
          <Box
            component="img"
            height={{ xs: "27vh", sm: "50vh" }}
            width={"100%"}
            sx={{
              objectFit: "cover",
            }}
            src={service}
            alt={"Carbon_emission"}
            marginLeft={{ xs: "0%", sm: "7%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
            borderRadius={"20px"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carbon;
