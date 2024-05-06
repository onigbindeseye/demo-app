import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import library from "../../../assets/images/market.jpg";

const Business = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box
        width={{ xs: "100%", sm: "50%" }}
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
        padding={{ xs: "10% 4%", sm: "4% 8%" }}
        display={{ xs: "none", sm: "block" }}
      >
        <Typography
          fontWeight={500}
          variant="body2"
          color={"#fff"}
          padding={"4% 0%"}
        >
          PROGRAM
        </Typography>
        <Typography
          gutterBottom
          fontWeight={300}
          variant="h3"
          paddingBottom={"2%"}
          color="#F2C844"
        >
          Business and Entrepreneurship Support Programs
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          Entrepreneurship is a powerful engine for economic growth and social
          change. That's why the Oluseun Onigbinde Resource Centre is committed
          to supporting aspiring entrepreneurs and small business owners.
          Through our business grants and skills acquisition training programs,
          we provide the resources and guidance needed to turn innovative ideas
          into successful ventures, driving prosperity and opportunity for
          individuals and communities alike.
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
          <strong>Skills Acquisition Training: </strong> Offering training
          programs and workshops to equip individuals with practical skills in
          entrepreneurship, management, and business development.
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
          <strong>Business Grants: </strong>
          Providing financial support and resources to aspiring entrepreneurs to
          start or expand their businesses, fostering economic growth and job
          creation.
        </Typography>
      </Box>
      <Box
        width={{ xs: "100%", sm: "50%" }}
        padding={{ xs: "20% 4%", sm: "4% 8%" }}
        display={{ xs: "block", sm: "none" }}
      >
        <Typography
          fontWeight={500}
          variant="body2"
          color={"#fff"}
          padding={"4% 0%"}
        >
          PROGRAM
        </Typography>
        <Typography
          gutterBottom
          fontWeight={300}
          variant="h4"
          paddingBottom={"2%"}
          color="#F2C844"
        >
          Business and Entrepreneurship Support Programs
        </Typography>
        <Typography
          gutterBottom
          fontWeight={400}
          variant="body1"
          component="div"
          paddingBottom={"2%"}
          color="#fff"
        >
          Entrepreneurship is a powerful engine for economic growth and social
          change. That's why the Oluseun Onigbinde Resource Centre is committed
          to supporting aspiring entrepreneurs and small business owners.
          Through our business grants and skills acquisition training programs,
          we provide the resources and guidance needed to turn innovative ideas
          into successful ventures, driving prosperity and opportunity for
          individuals and communities alike.
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
          <strong>Skills Acquisition Training: </strong>
          Offering training programs and workshops to equip individuals with
          practical skills in entrepreneurship, management, and business
          development.
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
          <strong>Business Grants: </strong>
          Providing financial support and resources to aspiring entrepreneurs to
          start or expand their businesses, fostering economic growth and job
          creation.
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

export default Business;
