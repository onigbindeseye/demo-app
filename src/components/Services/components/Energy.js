import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import service from "../../../assets/images/energy.jpg";

const Energy = () => {
  return (
    <Box marginBottom={{ xs: "25%", sm: "5%" }}>
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
          display={{ xs: "none", sm: "inline" }}
          data-aos={"fade-up"}
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
            Energy Transition and Advisory
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
          >
            As a matter of expediency, nations and organisations are gearing up
            to transition to cleaner fuels. This means that regulations and laws
            are evolving, requiring businesses to be foresighted about decisions
            and practices so as to maintain profits while remaining relevant. It
            also requires that investors recognise opportunities that are
            presented by the evolving energy landscape.
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
            At Forefront Africa, we provide strategic advice, technical
            expertise and tailored roadmaps to reduce the carbon footprint of
            your business and facilitate a smooth transition to alternative
            energy sources where necessary. We support the policy formulation
            and implementation process to ensure that whether you are a business
            or a country, your strategies are abreast with the current realities
            and cognisant of impending changes. Essentially, we leverage our
            expertise to develop transition plans that comprises ambitions for
            reduced emissions while taking steps to achieve net zero.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          display={{ xs: "inline", sm: "none" }}
          marginTop={{ xs: "5%", sm: "0%" }}
          data-aos={"fade-up"}
        >
          <Box
            component="img"
            height={{ xs: "27vh", sm: "50vh" }}
            sx={{
              objectFit: "cover",
            }}
            src={service}
            alt={"energy"}
            marginRight={{ xs: "0%", sm: "8%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
            borderRadius={"20px"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Energy;
