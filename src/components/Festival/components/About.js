import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const About = () => {
  const ColorButton = styled(Button)(() => ({
    color: "#fff",
    width: 200,
    height: 55,
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "capitalize",
    backgroundColor: "#F89521",
    borderColor: "3px solid #F89521",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#B84028",
      borderColor: "#B84028",
    },
  }));

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-14T00:00:00+01:00") - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: ("0" + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
        hours: ("0" + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(
          -2
        ),
        minutes: ("0" + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        seconds: ("0" + Math.floor((difference / 1000) % 60)).slice(-2),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
      marginTop={{ xs: "25%", sm: "0%" }}
    >
      <Box
        width={{ xs: "100%", sm: "50%" }}
        padding={{ xs: "5% 0%", sm: "2%" }}
      >
        <Typography
          variant={"h3"}
          fontWeight={700}
          textAlign={"center"}
          color={"#fff"}
          paddingBottom={"4%"}
        >
          Coming Very Soon!
        </Typography>
        {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={{ xs: "100%", sm: "100%" }}
            marginTop={{ xs: "5%", sm: "1%" }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              backgroundColor={"#B84028"}
              width={"35%"}
              margin={{ xs: "1%", sm: "2%" }}
              padding={"2%"}
            >
              <Box padding={"2%"}>
                <Typography variant="h3" color={"#fff"} textAlign={"center"}>
                  {timeLeft.days}
                </Typography>
              </Box>
              <Typography
                variant="body"
                color={"#fff"}
                textAlign={"center"}
                paddingTop={"2%"}
                fontWeight={700}
              >
                Days
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              backgroundColor={"#B84028"}
              width={"35%"}
              margin={{ xs: "1%", sm: "2%" }}
              padding={"2%"}
            >
              <Box padding={"2%"}>
                <Typography variant="h3" color={"#fff"} textAlign={"center"}>
                  {timeLeft.hours}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color={"#fff"}
                textAlign={"center"}
                paddingTop={"2%"}
                fontWeight={700}
              >
                Hours
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              backgroundColor={"#B84028"}
              width={"35%"}
              margin={{ xs: "1%", sm: "2%" }}
              padding={"2%"}
            >
              <Box padding={"2%"}>
                <Typography variant="h3" color={"#fff"} textAlign={"center"}>
                  {timeLeft.minutes}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color={"#fff"}
                textAlign={"center"}
                paddingTop={"2%"}
                fontWeight={700}
              >
                Minutes
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              backgroundColor={"#B84028"}
              width={"30%"}
              margin={{ xs: "1%", sm: "2%" }}
              padding={"2%"}
            >
              <Box padding={"2%"}>
                <Typography variant="h3" color={"#fff"} textAlign={"center"}>
                  {timeLeft.seconds}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color={"#fff"}
                textAlign={"center"}
                paddingTop={"2%"}
                fontWeight={700}
              >
                Seconds
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography
            variant="h3"
            color={"#F89521"}
            textAlign={"center"}
            paddingTop={"5%"}
          >
            Let's Have Fun! 🔥
          </Typography>
        )}

        <Box display={"flex"} justifyContent={"center"} paddingTop={"4%"}>
          <ColorButton
            component={"a"}
            variant="contained"
            size="medium"
            href={"/register"}
          >
            Register
          </ColorButton>
        </Box>
      </Box>

      <Box
        width={{ xs: "100%", sm: "50%" }}
        padding={{ xs: "20% 1%", sm: "4% 2%" }}
      >
        <Typography
          gutterBottom
          fontWeight={700}
          variant="h3"
          paddingTop={"2%"}
          paddingBottom={"2%"}
          // fontFamily={("Caveat", "cursive")}
          color="#F89521"
        >
          About the Festival
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingTop={"2%"}
          paddingBottom={"2%"}
          color="#fff"
        >
          The Active Citizens' Festival is packed with diverse and engaging
          activities designed to entertain, educate, and unite attendees. From
          the intellectually stimulating Essay Competition to the dynamic and
          interactive Games Arena, each event caters to different interests and
          promotes community spirit. The Silent Disco and Karaoke sessions offer
          fun and creative outlets, while the Sip & Paint and Governance and
          History Booth provide enriching experiences. The Green Room emphasizes
          sustainability, and the Documentary Screening showcases Tracka's
          impactful journey.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          The Panel Session brings together thought leaders for meaningful
          discussions, culminating in the Awards & Recognition of Heroes, which
          honors the dedication and contributions of exceptional community
          members. Together, these events encapsulate the essence of Tracka's
          mission, celebrating past successes while inspiring continued
          commitment to social development and active citizenship.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
