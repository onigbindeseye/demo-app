import * as React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Container from "../../../common/Container";

function Banner() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "33%", sm: "15%" }}>
        <Typography
          variant="h2"
          color="#fff"
          fontWeight={700}
          textAlign={"left"}
        >
          Ogbomoso Sons & Daughters
        </Typography>
        <Stack
          spacing={2}
          marginLeft={{ xs: "0%", sm: "0%" }}
          display={{ xs: "none", sm: "block" }}
          paddingTop={"2%"}
          width={"28%"}
        >
          <Breadcrumbs
            separator={
              <KeyboardDoubleArrowRightIcon
                fontSize="medium"
                sx={{
                  color: "#fff",
                }}
              />
            }
            aria-label="breadcrumb"
          >
            <Link
              underline="hover"
              fontWeight={400}
              key="1"
              href="/"
              sx={{
                color: "#fff",
                fontSize: "16px",
              }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              fontWeight={700}
              key="2"
              sx={{
                color: "#FF6969",
                fontSize: "16px",
                fontStyle: "bold",
              }}
              href="/prominent-indigenes"
            >
              Ogbomoso Sons & Daughters
            </Link>
          </Breadcrumbs>
        </Stack>
      </Box>
    </Container>
  );
}

export default Banner;
