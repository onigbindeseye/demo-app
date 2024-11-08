import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import banner1 from "../../../assets/banner/banner1.jpg";
import Container from "../../../common/Container";

const ColorButton = styled(Button)(() => ({
  color: "#fff",
  width: 180,
  height: 55,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#3CAB34",
  borderColor: "#3CAB34",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#9ACB34",
    borderColor: "#9ACB34",
  },
}));

function Banner() {
  return (
    <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "5%", sm: "0%" }}>
      <Box>
        <Box
          component="img"
          height={{ xs: "110vh", sm: "100vh" }}
          display={{ xs: "none", sm: "block" }}
          sx={{
            objectFit: "cover",
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
          src={banner1}
          alt={"banner"}
        />
        <Container>
          <Box
            paddingBottom={"3%"}
            position={"absolute"}
            top={{ xs: "32%", sm: "50%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
            width={{ xs: "90%", sm: "50%" }}
          >
            {" "}
            <Typography
              variant="h2"
              color="#fff"
              fontWeight={800}
              textAlign={"left"}
            >
              Join hands, Let's take Climate Action Together!
            </Typography>
            <Box margin={{ xs: "4% 0%", sm: "2% 0%" }}>
              <ColorButton
                component={"a"}
                variant="contained"
                size="medium"
                href={"/about-us"}
              >
                Read More
              </ColorButton>
            </Box>
          </Box>
          <Box
            position={"absolute"}
            top={{ xs: "15%", sm: "90%" }}
            // marginLeft={{ xs: "0%", sm: "0%" }}
            width={{ xs: "100%", sm: "70%" }}
            display={{ xs: "none", sm: "block" }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              margin={{ xs: " 0%", sm: "0% 0% 4% 0%" }}
            >
              <Box
                padding={{ xs: "3%", sm: "5%" }}
                width={{ xs: "100%", sm: "33%" }}
                margin={{ xs: "0%", sm: "4% 0%" }}
                bgcolor={"#3CAB34"}
                color={"#fff"}
              >
                <Typography variant={"h5"} fontWeight={700} paddingTop={"6%"}>
                  Community-Centered Model
                </Typography>
                <Typography variant={"subtitle2"} paddingTop={"6%"}>
                  We actively engages local communities through educational
                  programs, and partnerships with businesses and schools,
                  fostering a shared commitment to sustainable waste management.
                </Typography>
              </Box>
              <Box
                width={{ xs: "100%", sm: "33%" }}
                height={"100%"}
                padding={{ xs: "3%", sm: "5%" }}
                margin={{ xs: "4% 0%", sm: "4% 0%" }}
                bgcolor={"#fff"}
              >
                <Typography
                  variant={"h5"}
                  fontWeight={700}
                  paddingTop={"6%"}
                  color={"#3CAB34"}
                >
                  Eco-Friendly Innovations
                </Typography>
                <Typography variant={"subtitle2"} paddingTop={"6%"}>
                  By employing unique recycling techniques and innovative tools,
                  Eco Cyclers maximizes the positive environmental impact of its
                  waste management initiatives.
                </Typography>
              </Box>
              <Box
                padding={{ xs: "3%", sm: "5%" }}
                width={{ xs: "100%", sm: "33%" }}
                margin={{ xs: "4% 0%", sm: "4% 0%" }}
                bgcolor={"#fff"}
              >
                <Typography
                  variant={"h5"}
                  fontWeight={700}
                  paddingTop={"6%"}
                  color={"#3CAB34"}
                >
                  Behavioral Change Campaigns
                </Typography>
                <Typography variant={"subtitle2"} paddingTop={"6%"}>
                  Through targeted campaigns, we promotes waste reduction,
                  responsible consumption, and environmental responsibility,
                  inspiring lasting shifts in public perception and behavior.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Banner;
