import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image1 from "../../../assets/images/karaoke.jpg";
import image2 from "../../../assets/images/panel.jpg";

const Activities2 = () => {
  return (
    <Box paddingTop={{ xs: "1%", sm: "10%" }}>
      <Box width={{ xs: "100%", sm: "24%" }}>
        <Box
          component="img"
          height={{ xs: "80vh", sm: "110vh" }}
          display={{ xs: "block", sm: "none" }}
          sx={{
            objectFit: "cover",
            position: "relative",
            overflow: "hidden",
            borderRadius: "5px",
            marginTop: "15%",
            width: "100%",
          }}
          src={image1}
          alt={"festival-image"}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignCenter={"center"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Box
          width={{ xs: "100%", sm: "40%" }}
          marginTop={{ xs: "10%", sm: "0%" }}
        >
          <Typography
            variant="h4"
            color="#F89521"
            fontWeight={700}
            paddingTop={"2%"}
            paddingBottom={"2%"}
            textAlign={"left"}
          >
            <Typography
              variant="h3"
              color="#025066"
              fontWeight={400}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
              component={"span"}
            >
              05{" "}
            </Typography>
            Karaoke
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Show off your vocal talents at the Karaoke station! Whether you're a
            seasoned performer or a first-timer, this is your chance to sing
            your heart out and entertain fellow community members in a fun and
            supportive environment.
          </Typography>
          <Typography
            variant="h4"
            color="#F89521"
            fontWeight={700}
            paddingTop={"2%"}
            paddingBottom={"2%"}
            textAlign={"left"}
          >
            <Typography
              variant="h3"
              color="#025066"
              fontWeight={400}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
              component={"span"}
            >
              06{" "}
            </Typography>
            Green Room
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Step into the Green Room for a refreshing experience. This
            eco-friendly space will showcase sustainable practices, green
            initiatives, and environmental education, promoting a culture of
            sustainability and eco-conscious living.
          </Typography>
          <Typography
            variant="h4"
            color="#F89521"
            fontWeight={700}
            paddingTop={"2%"}
            paddingBottom={"2%"}
            textAlign={"left"}
          >
            <Typography
              variant="h3"
              color="#025066"
              fontWeight={400}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
              component={"span"}
            >
              07{" "}
            </Typography>
            Panel Session
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Engage in thought-provoking discussions at the Panel Session.
            Featuring experts, community leaders, and activists, this forum will
            address pressing issues, share insights, and explore future
            directions for social development and citizen engagement.
          </Typography>
          <Typography
            variant="h4"
            color="#F89521"
            fontWeight={700}
            paddingTop={"2%"}
            paddingBottom={"2%"}
            textAlign={"left"}
          >
            <Typography
              variant="h3"
              color="#025066"
              fontWeight={400}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
              component={"span"}
            >
              08{" "}
            </Typography>
            Blood Drive
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Make a life-saving impact by participating in the Blood Drive. This
            noble initiative encourages attendees to donate blood, contributing
            to the health and well-being of those in need and fostering a spirit
            of giving within the community.
          </Typography>
        </Box>
        <Box width={{ xs: "100%", sm: "24.5%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "650px" }}
            display={{ xs: "none", sm: "block" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              borderRadius: "5px",
              width: "100%",
            }}
            src={image1}
            alt={"festival-image"}
          />
        </Box>
        <Box width={{ xs: "100%", sm: "24.5%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "650px" }}
            display={{ xs: "none", sm: "block" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              borderRadius: "5px",
              marginTop: "35%",
              width: "100%",
            }}
            src={image2}
            alt={"festival-image"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Activities2;
