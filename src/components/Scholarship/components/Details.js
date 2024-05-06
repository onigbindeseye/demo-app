import React from "react";
import Typography from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import scholar from "../../../assets/scholarship/scholar_5.jpg";

const Details = () => {
  return (
    <>
      <Grid container margin={{ xs: "8% 0%", sm: "2% 0%" }}>
        <Grid xs={12} sm={6} paddingRight={"3%"}>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            paragraph
            lineHeight={1.5}
          >
            In an inspiring act of philanthropy and dedication to the community,
            Oluseun Onigbinde, a successful entrepreneur and member of the CAC
            Agbala Itura, Ibadan, has been offering annual scholarships to
            deserving church members who are pursuing their undergraduate
            education. Since 2019, this noble initiative has provided hope and
            financial assistance to numerous young minds, empowering them to
            achieve their academic aspirations and realize their dreams.
            Onigbinde's commitment to giving back to his roots demonstrates the
            profound impact that individuals can make when they invest in the
            education and future of their community.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paddingBottom={"4%"}
            paragraph
            lineHeight={1.5}
          >
            Growing up in the close-knit community of CAC Agbala Itura, Oluseun
            Onigbinde experienced firsthand the importance of education and the
            challenges that students often face in pursuing higher learning.
            Having attained personal success in his career, Onigbinde made a
            firm resolve to provide opportunities for others in his community to
            also access quality education. By offering scholarships to
            undergraduate church members, he aims to alleviate the financial
            burdens associated with higher education and enable these students
            to concentrate on their studies without worrying about the cost of
            tuition and other expenses.
          </Typography>
          <Typography
            variant={"body1"}
            color={"#4f4f4f"}
            paragraph
            lineHeight={1.5}
          >
            The scholarship program is not merely a financial aid initiative; it
            also serves as a motivational tool for academic excellence. To be
            eligible for the scholarship, students must pass a qualification
            test, encouraging them to strive for excellence in their studies. By
            setting this criterion, Onigbinde not only rewards hard work and
            dedication but also fosters a competitive spirit among the students,
            inspiring them to reach their full potential. Moreover, the
            scholarships are awarded annually, ensuring a continuous cycle of
            support and encouragement for future generations of young scholars.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} display={{ xs: "none", sm: "block" }}>
          <Box
            component="img"
            height={{ xs: "95vh", sm: "680px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={scholar}
            alt={"image"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
