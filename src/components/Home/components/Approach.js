import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Approach = () => {
  return (
    <Box margin={{ xs: "0% 0% 20% 0%", sm: "0% 0% 5% 0%" }}>
      <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
        <Box
          padding={{ xs: "8%", sm: "5%" }}
          width={{ xs: "100%", sm: "33%" }}
          height={"100%"}
          margin={{ xs: "0%", sm: "4% 0%" }}
          bgcolor={"#3CAB34"}
          color={"#fff"}
        >
          <Typography variant={"h5"} fontWeight={700}>
            Community-Centered Model
          </Typography>
          <Typography variant={"body1"} paddingTop={{ xs: "3%", sm: "6%" }}>
            We actively engages local communities through educational programs,
            and partnerships with businesses and schools, fostering a shared
            commitment to sustainable waste management.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "33%" }}
          height={"100%"}
          padding={{ xs: "8%", sm: "5%" }}
          margin={{ xs: " 0%", sm: "4% 0%" }}
          bgcolor={"#fff"}
        >
          <Typography variant={"h5"} fontWeight={700} color={"#3CAB34"}>
            Eco-Friendly Innovations
          </Typography>
          <Typography variant={"body1"} paddingTop={{ xs: "3%", sm: "6%" }}>
            By employing unique recycling techniques and innovative tools, Eco
            Cyclers maximizes the positive environmental impact of its waste
            management initiatives.
          </Typography>
        </Box>
        <Box
          padding={{ xs: "8%", sm: "5%" }}
          width={{ xs: "100%", sm: "33%" }}
          margin={{ xs: " 0%", sm: "4% 0%" }}
          bgcolor={"#fff"}
        >
          <Typography variant={"h5"} fontWeight={700} color={"#3CAB34"}>
            Behavioral Change Campaigns
          </Typography>
          <Typography variant={"body1"} paddingTop={{ xs: "3%", sm: "6%" }}>
            Through targeted campaigns, we promotes waste reduction, responsible
            consumption, and environmental responsibility, inspiring lasting
            shifts in public perception and behavior.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Approach;
