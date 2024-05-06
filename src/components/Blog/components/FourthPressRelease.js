import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Container from "../../../common/Container";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { blue } from "@mui/material/colors";
import fishing from "../../../assets/images/fishing.jpg";
import aqua from "../../../assets/images/floating.jpg";
import covid from "../../../assets/images/covid.jpg";
import retirement from "../../../assets/images/retirement.jpg";
import award1 from "../../../assets/banner/banner1.jpg";

const latest = [
  {
    img: covid,
    title: "After COVID-19, What Next?",
    subtitle:
      "With NIRSAL, Beneficiaries have the opportunity to access loans...",
    date: "April 8, 2020",
    links: "/2020-04-08/after-covid-19-what-next",
  },
  {
    img: retirement,
    title: "Retirement Just Ahead!",
    subtitle:
      "One of the greatest challenges facing typical employees throughout their...",
    date: "March 13, 2020",
    links: "/2020-03-13/retirement-just-ahead",
  },
  {
    img: fishing,
    title: "Fish Farming",
    subtitle:
      "Fish farming activity in Nigeria dates back to about 50 years ago...",
    date: "April 4, 2019",
    links: "/2019-04-04/fish-farming",
  },
  {
    img: award1,
    title: "Aquahack 2019",
    subtitle:
      "AquaHack2019 exists to create solutions that can tackle problems...",
    date: "March 4, 2019",
    links: "/2019-03-04/aquahack-2019",
  },
];

