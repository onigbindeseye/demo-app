import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image_1 from "../../../assets/images/politics.jpg";
import image_2 from "../../../assets/images/military.jpg";
import image_3 from "../../../assets/images/enterpreneur.jpg";
import image_4 from "../../../assets/images/sport.jpg";
import image_5 from "../../../assets/images/music.jpg";
import image_6 from "../../../assets/images/civic.jpg";
import image_7 from "../../../assets/images/professional.jpg";
import image_8 from "../../../assets/images/law.jpg";
import politicsInfo from "../../Politics/components/politicianInfo";

const countObjectsByCategory = (category) => {
  return politicsInfo.filter((item) => item.category === category).length;
};

const people = [
  {
    image: image_1,
    sector: "Politics",
    number: countObjectsByCategory("Politics"),
  },
  {
    image: image_2,
    sector: "Military",
    number: countObjectsByCategory("Military"),
  },
  {
    image: image_3,
    sector: "Entrepreneurship",
    number: countObjectsByCategory("Entrepreneurship"),
  },
  {
    image: image_4,
    sector: "Sports",
    number: countObjectsByCategory("Sports"),
  },
  {
    image: image_5,
    sector: "Entertainment",
    number: countObjectsByCategory("Entertainment"),
  },
  {
    image: image_6,
    sector: "Civic Leadership",
    number: countObjectsByCategory("Civic Leadership"),
  },
  {
    image: image_7,
    sector: "Professional Leadership",
    number: countObjectsByCategory("Professional Leadership"),
  },
  {
    image: image_8,
    sector: "Law",
    number: countObjectsByCategory("Law"),
  },
];

const Prominent = () => {
  return (
    <Box marginTop={"5%"}>
      <Box width={{ xs: "100%", sm: "100%" }}>
        <Typography
          variant="h3"
          color="#DC0000"
          fontWeight={700}
          paddingBottom={"2%"}
          textAlign={"center"}
        >
          Prominent Indigenes
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {people.map((list, id) => (
          <Box
            key={id}
            width={{ xs: "100%", sm: "23%" }}
            marginTop={{ xs: "10%", sm: "2%" }}
            data-aos={"fade-up"}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Box
              component="img"
              height={{ xs: "30vh", sm: "35vh" }}
              sx={{
                objectFit: "cover",
                position: "relative",
                overflow: "hidden",
                width: "100%",
                borderRadius: "10px",
                marginRight: "2%",
              }}
              src={list.image}
              alt={list.sector}
            />
            <Typography
              variant="body1"
              color="#4f4f4f"
              fontWeight={700}
              paddingBottom={"1%"}
              textAlign={"center"}
            >
              {list.sector}
            </Typography>
            <Typography
              variant="body2"
              color="#4f4f4f"
              fontWeight={500}
              paddingBottom={"1%"}
              textAlign={"center"}
            >
              {list.number} People
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Prominent;
