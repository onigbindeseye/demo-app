import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import fishing from "../../../assets/images/fishing.jpg";
import aqua from "../../../assets/images/floating.jpg";
import covid from "../../../assets/images/covid.jpg";
import retirement from "../../../assets/images/retirement.jpg";
import award1 from "../../../assets/banner/banner1.jpg";

const newsDetails = [
  {
    title: "After COVID-19, What Next?",
    subtitle:
      "With NIRSAL, Beneficiaries have the opportunity to access loans and credit facilities up to Ten (10) Million Naira with absolutely no collateral, moratorium given and a single digit interest of 9% payable over a good number of years.",
    date: "April 8, 2020",
    author: "Segun Aquatic",
    pics: covid,
    links: "/2020-04-08/after-covid-19-what-next",
  },
  {
    title: "Retirement Just Ahead!",
    subtitle:
      "One of the greatest challenges facing typical employees throughout their working life is ‘life after retirement’. Some of the challenges that come with retirement include emotional, psychological and financial challenges.",
    date: "March 13, 2020",
    author: "Admin",
    pics: retirement,
    links: "/2020-03-13/retirement-just-ahead",
  },
  {
    title: "Fish Farming",
    subtitle:
      "Fish farming activity in Nigeria dates back to about 50 years ago, with the establishment of a small experimental station at Onikan Lagos and an industrial farm about 20 hectares at Panyam in Plateau State by the Federal Government.",
    date: "April 4, 2019",
    author: "Admin",
    pics: fishing,
    links: "/2019-04-04/fish-farming",
  },
  {
    title: "Aquaculture, the Ideal Industry",
    subtitle:
      "The demand for fish in Nigeria is much higher than the local production. This has made Nigeria to become one of the largest importers of fish in the developing world with about 2 million metric tons imported annually.",
    date: "March 19, 2019",
    author: "Admin",
    pics: aqua,
    links: "/2019-03-19/aquaculture-the-ideal-industry",
  },
  {
    title: "Aquahack 2019",
    subtitle:
      "AquaHack2019 exists to create solutions that can tackle problems ravaging the African Aquaculture industry. We are aiming for new solutions, concepts and ideas to solve important challenges for some of the largest aquaculture companies in Africa...",
    date: "March 4, 2019",
    author: "Admin",
    pics: award1,
    links: "/2019-03-04/aquahack-2019",
  },
];

const BlogPosts = () => {
  return (
    <Box margin={{ xs: "30% 0%", sm: "5% 0%" }}>
      <Typography
        variant={"h3"}
        fontWeight={900}
        textAlign={"left"}
        color={"#050C4C"}
        paddingBottom={"1%"}
      >
        <Typography
          component={"span"}
          variant={"h3"}
          color="#3E4095"
          fontWeight={900}
        >
          Our {""}
        </Typography>
        Blog
      </Typography>
      <Grid container padding={{ xs: "5% 0%", sm: "0% 0% 5% 0%" }}>
        {newsDetails.map((details, index) => {
          const { pics, title, subtitle, date, author, links } = details;
          return (
            <Grid
              item
              key={index}
              xs={12}
              md={4}
              marginTop={{ xs: "10%", sm: "3%" }}
            >
              <Card sx={{ maxWidth: 380 }}>
                <CardActionArea href={links}>
                  <CardMedia
                    component="img"
                    height={"250vh"}
                    image={pics}
                    alt="News"
                  />
                  <CardContent>
                    <Typography
                      fontWeight={500}
                      variant="body2"
                      color={"#aaa"}
                      paddingBottom={"4%"}
                    >
                      {date}
                    </Typography>
                    <Typography
                      gutterBottom
                      fontWeight={900}
                      variant="h5"
                      component="div"
                      paddingBottom={"2%"}
                      color="#194ec3"
                    >
                      {title}
                    </Typography>
                    <Typography
                      gutterBottom
                      fontWeight={400}
                      variant="body1"
                      component="div"
                      paddingBottom={"4%"}
                      color="#4f4f4f"
                    >
                      {subtitle}
                    </Typography>
                    <Typography
                      fontWeight={500}
                      variant="body2"
                      color={"#050C4C"}
                    >
                      {author}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BlogPosts;
