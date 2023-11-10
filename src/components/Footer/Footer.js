import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../../assets/logos/logo.png";

const Footer = () => {
  return (
    <Grid container spacing={1} marginTop={5}>
      <Grid item xs={12} sm={6} md={12} marginBottom={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={{ xs: "100%", sm: "100%" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            display="flex"
            flexWrap={"wrap"}
            alignItems={"left"}
            flexDirection={"column"}
            width={{ xs: "90%", sm: "35%" }}
            marginLeft={{ xs: "5%", sm: "0%" }}
          >
            <Box
              component="a"
              underline="none"
              href="/"
              title="Forefront Africa"
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <img src={logo} alt="logo" width={"60%"} />
            </Box>
            <Typography color="#1A4D2E" variant={"body1"} paddingTop={"2%"}>
              We help companies, investors and governments, accelerate their
              decarbonisation process. Speak with our expert team today to find
              out how Forefront Africa can help you meet your targets.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            width={{ xs: "95%", sm: "100%" }}
            flexDirection={{ xs: "column", sm: "row" }}
            marginLeft={{ xs: "0%", sm: "5%" }}
            marginBottom={2}
          >
            <Box
              display="flex"
              flexWrap={"wrap"}
              flexDirection={"column"}
              marginTop={{ xs: "10%", sm: "0%" }}
              width={{ xs: "90%", sm: "30%" }}
            >
              <Typography
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
                gutterBottom
                color={"#1A4D2E"}
                align={"left"}
                variant={"body1"}
                paddingBottom={{ xs: "2%", sm: "2%" }}
              >
                Company
              </Typography>
              <Link
                underline="none"
                component="a"
                href="/about-us"
                color="#1A4D2E"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#5BB318",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                underline="none"
                component="a"
                href="#"
                color="#1A4D2E"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#5BB318",
                  },
                }}
              >
                Blog
              </Link>
              <Link
                underline="none"
                component="a"
                href="#"
                color="#1A4D2E"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#5BB318",
                  },
                }}
              >
                Our Team
              </Link>
              <Link
                underline="none"
                component="a"
                href="#"
                color="#1A4D2E"
                variant={"body1"}
                display={{ xs: "none", sm: "block" }}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#5BB318",
                  },
                }}
              >
                Resources
              </Link>
            </Box>
            <Box
              display="flex"
              flexWrap={"wrap"}
              flexDirection={"column"}
              marginTop={{ xs: "10%", sm: "0%" }}
              width={{ xs: "90%", sm: "30%" }}
              alignItems={"flex-start"}
            >
              <Typography
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
                gutterBottom
                color={"#1A4D2E"}
                align={"left"}
                variant={"body1"}
                paddingBottom={{ xs: "5%", sm: "10%" }}
              >
                Contact Us
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                marginLeft={{ xs: "0%", sm: "0%" }}
                paddingBottom={{ xs: "5%", sm: "5%" }}
              >
                <PhoneIcon
                  sx={{
                    color: "#1A4D2E",
                    width: 18,
                    height: 18,
                  }}
                />{" "}
                <Typography
                  variant="body1"
                  color={"#1A4D2E"}
                  textAlign={"left"}
                >
                  (+234) 908 333 1633
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                paddingBottom={{ xs: "5%", sm: "5%" }}
                marginLeft={{ xs: "0%", sm: "0%" }}
              >
                <EmailIcon
                  sx={{
                    color: "#1A4D2E",
                    width: 18,
                    height: 18,
                  }}
                />{" "}
                <Typography
                  variant="body1"
                  color={"#1A4D2E"}
                  textAlign={"left"}
                >
                  {" "}
                  info@forefront.earth
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                paddingBottom={{ xs: "5%", sm: "5%" }}
                marginLeft={{ xs: "0%", sm: "0%" }}
              >
                <HouseIcon
                  sx={{
                    color: "#1A4D2E",
                    width: 20,
                    height: 20,
                  }}
                />{" "}
                <Typography
                  variant="body1"
                  color={"#1A4D2E"}
                  textAlign={"left"}
                >
                  42, Montgomery Road, Yaba, Lagos, Nigeria.
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDirection={{ xs: "row", sm: "column" }}
              width={{ xs: "70%", sm: "15%" }}
            >
              <Typography
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
                gutterBottom
                color={"#1A4D2E"}
                align={"left"}
                variant={"body1"}
                display={{ xs: "none", sm: "block" }}
              >
                Follow Us
              </Typography>
              <Box
                display={"flex"}
                component="a"
                underline="none"
                target={"_blank"}
                href="https://twitter.com/Forefront"
                title="Twitter"
              >
                <Avatar
                  sx={{
                    bgcolor: "#bbb",
                    width: 36,
                    height: 36,
                    "&:hover": {
                      bgcolor: blue[300],
                    },
                  }}
                >
                  <TwitterIcon />
                </Avatar>
              </Box>
              <Box
                display={"flex"}
                component="a"
                underline="none"
                target={"_blank"}
                href="https://www.facebook.com/forefront/"
                title="Facebook"
              >
                <Avatar
                  sx={{
                    bgcolor: "#bbb",
                    width: 36,
                    height: 36,
                    "&:hover": {
                      bgcolor: blue[900],
                    },
                  }}
                >
                  <FacebookIcon />
                </Avatar>
              </Box>
              <Box
                display={"flex"}
                component="a"
                underline="none"
                target={"_blank"}
                href="https://www.linkedin.com/company/forefront-africa"
                title="LinkedIn"
              >
                <Avatar
                  sx={{
                    bgcolor: "#bbb",
                    width: 36,
                    height: 36,
                    "&:hover": {
                      bgcolor: blue[700],
                    },
                  }}
                >
                  <LinkedInIcon />
                </Avatar>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider color={"#1A4D2E"} />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          width={"100%"}
          marginTop={"3%"}
        >
          <Box width={{ xs: "100%", sm: "100%" }}>
            <Typography align={"center"} variant={"subtitle2"} color="#1A4D2E">
              &copy;{new Date().getFullYear()} Forefront Africa. All rights
              reserved
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
