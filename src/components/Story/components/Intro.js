import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const Intro = () => {
  return (
    <Box>
      <Typography variant="body1" color="#4f4f4f" align="left">
        Tracka's 10th anniversary is a monumental milestone, celebrating a
        decade of empowering communities through active citizenship and vigilant
        monitoring of government projects. This event is a testament to the
        collective efforts of countless individuals dedicated to ensuring
        quality service delivery and fostering social development. Over the
        years, Tracka has evolved into a vibrant community, advocating for
        transparency and accountability in governance. The anniversary
        celebrations are not just a reflection of past achievements but also a
        beacon of inspiration for future endeavors, aiming to deepen the impact
        of citizen participation and community-driven initiatives.
      </Typography>
      <Typography
        variant="body1"
        color="#4f4f4f"
        align="left"
        paddingTop={"2%"}
      >
        From Sokoto to Ebonyi to Oyo to Cross River, our advocacy and citizen
        engagement activities over the past 10 years have impacted the lives of
        Nigerians through the provision of basic amenities and social services.
        They are all documented{" "}
        <Link
          href="https://impact.tracka.ng/category/impacts/"
          target="_blank"
          color={"#025066"}
          fontWeight={700}
        >
          HERE
        </Link>
      </Typography>
    </Box>
  );
};

export default Intro;
