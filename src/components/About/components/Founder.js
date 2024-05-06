import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import oluseun from "../../../assets/images/oluseun_2.jpeg";

const Founder = () => {
  return (
    <Box margin={{ xs: "25% 0%", sm: "10% 0%" }}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          paddingRight={{ xs: "0%", sm: "4%" }}
        >
          <Typography
            gutterBottom
            fontWeight={300}
            variant="h3"
            paddingBottom={{ xs: "5%", sm: "2%" }}
            color="#071783"
          >
            About Oluseun Onigbinde
          </Typography>
          <Box
            width={{ xs: "100%", sm: "50%" }}
            display={{ xs: "block", sm: "none" }}
            marginBottom={"10%"}
          >
            {" "}
            <Box
              component="img"
              height={{ xs: "95vh", sm: "650px" }}
              sx={{
                objectFit: "cover",
                width: "100%",
              }}
              src={oluseun}
              alt={"image"}
            />
          </Box>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#4f4f4f"}
            lineHeight={"1.625em"}
            paddingBottom={{ xs: "4%", sm: "2%" }}
            gutterBottom
          >
            Oluseun Onigbinde is currently the Global Director of BudgIT
            Foundation. He is a native of Masifa, Ogbomoso, Oyo State. He was
            born in Osogbo, presently Osun State, Nigeria. He had his primary
            and secondary school education in Ibadan. He attended the
            prestigious Loyola College, Ibadan where he excelled in the
            sciences. He scored nine distinctions in his West African
            Examinations Council's exam, earning the best result of the school's
            2001 set. Oluseun attended the University of Agriculture, Abeokuta
            where he obtained a bachelor of engineering (B.Eng.) in
            Electrical/Electronics Engineering.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#4f4f4f"}
            paddingBottom={{ xs: "4%", sm: "2%" }}
            lineHeight={"1.625em"}
            gutterBottom
          >
            He also attended the Stanford University Graduate School of Business
            where he completed the executive program in Social Entrepreneurship.
            He is a member of Covenant Nation and Christ Apostolic Church,
            Agbala Itura, Ibadan. He is a member of Ikeja Dynamic Lions Club. He
            recently published his first book titled "The Existential Questions"
            which was forwarded by Dr Obiageli Ezekwesili.
          </Typography>
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#4f4f4f"}
            paddingBottom={{ xs: "4%", sm: "2%" }}
            lineHeight={"1.625em"}
          >
            Oluseun is happily married to his wife, Oluwaseun and blessed with
            daughters - Wuraola, Ireoluwa and Elizabeth.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "50%" }}
          display={{ xs: "none", sm: "block" }}
        >
          {" "}
          <Box
            component="img"
            height={{ xs: "95vh", sm: "650px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={oluseun}
            alt={"image"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Founder;
