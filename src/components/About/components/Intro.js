import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../../assets/people/ghandi_olaoye.jpg";

const Intro = () => {
  return (
    <Box paddingTop={{ xs: "15%", sm: "5%" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignCenter={"center"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          padding={{ xs: "5% 1%", sm: "0% 3% 0% 0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Box
            width={{ xs: "100%", sm: "100%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Typography
              variant="h3"
              color="#DC0000"
              fontWeight={700}
              paddingBottom={{ xs: "5%", sm: "2%" }}
              textAlign={"left"}
            >
              Message from the King
            </Typography>
          </Box>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
            paddingBottom={{ xs: "5%", sm: "2%" }}
          >
            I trust this message finds you in good health and prosperity. As the
            revered Soun of Ogbomoso, it is both my duty and privilege to extend
            my heartfelt gratitude and appreciation for your dedicated service
            and significant contributions to our beloved town of Ogbomoso, Oyo
            State and Nigeria at large.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
            paddingBottom={{ xs: "5%", sm: "2%" }}
          >
            Your unwavering commitment to the progress and development of our
            community has been a beacon of hope, inspiring countless lives and
            shaping the future of our town. Through your tireless efforts and
            initiatives, you have significantly impacted various sectors,
            including but not limited to politics, education, healthcare,
            community development, etc.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={500}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            lineHeight={"1.625em"}
            paddingBottom={{ xs: "5%", sm: "2%" }}
          >
            It is with great pride that I acknowledge your invaluable endeavors,
            which have strengthened the fabric of our society and enriched the
            lives of our people. Your dedication, passion, and selflessness are
            the pillars upon which Ogbomoso stands tall, and for that, we are
            eternally grateful.
          </Typography>
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "78vh" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={image}
            alt={"about_image"}
          />
          <Typography
            color={"#aaa"}
            variant="caption"
            fontWeight={400}
            textAlign={"center"}
          >
            HRM Oba Afolabi Ghandi Olaoye, Orumogege III
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
