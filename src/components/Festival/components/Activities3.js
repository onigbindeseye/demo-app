import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image1 from "../../../assets/images/cocktail.jpg";

const Activities3 = () => {
  return (
    <Box paddingTop={{ xs: "20%", sm: "10%" }}>
      <Box
        width={"100%"}
        marginBottom={"10%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Box
            component="img"
            height={{ xs: "80vh", sm: "850px" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              width: "100%",
            }}
            src={image1}
            alt={"festival-image"}
          />
        </Box>
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginTop={{ xs: "10%", sm: "0%" }}
          padding={{ xs: "0%", sm: "3%" }}
          data-aos={"fade-up"}
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
              09{" "}
            </Typography>
            Governance & History Booth
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Journey through time at the Governance and History Booth. Explore
            the rich history of Tracka and its impact on community development,
            and learn about the evolution of governance and citizen
            participation over the past decade.
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
              10{" "}
            </Typography>
            Documentary Screening
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Witness the journey of Tracka through compelling visuals at the
            Documentary Screening. This film captures the milestones,
            challenges, and triumphs of the community, offering a deep and
            inspiring look at its decade-long impact.
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
              11{" "}
            </Typography>
            Unlimited cocktails
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Enjoy a delightful array of beverages at the Unlimited Cocktails
            station. This offering allows guests to indulge in a variety of
            refreshing cocktails, adding a festive and enjoyable touch to the
            anniversary celebrations.
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
              12{" "}
            </Typography>
            Awards & Recognition of Heroes
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            fontWeight={400}
            paddingBottom={"2%"}
            lineHeight={1.75}
            textAlign={"left"}
          >
            Celebrate the outstanding contributions of individuals and groups at
            the Awards & Recognition of Heroes ceremony. This event honors those
            who have made significant impacts in their communities, exemplifying
            the spirit and mission of Tracka.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Activities3;
