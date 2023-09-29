import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../../assets/people/ghandi_olaoye.jpg";

const Intro = () => {
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
              paddingBottom={{ xs: "4%", sm: "2%" }}
              textAlign={"left"}
            >
              Message from the King
            </Typography>
          </Box>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
            padding={"2% 10% 1% 0%"}
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
            HRM Oba Afolabi Ghandi Olaoye, Orumogege III
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
