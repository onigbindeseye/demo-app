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

const SecondPressRelease = () => {
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
              <img src={retirement} alt="retirement_img" width="95%" />
            </Box>
            <Typography
              variant="h3"
              color={"#050C4C"}
              fontWeight={700}
              paddingBottom={{ xs: "10%", sm: "5%" }}
              textAlign={"left"}
            >
              Retirement Just Ahead!
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
                  March 13, 2020
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
              One of the greatest challenges facing typical employees throughout
              their working life is ‘life after retirement’. Some of the
              challenges that come with retirement include emotional,
              psychological and financial challenges. To such challenges, the
              workers have to prepare well ahead of time. Also, retirement
              happens at old age, leveraging on reduced strength and health of
              the previously agile and healthy worker. It is however saddening
              that most workers do not plan ahead of their retirement and
              therefore live with guilt for the rest of their lives, blaming
              themselves for short-sighted vision. Unfortunately, the public
              sector pension schemes have today been faced with many failure and
              the workers have to set aside some money from their income through
              contributory pension scheme to invest for their retirement from
              service.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              Although, Egbuta (1991) described retirement as the withdrawal of
              the individual from gainful employment in the later part of his or
              her life in order to enjoy a period of leisure till death, most
              workers do not enjoy any ‘period of leisure’ after their
              retirement. In a report by Kolawole and Mullum (2004), the typical
              retiree in Nigeria is confronted with the challenge of managing
              insufficient financial resources, problem of securing residential
              accommodation, the challenge of a new and low social status,
              difficult health and challenges of declining health. The main
              cause of these problems as listed by Yunusa (2013) include
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
              Non-payment of Gratuities and delays in the payment of pension.
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
              Non-review of pensioners’ allowances as provided for in the 1999
              constitution of the Federal Republic of Nigeria.
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
              The non-recognition of retirees by government in the schemes of
              development programmes.
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
              Lack of preparation for retirement.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              At Aquatic Hub Afrique Network,
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
              We are not insensitive to the troubles and pains of our esteemed
              retirees who have spent a greater portion of their productive life
              in national service.
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
              We also observed that most retirees either lost their gratuity
              while attempting a business they are not good in or were duped by
              advanced fee fraudsters.
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
              We are focused on liberating Africa from the shackles of poverty
              and hunger through capacity building in aquaculture
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
              Thus, our Institute has set up series of flexible training in
              aquaculture and fish farming for workers in-service and the
              retirees.
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
              To this effect, we offer technical training to fish farmers on the
              basics of fish farming, consumer awareness, sustainable fish feed
              production, breeding disease-resistant and fast growing
              fingerlings, fish processing, packaging and marketing among
              others.
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
              We offer the best in-class training facilities, curriculum as well
              as entrepreneurial and risk management insight to aquaculture as
              well as hands-on farm practical training.
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
              We train workers in-service and encourage them to start the
              aquaculture and fish farming business while in service.
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
              Hence, some of our trainees retired voluntarily from service to
              face their aquaculture business while other see retirement as an
              opportunity to face their already running aquaculture business
              with little or no disturbances.
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
              This way, our institute projects to train and establish two
              thousand (2,000) in-service workers and retirees respectively per
              annum.
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
              Egbuta I. C. (1991). Thinking of Your Retirement, A Guidance in
              Retirement Planning, Ages, Nigeria Limited.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "1%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontStyle={"italic"}
            >
              Kolawole S.A. and Mallum, A.Y. (2004). Retirement counseling:
              Challenges, opportunities and coping strategies. Paper presented
              at the Annual Conference of the Counselling Association of Nigeria
              (CASSON), Maiduguri, Nigeria.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
              fontStyle={"italic"}
            >
              Yunusa, A.I. (2013). Retirement challenges and management
              strategies among retired civil servants in Kogi state.
              International Journal of Social Sciences and Humanities Reviews,
              4(1): 53 – 66
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

export default SecondPressRelease;
