import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../../assets/banner/banner10.jpg";

const Intro = () => {
  return (
    <Box padding={{ xs: "25% 0%", sm: "10% 0% 0%" }}>
      <Box>
        <Typography
          variant="h3"
          color="#5BB318"
          fontWeight={800}
          paddingBottom={"2%"}
          textAlign={"left"}
        >
          About Forefront
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignCenter={"center"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Box
          width={{ xs: "100%", sm: "45%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Box
            // width={{ xs: "100%", sm: "55%" }}
            padding={{ xs: "5% 1%", sm: "1% 5% 3% 0%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Typography
              variant={"body1"}
              fontWeight={500}
              textAlign={"left"}
              color={"#4f4f4f"}
              data-aos={"fade-up"}
              lineHeight={"1.625em"}
            >
              Forefront Africa is a fast growing energy and climate based
              company focused on providing solutions on decarbonisation,
              emission mitigation to private and public organisations. Our team
              of experts provide advisory and consultancy services to guide
              clients through the process of selecting the right projects that
              are tailored to company budgets and securing financing to achieve
              desired goals.
            </Typography>
            <Typography
              variant={"body1"}
              fontWeight={500}
              textAlign={"left"}
              paddingTop={{ xs: "5%", sm: "2%" }}
              color={"#4f4f4f"}
              data-aos={"fade-up"}
              lineHeight={"1.625em"}
            >
              From the optimisation of processes to reduce emissions, to the
              implementation of projects to acquire carbon credits, Forefront
              Africa is properly established to meet your requirements.
              Furthermore we help to unbundle and navigate through the policy
              and regulatory environment in various jurisdictions with the sole
              purpose of ensuring that energy and climate change mitigation
              investments are retrofitted for the green economy of Africa’s
              future. This is further reinforced by our capacity building
              programs that equip requisite personnel with concepts and skills
              to drive the formulation and implementation of decarbonisation
              policies and programs.
            </Typography>
          </Box>
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Box
            component="img"
            height={{ xs: "57vh", sm: "60vh" }}
            sx={{
              objectFit: "cover",
            }}
            src={image}
            alt={"about_img"}
            marginLeft={{ xs: "0%", sm: "7%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
