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
import press2 from "../../../assets/banner/press_1.jpeg";
import press from "../../../assets/2022_aca/img13.jpg";
import rollup from "../../../assets/banner/rollup.jpg";

const latest = [
  {
    img: press2,
    title: " Press Statement: Maiden Edition of the Active Citizens Awards",
    date: "July 15, 2022",
    links:
      "/budgit-set-to-host-the-maiden-edition-of-the-active-citizens-awards",
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
              <img src={press} alt="logo" width={{ xs: "95%", sm: "90%" }} />
            </Box>
            <Typography
              variant="h4"
              color={"#049593"}
              fontWeight={700}
              paddingBottom={{ xs: "10%", sm: "5%" }}
              textAlign={"center"}
            >
              Tunde Onakoya bags BudgIT’s Active Citizens Award; Debt Management
              Office, Mr Macaroni and others win other categories
            </Typography>
            <Box
              paddingBottom={{ xs: "10%", sm: "5%" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              width={{ xs: "90%", sm: "75%" }}
              marginLeft={0}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                width={{ xs: "60%", sm: "35%" }}
                paddingBottom={{ xs: "5%", sm: "0%" }}
              >
                <CalendarTodayIcon sx={{ color: "#049593" }} />
                <Typography variant="body1" color={"#4f4f4f"}>
                  September 18, 2022
                </Typography>
              </Box>
              <Box>
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
              On Saturday, September 10, 2022, BudgIT, a foremost civic-tech
              organisation leading the advocacy for accountability, transparency
              and effective service delivery in Nigeria and four other African
              countries, officially announced and celebrated the winners of the
              maiden edition of the Active Citizens’ Award.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              The award celebrated phenomenal individuals and organisations that
              are creating sustainable impacts that have benefited citizens and
              instituted civic and social change to improve the nation's
              democratic development. It was a pleasure to host dignitaries
              celebrating the new heroes of Nigeria’s democracy. The award had
              in attendance Adenike Adeyemi, Executive Director, Fate
              Foundation; Oreoluwa Somolu Lesi, Executive Director, Women's
              Technology Empowerment Centre, Hamzat Lawal, Executive Director,
              Connected Development, among others.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              Announcing the winners, Tunde Onakoya, founder of Chess in Slums,
              emerged winner of the star award, which was the Active Citizens
              Award, for his tremendous contribution to empowering Nigerian
              children in impoverished communities.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              In the same vein, the Debt Management Office and Debo Macaroni
              emerged as winners of the Awards for Institutional Transparency
              (Government Agencies), which recognise a government agency that
              provides quality service delivery that contributes significantly
              to the development of the Nigerian populace, and the Art for
              Activism Award, which celebrates a work of art that has pushed for
              political consciousness, reform, and national change,
              respectively.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              Recipients for other non-nomination categories include TIERS
              Nigeria, which won the Award for Inclusion and Diversity for
              promoting equality through inclusion and diversity among
              marginalised groups; Femi Falana, SAN, who won the Hall of Fame
              Award for Civic Activism for his contribution to national
              development via civic activism; and Union Bank of Nigeria, which
              won the Corporate Award for Civic Investments for positively
              impacting society through its support or engagement in civic
              activism.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              For the nomination category, the recipients are Solomon O.
              Ayodele, Founder, Boys Quarters Africa, who won the Award for
              Community Service; Taiwo Adebulu, The Cable, who won the Solutions
              Journalism Award; Adepeju Jaiyeoba, BrownButton Foundation, who
              won the Oby Ezekwesili Award for Women Advocacy; Muazu Alhaji
              Modu, Spotlight for Transparency and Accountability, who won the
              Civic Activism Award, and Sola Owoniko, Project Enable, who bagged
              the award for Disability Empowerment.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              Commenting, BudgIT’s Global Director, Oluseun Onigbinde, noted
              that the Active Citizens Awards will be an annual signature event
              to foster dialogue and value the contributions of development
              leaders to good governance and effective service delivery in
              Nigeria, adding that BudgIT is open to leveraging public-private
              partnerships for future editions in order to expand the scope of
              the awards beyond its immediate threshold’.
            </Typography>
            <Typography
              variant="body1"
              paddingBottom={{ xs: "5%", sm: "2%" }}
              lineHeight={1.75}
              color={"#4f4f4f"}
            >
              ‘The Active Citizen’s Award will be a yearly event to commemorate
              BudgIT’s anniversary. While we promote personalities who are doing
              incredible work in Nigeria’s democracy and across different
              spectrums, we would also measure our impact within Nigeria’s civic
              ecosystem. Congratulations to all the nominees and winners.’
              Oluseun added.
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
              Communications Officer
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

export default SecondPressRelease;
