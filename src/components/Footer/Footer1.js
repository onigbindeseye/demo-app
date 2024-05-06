import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { blue, red } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
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
              title="Aquatic Hub Afrique"
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <img src={logo} alt="logo" width={"50%"} />
            </Box>
            <Typography color="#fff" variant={"body1"} paddingTop={"2%"}>
              Our mission is to increase knowledge, teach skills to achieve high
              productivity in Aquaculture for a sustainable future.
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
                color={"#fff"}
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
                color="#fff"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#050C4C",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                underline="none"
                component="a"
                href="/blog"
                color="#fff"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#050C4C",
                  },
                }}
              >
                Blog
              </Link>
              <Link
                underline="none"
                component="a"
                href="/advisory-council"
                color="#fff"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#050C4C",
                  },
                }}
              >
                Our Team
              </Link>
              <Link
                underline="none"
                component="a"
                href="#"
                color="#fff"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#050C4C",
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
                color={"#fff"}
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
                    color: "#050C4C",
                    width: 18,
                    height: 18,
                  }}
                />{" "}
                <Typography variant="body1" color={"#fff"} textAlign={"left"}>
                  (+234) 818 443 2223
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
                    color: "#050C4C",
                    width: 18,
                    height: 18,
                  }}
                />{" "}
                <Typography variant="body1" color={"#fff"} textAlign={"left"}>
                  {" "}
                  info@bluechofoundation.org
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
                    color: "#050C4C",
                    width: 20,
                    height: 20,
                  }}
                />{" "}
                <Typography variant="body1" color={"#fff"} textAlign={"left"}>
                  20B, Soetan Street, Asero Estate Asero, Abeokuta, Ogun State,
                  Nigeria
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
                color={"#fff"}
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
                href="https://twitter.com/ahubafrique"
                title="Twitter"
              >
                <Avatar
                  sx={{
                    bgcolor: "#bbb",
                    width: 36,
                    height: 36,
                    "&:hover": {
                      bgcolor: "#000",
                    },
                  }}
                >
                  <XIcon />
                </Avatar>
              </Box>
              <Box
                display={"flex"}
                component="a"
                underline="none"
                target={"_blank"}
                href="https://www.facebook.com/ahubafrique"
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
                href="https://www.linkedin.com/company/aquatichubafrique"
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
              <Box
                display={"flex"}
                component="a"
                underline="none"
                target={"_blank"}
                href="https://www.instagram.com/aquatichubafrique"
                title="Instagram"
              >
                <Avatar
                  sx={{
                    bgcolor: "#bbb",
                    width: 36,
                    height: 36,
                    "&:hover": {
                      bgcolor: red[700],
                    },
                  }}
                >
                  <InstagramIcon />
                </Avatar>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider color={"#fff"} />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          width={"100%"}
          marginTop={"3%"}
        >
          <Box width={{ xs: "100%", sm: "100%" }}>
            <Typography align={"center"} variant={"subtitle2"} color="#fff">
              &copy;{new Date().getFullYear()} Oluseun Onigbinde Resources
              Centre. All rights reserved
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
