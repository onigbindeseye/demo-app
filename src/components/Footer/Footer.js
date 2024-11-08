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
import EmailIcon from "@mui/icons-material/Email";
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
              title="Blue Echo Foundation"
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <img src={logo} alt="logo" width={"50%"} />
            </Box>
            <Typography
              color="#4f4f4f"
              variant={"body1"}
              paddingTop={"2%"}
              fontWeight={700}
              paddingRight={{ xs: "0%", sm: "5%" }}
            >
              Join hands, Let’s take Climate Action Together!
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
              width={{ xs: "90%", sm: "25%" }}
            >
              <Typography
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
                gutterBottom
                color={"#000"}
                align={"left"}
                variant={"body1"}
                paddingBottom={{ xs: "2%", sm: "4%" }}
              >
                Information
              </Typography>
              <Link
                underline="none"
                component="a"
                href="/about-us"
                color="#4f4f4f"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#9DCC49",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                underline="none"
                component="a"
                href="#"
                color="#4f4f4f"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#9DCC49",
                  },
                }}
              >
                Blog
              </Link>
              <Link
                underline="none"
                component="a"
                href="/our-team"
                color="#4f4f4f"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#9DCC49",
                  },
                }}
              >
                Our Team
              </Link>
              <Link
                underline="none"
                component="a"
                href="/our-impact"
                color="#4f4f4f"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#9DCC49",
                  },
                }}
              >
                Our Impact
              </Link>
            </Box>
            <Box
              display="flex"
              flexWrap={"wrap"}
              flexDirection={"column"}
              marginTop={{ xs: "10%", sm: "0%" }}
              width={{ xs: "90%", sm: "25%" }}
              alignItems={"flex-start"}
            >
              <Typography
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
                gutterBottom
                color={"#000"}
                align={"left"}
                variant={"body1"}
                paddingBottom={{ xs: "5%", sm: "4%" }}
              >
                Useful Links
              </Typography>
              <Link
                underline="none"
                component="a"
                href="/trash-calculator"
                color="#000"
                variant={"body1"}
                fontWeight={500}
                paddingBottom={{ xs: "2%", sm: "2%" }}
                lineHeight={2}
                sx={{
                  "&:hover": {
                    color: "#9DCC49",
                  },
                }}
              >
                Trash Calculator
              </Link>
            </Box>
            <Box
              width={{ xs: "70%", sm: "20%" }}
              marginLeft={{ xs: "5%", sm: "0%" }}
              marginTop={{ xs: "10%", sm: "0%" }}
            >
              <Typography
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
                gutterBottom
                color={"#000"}
                align={"left"}
                variant={"body1"}
              >
                Contact
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                marginLeft={{ xs: "0%", sm: "0%" }}
                paddingBottom={{ xs: "4%", sm: "15%" }}
                width={{ xs: "70%", sm: "100%" }}
              >
                <EmailIcon
                  sx={{
                    color: "#9DCC49",
                    width: 23,
                    height: 23,
                  }}
                />{" "}
                <Typography
                  variant="body1"
                  color={"#4f4f4f"}
                  textAlign={"left"}
                >
                  {" "}
                  info@ecocyclers.org
                </Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                marginTop={{ xs: "4%", sm: "0%" }}
              >
                <Box
                  display={"flex"}
                  component="a"
                  underline="none"
                  target={"_blank"}
                  href="https://x.com/EcoCyclers"
                  title="Twitter"
                >
                  <Avatar
                    sx={{
                      bgcolor: "#000",
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
                  href="https://www.facebook.com/ecoenvironmentng"
                  title="Facebook"
                >
                  <Avatar
                    sx={{
                      bgcolor: blue[900],
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
                  href="https://www.linkedin.com/in/eco-cyclers-44a13b283"
                  title="LinkedIn"
                >
                  <Avatar
                    sx={{
                      bgcolor: blue[700],
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
                  href="https://www.instagram.com/eco_cyclers"
                  title="Instagram"
                >
                  <Avatar
                    sx={{
                      bgcolor: red[600],
                      width: 36,
                      height: 36,
                      "&:hover": {
                        bgcolor: red[600],
                      },
                    }}
                  >
                    <InstagramIcon />
                  </Avatar>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider color={"#4CAF50"} />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          width={"100%"}
          marginTop={"3%"}
        >
          <Box width={{ xs: "100%", sm: "100%" }}>
            <Typography align={"center"} variant={"subtitle2"} color="#4f4f4f">
              &copy;{new Date().getFullYear()} Eco-Cyclers Foundation. All
              rights reserved
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
