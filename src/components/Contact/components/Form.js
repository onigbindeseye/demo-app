import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import HouseIcon from "@mui/icons-material/House";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const dotenv = require("dotenv");

const Form = () => {
  dotenv.config();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 200,
    height: 65,
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#5BB318",
    borderColor: "#5BB318",
    "&:hover": {
      color: "#1A4D2E",
      backgroundColor: "#fff",
      borderColor: "#fff",
    },
  }));

  return (
    <Box>
      <Typography
        variant={"h4"}
        fontWeight={700}
        textAlign={"left"}
        color={"#5BB318"}
        paddingBottom={"2%"}
      >
        Get in Touch
      </Typography>
      <Typography
        variant={"body1"}
        fontWeight={400}
        textAlign={"left"}
        color={"#4f4f4f"}
        paddingBottom={"1%"}
      >
        Please fill up the form below for you questions regarding our projects
        or services. Please be patient, we will get back to you within 24 hours.
        For General Inquiries, Phone: +234 908 333 1633.
      </Typography>
      <Box
        width={"100%"}
        margin={{ xs: "20% 0%", sm: "2% 0% 2% 0%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "68%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  name={"name"}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  name={"email"}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Subject"
                  variant="outlined"
                  name={"subject"}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Phone Number"
                  variant="outlined"
                  name={"phone"}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  label="Message"
                  variant="outlined"
                  name={"message"}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item container xs={12}>
                <Box width={"100%"}>
                  <ColorButton
                    size={"large"}
                    variant={"contained"}
                    type={"submit"}
                  >
                    Submit
                  </ColorButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box
          width={{ xs: "100%", sm: "30%" }}
          padding={{ xs: "5% 1%", sm: "2%" }}
        >
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
                <HouseIcon sx={{ color: "#5BB318", width: 26, height: 26 }} />
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
                fontWeight={300}
                textAlign={"left"}
                color={"#000"}
              >
                55 Moleye Street, Alagomeji, Lagos, Nigeria.
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
                <EmailIcon sx={{ color: "#5BB318", width: 26, height: 26 }} />
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
                info@forefront.earth
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
                <PhoneIcon sx={{ color: "#5BB318", width: 26, height: 26 }} />
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
                +234 908 333 1633
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
                  sx={{ color: "#5BB318", width: 26, height: 26 }}
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
                Mon-Fri:9.00am to 5.00pm
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
