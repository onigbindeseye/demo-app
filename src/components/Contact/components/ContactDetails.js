import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import HouseIcon from "@mui/icons-material/House";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ContactDetails = () => {
  return (
    <Grid
      container
      spacing={2}
      margin={{ xs: "20% 0%", sm: "2% 0" }}
      alignItems={"center"}
    >
      <Grid item xs={12} sm={6}>
        <Box component={Card} padding={"5%"} backgroundColor={"#F6F5F5"}>
          <Box padding={{ xs: "5% 1%", sm: "2%" }}>
            <Box
              display="flex"
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              marginTop={"2%"}
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <Box width={"14%"} marginRight={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "#F6F5F5",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <HouseIcon sx={{ color: "#071783", width: 26, height: 26 }} />
                </Avatar>
              </Box>
              <Box width={"92%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={500}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Office Address
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Beside Item 7 Go, Oke Ado, Ogbomosho, Oyo State.
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              marginTop={"4%"}
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <Box width={"14%"} marginRight={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "#F6F5F5",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <EmailIcon sx={{ color: "#071783", width: 26, height: 26 }} />
                </Avatar>
              </Box>
              <Box width={"92%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={500}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Send your mail at
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  textAlign={"left"}
                  color={"#000"}
                >
                  info@oluseunresourcecenter.org
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              marginTop={"4%"}
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <Box width={"14%"} marginRight={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "#F6F5F5",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <PhoneIcon sx={{ color: "#071783", width: 26, height: 26 }} />
                </Avatar>
              </Box>
              <Box width={"92%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={500}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Have Any Question
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  textAlign={"left"}
                  color={"#000"}
                >
                  +234 806 668 9314
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              marginTop={"4%"}
              marginLeft={{ xs: "0%", sm: "0%" }}
            >
              <Box width={"14%"} marginRight={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "#F6F5F5",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <AccessTimeIcon
                    sx={{ color: "#071783", width: 26, height: 26 }}
                  />
                </Avatar>
              </Box>
              <Box width={"92%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={500}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Working Hours
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Mon-Sat: 9.00am to 5.00pm
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box marginY={4}>
          <Box
            component={"iframe"}
            borderRadius={2}
            minHeight={350}
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed/v1/place?q=Item+7+Go,+Ogbomosho,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactDetails;
