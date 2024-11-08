import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import RecyclingIcon from "@mui/icons-material/Recycling";
import HandshakeIcon from "@mui/icons-material/Handshake";

const cardStyle = {
  bgcolor: "#fff",
  color: "#000",
};

const objectList = [
  {
    icon: (
      <RecyclingIcon
        fontSize="large"
        sx={{
          color: "#3CAB34",
          width: 72,
          height: 72,
          "&:hover": { color: "#9DCC49" },
        }}
      />
    ),
    title: "Plastic-to-Cash Program",
    subtitle:
      "Eco Cyclers’ Trash for Cash initiative offers financial rewards to community members who bring in recyclable plastic waste, providing an incentive for active participation in waste collection while supporting a circular economy.",
  },
  {
    icon: (
      <LocalLibraryIcon
        fontSize="large"
        sx={{
          color: "#3CAB34",
          width: 72,
          height: 72,
          "&:hover": { color: "#9DCC49" },
        }}
      />
    ),
    title: "Workshops and Education",
    subtitle:
      "Through hands-on workshops, school programs, and awareness campaigns, Eco Cyclers educates citizens of all ages on sustainable waste practices and the importance of environmental stewardship.",
  },
  {
    icon: (
      <HandshakeIcon
        fontSize="large"
        sx={{
          color: "#3CAB34",
          width: 72,
          height: 72,
          "&:hover": { color: "#9DCC49" },
        }}
      />
    ),
    title: "Community Partnerships",
    subtitle:
      " By partnering with local businesses, schools, and NGOs, Eco Cyclers amplifies its impact, collaborating on projects that drive climate action and promote a greener, more sustainable community.",
  },
];

const HowWeHelp = () => {
  return (
    <Box margin={{ xs: "20% 0%", sm: "5% 0%" }}>
      <Typography
        variant={"h3"}
        fontWeight={300}
        textAlign={"left"}
        color={"#3CAB34"}
        paddingBottom={"2%"}
      >
        How We Help
      </Typography>
      <Grid container spacing={1}>
        {objectList.map((list, index) => {
          const { title, icon, subtitle } = list;
          return (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                margin={{ xs: "5% 0%", sm: "0%" }}
              >
                <Box
                  key={index}
                  component={Card}
                  height={"100%"}
                  padding={{ xs: "4% 4%", sm: "10% 8%" }}
                  margin={{ xs: "2% 0%", sm: "4% 0%" }}
                  display={"flex"}
                  flexDirection={"column"}
                  width={{ xs: "100%", sm: "100%" }}
                  data-aos={"fade-down"}
                  sx={{ ...cardStyle }}
                >
                  <Box marginLeft={"2%"}>{icon}</Box>
                  <Typography
                    variant={"h5"}
                    fontWeight={700}
                    paddingTop={"6%"}
                    color={"#1B5E20"}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant={"subtitle2"}
                    paddingTop={"6%"}
                    color={"#000"}
                  >
                    {subtitle}
                  </Typography>
                </Box>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HowWeHelp;
