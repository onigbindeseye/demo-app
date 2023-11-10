import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import service from "../../../assets/banner/banner6.jpg";

const Climate = () => {
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
            Climate Finance Sourcing and Evaluation
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
          >
            The carbon market provides a useful instrument for addressing GHG
            emissions in a way that provides an economic incentive for fostering
            low carbon transition. To date the domestic and the international
            market continue to serve as a support mechanism in the
            implementation of low carbon-based projects. More so, energy
            transition is expected to drive both climate and carbon financing
            and countries and companies globally need to be well positioned to
            take advantage of the opportunities presented.
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
            Mobilising investment and finance to support clean energy
            transitions, as well as ways to improve the domestic environment for
            clean energy investment could be challenging. We work with private
            and public institutions on exploring opportunities in the
            ever-growing carbon market. This includes careful assessment of
            projects to determine the best option for a specific
            investment/investor. Our experts evaluate and analyse financing
            options to help you make informed decisions ensuring that projects
            are paired with the best funding.
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
            alt={"climate"}
            marginLeft={{ xs: "0%", sm: "7%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
            borderRadius={"20px"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Climate;
