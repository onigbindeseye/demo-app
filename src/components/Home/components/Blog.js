import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import award2 from "../../../assets/banner/press_1.jpeg";
import award1 from "../../../assets/banner/banner1.jpg";
import award3 from "../../../assets/2022_aca/img13.jpg";

const newsDetails = [
  {
    title: "BudgIT Opens Nominations for 2023 Active Citizens Award",
    date: "July 17, 2023",
    author: "Nancy Odimegwu",
    pics: award1,
    links: "/budgit-opens-nominations-for-2023-active-citizens-award",
  },
  {
    title: "Tunde Onakoya bags BudgIT’s Active Citizens Award",
    date: "September 18, 2022",
    author: "Nancy Odimegwu",
    pics: award3,
    links: "/tunde-onakoya-bags-budgit-active-citizens-award",
  },
  {
    title: "Press Statement: Maiden Edition of the Active Citizens Awards",
    date: "July 15, 2022",
    author: "Iyanu Fatoba",
    pics: award2,
    links:
      "/budgit-set-to-host-the-maiden-edition-of-the-active-citizens-awards",
  },
];

const Blog = () => {
  return (
    <Grid container padding={{ xs: "15% 0%", sm: "2% 0%" }}>
      <Box
        width={{ xs: "100%", sm: "40%" }}
        marginLeft={{ xs: "0%", sm: "0%" }}
      >
        <Typography
          variant="h3"
          color="#F89521"
          fontWeight={800}
          paddingBottom={"2%"}
          textAlign={"left"}
        >
          <Typography
            component={"span"}
            color="#099795"
            fontWeight={800}
            variant={"h3"}
          >
            Latest {""}
          </Typography>
          Blog
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
        {newsDetails.map((details, index) => {
          const { pics, title, date, author, links } = details;
          return (
            <Grid
              item
              key={index}
              xs={12}
              md={4}
              marginTop={{ xs: "10%", sm: "3%" }}
            >
              <Card sx={{ maxWidth: 350 }}>
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
                      fontWeight={700}
                      variant="h5"
                      component="div"
                      paddingBottom={"4%"}
                      color="#099795"
                    >
                      {title}
                    </Typography>
                    <Typography
                      fontWeight={500}
                      variant="body2"
                      color={"#F89521"}
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
    </Grid>
  );
};

export default Blog;
