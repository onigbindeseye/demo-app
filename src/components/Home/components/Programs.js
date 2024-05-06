import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import iread from "../../../assets/images/iread4.jpeg";
import medical from "../../../assets/images/medical3.jpg";
import tech from "../../../assets/images/fellowship.jpg";
import market from "../../../assets/images/market2.jpg";

const programs = [
  {
    title: "Educational Support Programs",
    description:
      "By investing in the education of tomorrow's leaders, we strive to create a brighter future for our communities.",
    pics: iread,
    links: "/what-we-do",
  },
  {
    title: "Community Based Support Programs",
    description: "Our commitment to community extends beyond our walls.",
    pics: medical,
    links: "/what-we-do",
  },
  {
    title: "Youth Development Programs",
    description: "EmpowerIng young people to become positive change agents.",
    pics: tech,
    links: "/what-we-do",
  },
  {
    title: "Business Support Programs",
    description: "Business development training, and mentorship opportunities.",
    pics: market,
    links: "/what-we-do",
  },
];

const Programs = () => {
  return (
    <Grid container padding={{ xs: "25% 0% 20% 0%", sm: "10% 0% 10% 0%" }}>
      <Box
        width={{ xs: "100%", sm: "40%" }}
        marginLeft={{ xs: "0%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          fontWeight={300}
          textAlign={"left"}
          color={"#071783"}
          paddingBottom={"1%"}
        >
          What We Do
        </Typography>
      </Box>
      <Grid
        item
        xs={12}
        md={12}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {programs.map((details, index) => {
          const { pics, title, description, links } = details;
          return (
            <Grid
              item
              key={index}
              xs={12}
              md={6}
              marginTop={{ xs: "10%", sm: "5%" }}
            >
              <Card sx={{ maxWidth: 555 }}>
                <CardMedia
                  component="img"
                  height={"280vh"}
                  image={pics}
                  alt="blog_img"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontWeight={500}
                    variant="h5"
                    component="div"
                    paddingBottom={"2%"}
                    color="#071783"
                  >
                    {title}
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box width={{ xs: "85%", sm: "90%" }}>
                      <Typography
                        gutterBottom
                        fontWeight={400}
                        variant="body1"
                        component="div"
                        color="#4f4f4f"
                      >
                        {description}
                      </Typography>
                    </Box>
                    <Box
                      width={{ xs: "15%", sm: "10%" }}
                      marginRight={{ xs: "0%", sm: "0%" }}
                    >
                      <Box
                        display={"flex"}
                        component="a"
                        underline="none"
                        href={links}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "#050C4C",
                            width: 36,
                            height: 36,
                            "&:hover": {
                              bgcolor: "#071783",
                            },
                          }}
                        >
                          <ArrowRightAltIcon
                            sx={{
                              color: "#fff",
                            }}
                          />
                        </Avatar>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Programs;
