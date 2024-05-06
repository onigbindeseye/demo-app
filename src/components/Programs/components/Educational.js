import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/library.jpg";

const Educational = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box width={{ xs: "100%", sm: "50%" }}>
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
          paddingTop={"2%"}
          paddingBottom={"2%"}
          color="#fff"
        >
          Educational Support Programs
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
          Education is the key to unlocking a world of opportunities. At the
          Oluseun Onigbinde Resource Centre, we believe in the transformative
          power of education. We believe that by investing in the education of
          tomorrow's leaders, we strive to create a brighter future for our
          communities and society as a whole.
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
          <strong>Library and Research Centre:</strong> Operating a dynamic
          library and research center equipped with a diverse collection of
          resources to support educational endeavors and intellectual growth.
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
          <strong>Annual Literacy Event for Secondary School Students: </strong>
          Organizing engaging events and activities to promote literacy and a
          love for learning among secondary school students.
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
          <strong>Scholarship for Undergraduate Students:</strong> Providing
          financial support to deserving undergraduate students to access
          quality education and pursue their academic aspirations.
        </Typography>
      </Box>
    </Box>
  );
};

export default Educational;
