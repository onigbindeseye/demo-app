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
import award1 from "../../../assets/banner/banner1.jpg";
import rollup from "../../../assets/banner/rollup.jpg";

const latest = [
  {
    img: press2,
    title: " Tunde Onakoya bags BudgIT’s Active Citizens Award",
    date: "September 18, 2022",
    links: "/tunde-onakoya-bags-budgit-active-citizens-award",
  },
  {
    img: press,
    title: " Press Statement: Maiden Edition of the Active Citizens Awards",
    date: "July 15, 2022",
    links:
      "/budgit-set-to-host-the-maiden-edition-of-the-active-citizens-awards",
  },
];

const ThirdPressRelease = () => {
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
              <img src={award1} alt="logo" width="95%" />
            </Box>
            <Typography
              variant="h4"
              color={"#049593"}
              fontWeight={700}
              paddingBottom={{ xs: "10%", sm: "5%" }}
              textAlign={"center"}
            >
              BudgIT Opens Nominations for 2023 Active Citizens Award: Unveils
              Two New Categories
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
                  July 17, 2023
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
              BudgIT, a foremost civic-tech organization leading the advocacy
              for accountability, transparency, and effective service delivery
              in Nigeria, is set to host the second edition of the Active
              Citizens Awards. This year’s award, themed ‘Trailblazers of
              Change: Pioneering Solutions, Shaping the Future,’ is scheduled to
              hold on Saturday, September 16, 2023, at the Civic Centre,
              Victoria Island, Lagos.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              The Active Citizens Award is a BudgIT signature effort to honor
              and spotlight individuals and organizations doing ground-breaking
              humanitarian work in Nigeria’s civic space. Among the recipients
              of the maiden edition was Tunde Onakoya, the founder of Chess in
              Slums, who was presented with the Star Award—the Active Citizens
              Award. The Debt Management Office (DMO) was acknowledged with the
              Institutional Transparency Award in the Government Agencies
              category, Debo Macaroni was honored with the Art for Activism
              Award, while Femi Falana, SAN, was recognized with the Hall of
              Fame Award for Civic Activism, alongside other deserving
              individuals and organizations.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              According to BudgIT’s Global Director, Oluseun Onigbinde, the
              award represents a prominent endeavor to highlight and acknowledge
              individuals, organizations, and agencies leading the advocacy for
              transparency, accountability, and good governance in the Nation’s
              democracy through groundbreaking projects. “Based on the success
              of the inaugural edition, BudgIT will continue to recognize those
              who are making a difference in their respective fields through
              remarkable efforts. We are excited to host the 2023 Active Citizen
              Award and spotlight incredible individuals and organizations
              making significant impacts in our society. Through these awards,
              we seek to acknowledge and honor those driving change and actively
              contributing to a better and improved Nigeria,” he said.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              For this year’s edition, the award will feature two new
              categories—the Health Activism Award and the Climate Change
              Activism Award—in addition to the existing eleven categories. We
              anticipate an engaging event through the invaluable support of
              civic leaders, industry leaders, and the general public.
              Nominations for the categories are now officially open, allowing
              individuals to nominate heroes directly through the official
              website at:{" "}
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
              For the 2023 edition, there are a total of thirteen (13) award
              categories. Out of these categories, only seven are eligible for
              public nominations, after which a distinguished panel of judges
              will thoroughly identify the winners of each category. The awards
              committee will select the winners for the remaining six categories
              through extensive research and thoughtful deliberations based on
              specific criteria.
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
              To submit a nomination for an individual or organization in any
              open category, it is essential to thoroughly assess their
              eligibility for the specific category they are nominated for. The
              evaluation of the shortlist and selection of winners in each
              category will be conducted according to the specified criteria,
              which include innovation, impact, milestones, sustainability,
              diversity, inclusion, organizational structure, and leadership
              quality. This requirement entails that upon submitting a
              nomination, it is necessary to include links to relevant impacts
              or projects the nominee has successfully undertaken within a
              designated time frame, aligning with the specified criteria.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "2%", sm: "1%" }}
              fontWeight={700}
              color={"#4f4f4f"}
            >
              Shortlisting and Selection
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              Following the nomination period, all submissions will undergo a
              thorough review process conducted by a carefully chosen Panel of
              Judges, consisting of three stages. After completing the selection
              process, the final shortlist will comprise three individuals with
              the highest grade points in each category. Of these three
              nominees, only one will emerge as the winner in each category.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              For more information about the 2023 Active Citizen Award,
              including sponsorship opportunities, visit:{" "}
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
              color={"#4f4f4f"}
              paddingBottom={{ xs: "5%", sm: "2%" }}
            >
              Signed
            </Typography>
            <Typography variant="body2" color={"#4f4f4f"} fontWeight={700}>
              Nancy Odimegwu
            </Typography>
            <Typography variant="body2" color={"#4f4f4f"} fontWeight={700}>
              Communications Associate
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

export default ThirdPressRelease;