const FourthPressRelease = () => {
  const theme = useTheme();

  const handleShare = (e) => {
    e.preventDefault();

    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    var link;

    switch (e.currentTarget.id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
        open(link);
        break;

      case "twitter":
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
        open(link);
        break;

      case "linkedin":
        link = `https://www.linkedin.com/sharing/share-offsite/?url=${ahref}`;
        open(link);
        break;

      default:
        break;
    }
  };

  const open = (socialLink) => {
    window.open(socialLink, "_blank");
  };

  return (
    <Box>
      <Helmet>
        <title> Blog | Aquatic Hub Afrique</title>
      </Helmet>
      <AppBar
        position={"sticky"}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 }}>
          <Header />
        </Container>
      </AppBar>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          flexWrap={"wrap"}
        >
          <Box
            width={{ xs: "100%", sm: "65%" }}
            padding={{ xs: "35% 0%", sm: "10% 0%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Box display={"flex"} alignItems={"center"} marginBottom={"5%"}>
              <img src={aqua} alt="aquaculture_img" width="95%" />
            </Box>
            <Typography
              variant="h3"
              color={"#050C4C"}
              fontWeight={700}
              paddingBottom={{ xs: "10%", sm: "5%" }}
              textAlign={"left"}
            >
              Aquaculture, the Ideal Industry
            </Typography>
            <Box
              paddingBottom={{ xs: "10%", sm: "5%" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              // flexWrap={"wrap"}
              width={{ xs: "100%", sm: "50%" }}
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                width={{ xs: "35%", sm: "35%" }}
                paddingBottom={{ xs: "0%", sm: "0%" }}
                marginLeft={{ xs: "0%", sm: "0%" }}
              >
                <CalendarTodayIcon
                  sx={{
                    color: "#194ec3",
                    width: 18,
                    height: 18,
                  }}
                />
                <Typography variant="body1" color={"#4f4f4f"}>
                  March 19, 2019
                </Typography>
              </Box>
              <Box width={{ xs: "55%", sm: "40%" }}>
                <Breadcrumbs
                  aria-label="breadcrumb"
                  separator={<DoubleArrowIcon fontSize="small" />}
                >
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="#194ec3"
                    href="/"
                  >
                    <HomeIcon
                      sx={{ mr: 0.5, color: "#194ec3", width: 18, height: 18 }}
                      fontSize="inherit"
                    />
                    Home
                  </Link>
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="#194ec3"
                    href="/blog"
                  >
                    <WhatshotIcon
                      sx={{ mr: 0.5, color: "#194ec3", width: 18, height: 18 }}
                      fontSize="inherit"
                    />
                    Blog
                  </Link>
                </Breadcrumbs>
              </Box>
            </Box>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              Fish is essentially nutritious. It provides 22% of protein intake
              with over 50% in the poorest countries where animal protein is
              expensive and scarce (FAO, 2003).
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              <Typography
                component={"span"}
                color="#050C4C"
                fontWeight={500}
                variant={"h5"}
              >
                &#8226;{" "}
              </Typography>{" "}
              The consumption of fish is highly recommended because it is a good
              source of high quality protein, minerals and vitamins.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              <Typography
                component={"span"}
                color="#050C4C"
                fontWeight={500}
                variant={"h5"}
              >
                &#8226;{" "}
              </Typography>{" "}
              The omega-3 polyunsaturated fatty acids in fresh fish protect
              consumers against coronary heart disease, reducing arrhythmias and
              thrombosis and risk of fatal heart attack and sudden death and
              lowers plasma triglyceride levels.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              <Typography
                component={"span"}
                color="#050C4C"
                fontWeight={500}
                variant={"h5"}
              >
                &#8226;{" "}
              </Typography>{" "}
              Fish intake is beneficial to children’s growth and development and
              protects against some diseases such as rheumatoid arthritis,
              psychiatric disorders and lung disease (Rahman et al., 2008).
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              <Typography
                component={"span"}
                color="#050C4C"
                fontWeight={500}
                variant={"h5"}
              >
                &#8226;{" "}
              </Typography>{" "}
              Fish is also an indispensable source of micronutrients such as
              iron, iodine, zinc, vitamin A and B (World Fish Centre, 2005).
            </Typography>

            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              The demand for fish in Nigeria is much higher than the local
              production. This has made Nigeria to become one of the largest
              importers of fish in the developing world with about 2 million
              metric tons imported annually. We barely have about 1.4 million
              metric tons produced via both culture and capture. However, there
              has been an argument on the health safety of the frozen captured
              fishes imported into the country. For example, the frozen mackerel
              (Scomber scombrus) sold in some parts of the country has been
              reported to contain heavy metals such as mercury, lead, cadmium
              and nickel above the recommended safety limits outlined by FAO/WHO
              (Abubakar et al., 2015). Owing to this, as well as to develop
              local production of fishes, the Federal Government of Nigeria in
              2017 promised to stop the importation of fishes into the country
              and shut down cold rooms where imported frozen fish are stored
              (RipplesNigeria, 2017). According to the then Minister of State
              for Agriculture and Rural Development, Heineken Lokpobiri, “The
              smuggling of unhealthy frozen fish into the country is detrimental
              to the progress being made toward guaranteeing the good health and
              nutrition of Nigerians”.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              At the implementation of the government’s policy on the ban of
              imported frozen fishes, there will be a drastic shortfall in the
              fish supply to Nigerian citizens. Thus, the local fish farmers
              will become the main supplier of fish for national consumption. In
              order to sustain the supply of healthy and consumable fish to the
              Nigerian market and increase personal income, there is the need
              for an increased citizen participation in aquaculture and fish
              farming. Therefore, Aquatic Hub Afrique Network aims to bridge the
              gap existing in the supply of fish to Nigerian consumers. At
              Aquatic Hub Afrique Network, our Academy is focused on:
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              <Typography
                component={"span"}
                color="#050C4C"
                fontWeight={500}
                variant={"h5"}
              >
                &#8226;{" "}
              </Typography>{" "}
              Liberating Africa from the shackles of poverty and hunger through
              capacity building in aquaculture.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              <Typography
                component={"span"}
                color="#050C4C"
                fontWeight={500}
                variant={"h5"}
              >
                &#8226;{" "}
              </Typography>{" "}
              Training people on basics of sustainable aquaculture and fish
              farming.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              <Typography
                component={"span"}
                color="#050C4C"
                fontWeight={500}
                variant={"h5"}
              >
                &#8226;{" "}
              </Typography>{" "}
              Providing technical training to fish farmers on the basics of fish
              farming, consumer awareness, sustainable fish feed production,
              breeding disease-resistant and fast growing fingerlings, fish
              processing, packaging and marketing among others.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              We offer all these with the best in-class training facilities,
              curriculum as well as entrepreneurial and risk management insight
              to aquaculture as well as hands-on farm practical training. Our
              projection is to make Nigeria the largest exporter of fresh
              cultured fishes in Africa and a reference point in aquaculture and
              fish production throughout the world.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontWeight={700}
            >
              Citations and further readings
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontStyle={"italic"}
            >
              Abubakar, A., Uzairu, A., Ekwumemgbo, P.A. and Okunola, O.J.
              (2015). Risk Assessment of Heavy Metals in Imported Frozen Fish
              Scomber scombrus Species Sold in Nigeria: A Case Study in Zaria
              Metropolis. Advances in Toxicology, Article ID 303245, 11 pp.
              http://dx.doi.org/10.1155/2015/303245
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontStyle={"italic"}
            >
              FAO (2003). FAO Data 2003, Available on:
              http://faostat.fao.org/faostat/collections. Accessed April 2003.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontStyle={"italic"}
            >
              Rahman, M.M., Bhattacharya, A., Fernandes, G. 2008.
              Docosahexaenoic acid is more potent inhibitor of osteoclast
              differentiation in RAW 264.7 cells than eicosapentaenoic acid. J.
              Cell Physiol. 214: 201-209.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontStyle={"italic"}
            >
              RipplesNigeria (2017). FG to seal cold rooms with imported frozen
              fish.
              https://www.ripplesnigeria.com/fg-seal-cold-rooms-imported-frozen-fish/
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontStyle={"italic"}
            >
              World Fish Centre (2005). Fish for All: Turning point for
              Aquaculture and Fisheries in Africa, 28(3 and 4):14 – 20.
            </Typography>
            <Typography
              variant="body1"
              color={"#4f4f4f"}
              paddingBottom={{ xs: "5%", sm: "2%" }}
            >
              Signed
            </Typography>
            <Typography variant="body2" color={"#4f4f4f"} fontWeight={700}>
              Admin
            </Typography>
            <Box
              marginTop={"5%"}
              width={{ xs: "60%", sm: "40%" }}
              marginLeft={0}
            >
              <Typography
                variant="body1"
                fontWeight={700}
                color={"#3E4095"}
                gutterBottom
              >
                Share this post
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={{ xs: "70%", sm: "50%" }}
                marginLeft={{ xs: "0%", sm: "0%" }}
              >
                <Avatar
                  sx={{
                    bgcolor: blue[900],
                    width: 36,
                    height: 36,
                    cursor: "pointer",
                  }}
                  id="facebook"
                  onClick={handleShare}
                >
                  <FacebookIcon />
                </Avatar>
                <Avatar
                  sx={{
                    bgcolor: blue[300],
                    width: 36,
                    height: 36,
                    cursor: "pointer",
                  }}
                  id="twitter"
                  onClick={handleShare}
                >
                  <TwitterIcon />
                </Avatar>
                <Avatar
                  sx={{
                    bgcolor: blue[700],
                    width: 36,
                    height: 36,
                    cursor: "pointer",
                  }}
                  id="linkedin"
                  onClick={handleShare}
                >
                  <LinkedInIcon
                    sx={{
                      bgcolor: blue[700],
                    }}
                  />
                </Avatar>
              </Box>
            </Box>
          </Box>
          <Box
            width={{ xs: "92%", sm: "25%" }}
            marginTop={{ xs: "5%", sm: "10%" }}
          >
            <Typography variant="h5" fontWeight={700} color={"#3E4095"}>
              Previous Posts
            </Typography>
            {latest.map((post, index) => (
              <Box
                marginTop={{ xs: "5%", sm: "10%" }}
                display={"flex"}
                key={index}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                flexWrap={{ xs: "wrap", sm: "none" }}
                marginBottom={"5%"}
              >
                <Box
                  marginLeft={{ xs: "0%", sm: "0%" }}
                  width={{ xs: "65%", sm: "40%" }}
                >
                  <Link href={post.links}>
                    <Box
                      component="img"
                      height={{ xs: "15vh", sm: "15vh" }}
                      width={{ xs: "100%", sm: "100%" }}
                      src={post.img}
                      alt={"Fishery"}
                      sx={{
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </Box>
                <Box
                  width={{ xs: "65%", sm: "50%" }}
                  marginLeft={{ xs: "0%", sm: "0%" }}
                >
                  <Link
                    variant="body2"
                    color={"#3E4095"}
                    fontWeight={500}
                    paddingBottom={{ xs: "10%", sm: "5%" }}
                    textAlign={"center"}
                    href={post.links}
                    underline="hover"
                  >
                    {post.title}
                  </Link>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color={"#4f4f4f"}
                    paddingTop={"2%"}
                  >
                    {post.subtitle}
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={500}
                    color={"#aaa"}
                    paddingTop={"2%"}
                  >
                    {post.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Box bgcolor={"#000058"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default FourthPressRelease;
