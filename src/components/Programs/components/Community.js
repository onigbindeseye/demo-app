import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/medical.jpg";

const Community = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box
        width={{ xs: "100%", sm: "50%" }}
        marginTop={"10%"}
        display={{ xs: "block", sm: "none" }}
      >
        <Box
          component="img"
          height={{ xs: "95vh", sm: "810px" }}
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
          src={library}
          alt={"image"}
        />
      </Box>
      <Box
        width={{ xs: "100%", sm: "50%" }}
        padding={{ xs: "20% 4%", sm: "4% 8%" }}
      >
        <Typography
          fontWeight={500}
          variant="body2"
          color={"#F2C844"}
          padding={"4% 0%"}
        >
          PROGRAM
        </Typography>
        <Typography
          gutterBottom
          fontWeight={300}
          variant="h3"
          paddingBottom={"2%"}
          color="#fff"
        >
          Community-Based Support Programs
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          Our commitment to community extends beyond our walls. We are dedicated
          to supporting and uplifting communities through various programs and
          initiatives. From sponsoring faith-based programs during important
          religious holidays to organizing medical outreach campaigns and
          supporting community development projects, we strive to make a
          meaningful difference in the lives of the people.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          <Typography
            component={"span"}
            color={"#fff"}
            fontWeight={700}
            variant="h6"
          >
            &#8226;{" "}
          </Typography>
          <strong>Medical Outreach: </strong>
          Conducting outreach programs to provide essential healthcare services
          and promote wellness within underserved communities.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          {" "}
          <Typography
            component={"span"}
            color={"#fff"}
            fontWeight={700}
            variant="h6"
          >
            &#8226;{" "}
          </Typography>
          <strong>Community Development Projects: </strong>
          Initiating and supporting projects that address the specific needs and
          challenges faced by communities, ranging from infrastructure
          development to capacity building initiatives.
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          {" "}
          <Typography
            component={"span"}
            color={"#fff"}
            fontWeight={700}
            variant="h6"
          >
            &#8226;{" "}
          </Typography>
          <strong>Faith-Based Programs: </strong> Sponsoring programs and
          initiatives to support communities during religious periods such as
          Ramadan and Christmas, fostering unity and mutual support.
        </Typography>
      </Box>
      <Box
        width={{ xs: "100%", sm: "50%" }}
        display={{ xs: "none", sm: "block" }}
      >
        <Box
          component="img"
          height={{ xs: "95vh", sm: "810px" }}
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
          src={library}
          alt={"image"}
        />
      </Box>
    </Box>
  );
};

export default Community;
