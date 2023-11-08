import React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Banner = () => {
  return (
    <Box marginTop={{ xs: "35%", sm: "8%" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Typography
          variant={"h2"}
          fontWeight={700}
          textAlign={"left"}
          color={"#fff"}
        >
          Contact Us
        </Typography>
        <Stack
          spacing={2}
          marginRight={{ xs: "0%", sm: "0%" }}
          display={{ xs: "none", sm: "block" }}
        >
          <Breadcrumbs
            separator={
              <KeyboardDoubleArrowRightIcon
                fontSize="large"
                sx={{
                  color: "#fff",
                }}
              />
            }
            aria-label="breadcrumb"
          >
            <Link
              underline="hover"
              fontWeight={700}
              key="1"
              href="/"
              sx={{
                color: "#fff",
                fontSize: "23px",
              }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              fontWeight={700}
              key="2"
              sx={{
                color: "#5BB318",
                fontSize: "23px",
                fontStyle: "bold",
              }}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </Breadcrumbs>
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
