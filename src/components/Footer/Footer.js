import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { blue, red } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Divider } from "@mui/material";
import logo from "../../assets/logos/logo3.png";

const Footer = () => {
  return (
    <Grid container spacing={1} marginTop={2}>
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
              title="Tracka@10"
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <img src={logo} alt="logo" width={"90%"} />
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
              href="/our-success-stories"
              color="#025066"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              paddingRight={{ xs: "0%", sm: "3%" }}
              sx={{
                "&:hover": {
                  color: "#F89521",
                },
              }}
            >
              Our Impact
            </Link>
            <Link
              underline="none"
              component="a"
              href="/active-citizens-festival"
              color="#025066"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              paddingRight={{ xs: "0%", sm: "3%" }}
              sx={{
                "&:hover": {
                  color: "#F89521",
                },
              }}
            >
              The Festival
            </Link>
            <Link
              underline="none"
              component="a"
              target={"_blank"}
              href={"https://forms.gle/up29j1w3wSX8bPEZ9"}
              color="#025066"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              paddingRight={{ xs: "0%", sm: "3%" }}
              sx={{
                "&:hover": {
                  color: "#F89521",
                },
              }}
            >
              Register
            </Link>
            <Link
              underline="none"
              component="a"
              href="/blog"
              color="#025066"
              variant={"body1"}
              fontWeight={500}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              sx={{
                "&:hover": {
                  color: "#F89521",
                },
              }}
            >
              Blog
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider color={"#F89521"} />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          width={"100%"}
          marginTop={{ xs: "10%", sm: "3%" }}
        >
          <Box
            width={{ xs: "60%", sm: "70%" }}
            marginLeft={{ xs: "3%", sm: "0%" }}
            marginTop={{ xs: "7%", sm: "0%" }}
          >
            <Typography align={"left"} variant={"subtitle2"} color="#025066">
              &copy;{new Date().getFullYear()} Tracka. All rights reserved
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={{ xs: "row", sm: "row" }}
            width={{ xs: "36%", sm: "15%" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            marginTop={{ xs: "4%", sm: "0%" }}
          >
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://twitter.com/TrackaNG"
              title="X"
            >
              <Avatar
                sx={{
                  bgcolor: "#F89521",
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
              href="https://web.facebook.com/trackanigeria/?_rdc=1&_rdr"
              title="Facebook"
            >
              <Avatar
                sx={{
                  bgcolor: "#F89521",
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
              href="https://www.instagram.com/tracka_ng"
              title="Instagram"
            >
              <Avatar
                sx={{
                  bgcolor: "#F89521",
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
