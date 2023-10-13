import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rubrics from "./Rubrics";
import rollup from "../../../assets/banner/rollup.jpg";

const Award = () => {
  return (
    <Box padding={{ xs: "25% 0%", sm: "0% 0% 10% 0%" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignCenter={"center"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Box
          width={{ xs: "100%", sm: "55%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Box>
            <Typography
              variant="h3"
              color="#D7A036"
              fontWeight={800}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                component={"span"}
                color="#049593"
                fontWeight={800}
                variant={"h3"}
              >
                The {""}
              </Typography>
              Award
            </Typography>
          </Box>
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
              There’s nothing more remarkable than recognizing personalities
              doing exceptional work within Nigeria’s civic ecosystem. These
              people give everything to ensure that the citizens and the
              government continually uphold the ideals of democracy. They have
              championed causes and programs that have directly improved civic
              engagement, social equity, freedom of speech and human rights,
              generally. These causes have also influenced and improved
              Nigeria’s civic outlook locally and globally.
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
              The Active Citizen Award is BudgIT’s initiative and signature move
              to spotlight and appreciate personalities, organizations and
              agencies doing these ground-breaking humanitarian work in Nigeria.
              We believe that the ACA will stir more conversations on the need
              to recognize the tremendous contributions of our civic leaders to
              effective governance and an active civic space in Nigeria.
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
              We wish all the Nominees the best and we look forward to
              subsequent editions of the Award, with more opportunities for
              growth.
            </Typography>
            <Rubrics />
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", sm: "45%" }}
          display={{ xs: "none", sm: "block" }}
        >
          <Box
            component="img"
            height={{ xs: "27vh", sm: "165vh" }}
            sx={{
              objectFit: "cover",
            }}
            src={rollup}
            alt={"aca2022_img"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Award;
