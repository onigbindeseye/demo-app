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
    img: aqua,
    title: "Aquaculture, the Ideal Industry",
    subtitle: "The demand for fish in Nigeria is much higher than the local...",
    date: "March 19, 2019",
    links: "/2019-03-19/aquaculture-the-ideal-industry",
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

const FirstPressRelease = () => {
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
              <img src={covid} alt="covid_img" width="95%" />
            </Box>
            <Typography
              variant="h3"
              color={"#050C4C"}
              fontWeight={700}
              paddingBottom={{ xs: "10%", sm: "5%" }}
              textAlign={"left"}
            >
              After COVID-19, What Next?
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
                width={{ xs: "35%", sm: "30%" }}
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
                  April 8, 2020
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
              The bright side of COVID-19 #StayAtHome provides you an
              opportunity to re-strategize and re-examine your business models
              again; see where you may need finance to upscale or start a new
              business entirely. Those who seize the moment now for expansion or
              create new values will be regarded as smart guys when this
              pandemic passes away.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              NIRSAL Microfinance Bank licenced by the Central Bank of Nigeria
              to operate as a National Microfinance Bank is the solution to
              problems surrounding funds for your start-up or upscaling of your
              business. With NIRSAL, Beneficiaries have the opportunity to
              access loans and credit facilities up to Ten (10) Million Naira
              with absolutely no collateral, moratorium given and a single digit
              interest of 9% payable over a good number of years.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              An Enterprise Development Training for all enterprise and not
              solely Agriculture is the basic minimum requirement to apply for
              this loan and we are currently running online training; therefore,
              you can apply and attend training from anywhere across the country
              and have your Certificate mailed to you with a security code . As
              soon as your registration is valid, you would be admitted and
              contacted thereafter.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              If interested, kindly visit bit.ly/AquaNIRSAL to create a profile
              and signup, in the process of creating a password, your password
              must contain at least an upper case letter, lower case, a digit
              and a special character and then sign in with the password created
              and register to be trained. In the space provided for Training
              Centre, kindly select “Ogun State” and select “Aquatic Hub Afrique
              Network/Fish Shoal Nigeria”.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              Kindly also endeavour to inform someone about this opportunity
              today. For further enquiries, please contact us on 07086675628.
            </Typography>

            <Typography
              variant="body1"
              color={"#4f4f4f"}
              paddingBottom={{ xs: "5%", sm: "2%" }}
            >
              Signed
            </Typography>
            <Typography variant="body2" color={"#4f4f4f"} fontWeight={700}>
              Lekan Aquatic
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

export default FirstPressRelease;
