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
      margin={{ xs: "4% 0%", sm: "5% 0" }}
      alignItems={"center"}
    >
      <Grid item xs={12} sm={6}>
        <Box component={Card} padding={"5%"} backgroundColor={"#fff"}>
          <Box padding={{ xs: "5% 1%", sm: "2%" }}>
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
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <HouseIcon sx={{ color: "#9DCC49", width: 26, height: 26 }} />
                </Avatar>
              </Box>
              <Box width={"92%"}>
                <Typography
                  variant={"body1"}
                  fontWeight={500}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Office
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={300}
                  textAlign={"left"}
                  color={"#000"}
                >
                  No 21A Umuawulu Street, Opp. Army Checkpoint, Ugwuaji
                  Expressway, Enugu State
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
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <EmailIcon sx={{ color: "#9DCC49", width: 26, height: 26 }} />
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
                  fontWeight={300}
                  textAlign={"left"}
                  color={"#000"}
                >
                  hello.ecocyclers@gmail.com
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
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <PhoneIcon sx={{ color: "#9DCC49", width: 26, height: 26 }} />
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
                  fontWeight={300}
                  textAlign={"left"}
                  color={"#000"}
                >
                  +234 902 501 2196
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
                    bgcolor: "#fff",
                    border: " 2px dotted #CACACA",
                    padding: "5%",
                  }}
                >
                  <AccessTimeIcon
                    sx={{ color: "#9DCC49", width: 26, height: 26 }}
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
                  fontWeight={300}
                  textAlign={"left"}
                  color={"#000"}
                >
                  Mon-Fri: 9.00am to 5.00pm
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
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=  No 21A Umuawulu Street, Opp. Army Checkpoint, Ugwuaji                   Expressway, Enugu State&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactDetails;
