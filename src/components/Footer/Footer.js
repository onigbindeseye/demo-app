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
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Divider } from "@mui/material";
import logo from "../../assets/logos/logo.png";

const Footer = () => {
  return (
    <Grid container spacing={1} marginTop={5}>
      <Grid item xs={12} sm={6} md={12} marginBottom={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={{ xs: "100%", sm: "100%" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            display="flex"
            flexWrap={"wrap"}
            alignItems={"left"}
            flexDirection={"row"}
            width={{ xs: "90%", sm: "35%" }}
            marginLeft={{ xs: "5%", sm: "0%" }}
          >
            <Box
              component="a"
              underline="none"
              href="/"
              title="Oluseun Onigbinde Resource Centre"
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <img src={logo} alt="logo" width={"50%"} />
            </Box>
          </Box>
          <Box
            display="flex"
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            width={{ xs: "95%", sm: "40%" }}
            flexDirection={{ xs: "column", sm: "row" }}
            marginTop={{ xs: "7%", sm: "0%" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            paddingLeft={{ xs: "5%", sm: "0%" }}
          >
            <Link
              underline="none"
              component="a"
              href="/who-we-are"
              color="#071783"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              paddingRight={{ xs: "0%", sm: "3%" }}
              sx={{
                "&:hover": {
                  color: "#050C4C",
                },
              }}
            >
              Who we are
            </Link>
            <Link
              underline="none"
              component="a"
              href="/blog"
              color="#071783"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              paddingRight={{ xs: "0%", sm: "3%" }}
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
              href="/resources/infographics"
              color="#071783"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              paddingRight={{ xs: "0%", sm: "3%" }}
              sx={{
                "&:hover": {
                  color: "#050C4C",
                },
              }}
            >
              Our Resources
            </Link>
            <Link
              underline="none"
              component="a"
              href="/contact-us"
              color="#071783"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              sx={{
                "&:hover": {
                  color: "#050C4C",
                },
              }}
            >
              Contact
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider color={"#071783"} />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          width={"100%"}
          marginTop={{ xs: "10%", sm: "3%" }}
        >
          <Box
            display={{ xs: "flex", sm: "none" }}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={{ xs: "row", sm: "row" }}
            width={{ xs: "90%", sm: "25%" }}
            marginRight={{ xs: "5%", sm: "0%" }}
            marginTop={{ xs: "%", sm: "0%" }}
          >
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://twitter.com/"
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
              href="https://www.facebook.com/"
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
              href="https://www.linkedin.com/company/"
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
              href="https://www.instagram.com/"
              title="Instagram"
            >
              <Avatar
                sx={{
                  bgcolor: "#bbb",
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: red[800],
                  },
                }}
              >
                <InstagramIcon />
              </Avatar>
            </Box>
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://www.youtube.com/"
              title="YouTube"
            >
              <Avatar
                sx={{
                  bgcolor: "#bbb",
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: red[600],
                  },
                }}
              >
                <YouTubeIcon />
              </Avatar>
            </Box>
          </Box>
          <Box
            width={{ xs: "100%", sm: "70%" }}
            marginLeft={{ xs: "3%", sm: "0%" }}
            marginTop={{ xs: "7%", sm: "0%" }}
          >
            <Typography align={"left"} variant={"subtitle2"} color="#071783">
              &copy;{new Date().getFullYear()} Oluseun Onigbinde Resource
              Centre. All rights reserved
            </Typography>
          </Box>
          <Box
            display={{ xs: "none", sm: "flex" }}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={{ xs: "row", sm: "row" }}
            width={{ xs: "100%", sm: "25%" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            marginTop={{ xs: "4%", sm: "0%" }}
          >
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://twitter.com/"
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
              href="https://www.facebook.com/"
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
              href="https://www.linkedin.com/company/"
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
              href="https://www.instagram.com/"
              title="Instagram"
            >
              <Avatar
                sx={{
                  bgcolor: "#bbb",
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: red[800],
                  },
                }}
              >
                <InstagramIcon />
              </Avatar>
            </Box>
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://www.youtube.com/"
              title="YouTube"
            >
              <Avatar
                sx={{
                  bgcolor: "#bbb",
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: red[600],
                  },
                }}
              >
                <YouTubeIcon />
              </Avatar>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
