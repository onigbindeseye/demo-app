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
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { blue } from "@mui/material/colors";
import press from "../../../assets/banner/press_1.jpeg";
import press2 from "../../../assets/2022_aca/img13.jpg";
import rollup from "../../../assets/banner/rollup.jpg";

const latest = [
  {
    img: press2,
    title: " Tunde Onakoya bags BudgIT’s Active Citizens Award",
    date: "September 18, 2022",
    links: "/tunde-onakoya-bags-budgit-active-citizens-award",
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
        <title> Blog | BudgIT Active Citizens Awards</title>
      </Helmet>
      <AppBar
        position={"fixed"}
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
            paddingTop={{ xs: "35%", sm: "10%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Box display={"flex"} alignItems={"center"} marginBottom={"5%"}>
              <img src={press} alt="logo" width="95%" />
            </Box>
            <Typography
              variant="h4"
              color={"#049593"}
              fontWeight={700}
              paddingBottom={{ xs: "10%", sm: "5%" }}
              textAlign={"center"}
            >
              PRESS RELEASE: BudgIT Set to Host the Maiden Edition of the Active
              Citizens Awards: Calls for Nomination
            </Typography>
            <Box
              paddingBottom={{ xs: "10%", sm: "5%" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              width={{ xs: "90%", sm: "55%" }}
              marginLeft={0}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                width={{ xs: "45%", sm: "35%" }}
                paddingBottom={{ xs: "5%", sm: "0%" }}
              >
                <CalendarTodayIcon sx={{ color: "#049593" }} />
                <Typography variant="body1" color={"#4f4f4f"}>
                  July 15, 2022
                </Typography>
              </Box>
              <Box width={{ xs: "65%", sm: "40%" }}>
                <Breadcrumbs
                  aria-label="breadcrumb"
                  separator={<NavigateNextIcon fontSize="small" />}
                >
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="#049593"
                    href="/"
                  >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                  </Link>
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="#049593"
                    href="/Blog"
                  >
                    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
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
              On Thursday, July 14, 2022, BudgIT, a foremost civic-tech
              organisation leading the advocacy for accountability, transparency
              and effective service delivery in Nigeria and four other African
              countries, officially announced the maiden edition of its Active
              Citizens Awards. This event which is scheduled to hold on
              September 10, 2022, at the Civic Centre, Lagos, seeks to promote
              and recognise individuals and organisations doing tremendous
              humanitarian work in Nigeria.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              According to Oluseun Onigbinde, BudgIT’s Global Director, the
              awards is one of BudgIT’s signature initiatives and efforts to
              spotlight and recognise personalities, organisations and agencies
              that are championing causes, programs and initiatives that have
              positively influenced women’s rights, community service,
              disability rights and inclusion, political activism, civic
              engagement and action, journalism, human rights, effective service
              delivery and other gains of social activism in Nigeria.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              There is nothing more remarkable than recognising personalities
              who do exceptional work within the civic ecosystem and are
              committed to ensuring citizens and government continually uphold
              the ideals of democracy. We believe that the Active Citizens
              Awards would stir more conversations on the need to entrench a
              culture of recognising and celebrating the tremendous
              contributions of development leaders to effective governance and
              an active civic space in Nigeria. The awards will feature ten (10)
              categories, including the Oby Ezekwesili Award for Women Advocacy,
              Award for Community Service, Disability Rights Advocacy or
              Empowerment Award, Award for Institutional Transparency, Art for
              Activism and many more.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              BudgIT looks forward to a thrilling event with support from civic
              leaders, industry leaders and the general public. Nominations are
              officially open; thus, you can nominate heroes directly at{" "}
              <Link
                component={"a"}
                color="#049593"
                fontWeight={700}
                variant={"body1"}
                sx={{
                  cursor: "pointer",
                }}
              >
                https://awards.civichive.org/
              </Link>
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "2%", sm: "1%" }}
              fontWeight={700}
              color={"#4f4f4f"}
            >
              Nominations
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              There are Ten (10) categories of awards. Of these categories, only
              5 are open to nominations from the public. A panel of selected
              judges will carefully select winners for the other five categories
              after thorough research and deliberations hinged on specific
              criteria and the selection process.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "2%", sm: "1%" }}
              fontWeight={700}
              color={"#4f4f4f"}
            >
              Criteria and Eligibility for Nomination
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              To nominate an individual or organisation for any category, you
              must carefully review their eligibility for the category they are
              being nominated for. The shortlist and winner of each category
              will only be considered based on the specified criteria including,
              innovation, impact, milestones, sustainability, diversity and
              inclusion, organisational structure and leadership quality. This
              invariably means that once you make a nomination, you must provide
              links to some impacts or projects that the nominee has executed
              within a specified period of time, covering the specified
              criteria.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "2%", sm: "1%" }}
              fontWeight={700}
              color={"#4f4f4f"}
            >
              Shortlisting and Final Selection
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              After the nominations, all the submissions will be reviewed in a
              three-stage selection process by selected Panel of Judges. Once
              the selection process has been completed, the final shortlist will
              consist of three individuals with the highest grade points from
              each category. Of these three, only one nominee will emerge as the
              winner in each category. The winner will be announced during the
              Awards event at the Civic Centre, Lagos.
            </Typography>
            <Typography
              variant="body1"
              color={"#4f4f4f"}
              paddingBottom={{ xs: "5%", sm: "2%" }}
            >
              Signed
            </Typography>
            <Typography variant="body2" color={"#4f4f4f"} fontWeight={700}>
              Iyanu Fatoba
            </Typography>
            <Typography variant="body2" color={"#4f4f4f"} fontWeight={700}>
              Ag Head; Media, Communications and Creatives
            </Typography>
            <Box
              marginTop={"5%"}
              width={{ xs: "60%", sm: "40%" }}
              marginLeft={0}
            >
              <Typography variant="body1" fontWeight={700} color={"#049593"}>
                Share this post
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={{ xs: "70%", sm: "50%" }}
                  marginLeft={"0%"}
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
              </Typography>
            </Box>
          </Box>
          <Box
            width={{ xs: "92%", sm: "25%" }}
            marginTop={{ xs: "25%", sm: "10%" }}
          >
            <Typography variant="h5" fontWeight={700} color={"#049593"}>
              Related Posts
            </Typography>
            {latest.map((post, index) => (
              <Box
                marginTop={"10%"}
                display={"flex"}
                key={index}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexWrap={{ xs: "wrap", sm: "none" }}
              >
                <Box
                  display={"flex"}
                  alignItems={"left"}
                  marginBottom={"5%"}
                  marginLeft={{ xs: "0%", sm: "0%" }}
                  width={{ xs: "65%", sm: "40%" }}
                >
                  <img src={post.img} alt="logo" width={"100%"} />
                </Box>
                <Box width={{ xs: "100%", sm: "50%" }}>
                  <Link
                    variant="body2"
                    color={"#049593"}
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
                    fontWeight={500}
                    color={"#aaa"}
                    paddingTop={"2%"}
                  >
                    {post.date}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Box
              component="img"
              height={{ xs: "27vh", sm: "170vh" }}
              sx={{
                objectFit: "cover",
              }}
              src={rollup}
              alt={"aca2023_img"}
              display={{ xs: "none", sm: "block" }}
              marginRight={{ xs: "0%", sm: "0.5%" }}
              marginBottom={{ xs: "1%", sm: "0.5%" }}
              marginTop={{ xs: "1%", sm: "10%" }}
            />
          </Box>
        </Box>
      </Container>
      <Box bgcolor={"#049593"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default FirstPressRelease;
