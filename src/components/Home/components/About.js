import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import image from "../../../assets/images/map.png";

const About = () => {
  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 225,
    height: 65,
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#DC0000",
    borderColor: "#DC0000",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#850000",
      borderColor: "#850000",
    },
  }));

  return (
    <Box paddingTop={{ xs: "15%", sm: "5%" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignCenter={"center"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          padding={{ xs: "5% 1%", sm: "5% 3% 3% 0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Box
            width={{ xs: "100%", sm: "100%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Typography
              variant="h3"
              color="#DC0000"
              fontWeight={700}
              paddingBottom={"2%"}
              textAlign={"center"}
            >
              About Ogbomoso
            </Typography>
          </Box>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
            padding={{ xs: "4% 1% 1% 0%", sm: "2% 10% 1% 0%" }}
          >
            Ogbomoso is located on the 8°101 North of the equator and 4°101 East
            of the Greenwich meridian. It is a derived Savannah region and it is
            104 km North East of Ibadan, 58 km North West of Osogbo, 57 km South
            West of Ilorin and 53 km North East of Oyo. The physical and
            economic growth of the town began in 19th century; when there was an
            unrest through-out the Yoruba land due to inter ethnic wars and
            Fulani Jihad. This brought more than 140 communities to seek refuge
            in Ogbomoso because of its strong defense. Most of these people took
            permanent residence in Ogbomoso, and by the end of 19th century, a
            continuous built-up compact settlement was evolved from the hamlet,
            covering an extensive area of land
          </Typography>
          <Box padding={"5% 2% 1% 0%"}>
            <ColorButton
              component={"a"}
              variant="contained"
              size="medium"
              href={"/about-ogbomoso"}
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
              Read More
            </ColorButton>
          </Box>
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "78vh" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={image}
            alt={"about_image"}
          />
          <Typography
            color={"#aaa"}
            variant="caption"
            fontWeight={400}
            textAlign={"center"}
          >
            Map of Ogbomoso township showing the road network. Source: Ministry
            of Lands, Housing and Physical Planning, Ibadan Oyo State (2006).
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
