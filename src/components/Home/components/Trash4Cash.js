import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TheCalculator from "../../Calculator/components/TheCalculator";

const ColorButton = styled(Button)(() => ({
  color: "#9ACB34",
  width: 200,
  height: 65,
  fontWeight: 600,
  fontSize: "18px",
  textTransform: "capitalize",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "2px solid #3CAB34",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#3CAB34",
    borderColor: "#3CAB34",
  },
}));

const Trash4Cash = () => {
  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          left: 0,
          height: "30%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${"#9ACB34"} 20%, transparent 30%)`,
          opacity: 0.1,
        },
      }}
    >
      <Box
        width={"100%"}
        margin={{ xs: "15% 0%", sm: "2% 0% 2% 0%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          padding={{ xs: "5% 1%", sm: "4%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <TheCalculator />
        </Box>
        <Box
          width={{ xs: "100%", sm: "50%" }}
          padding={{ xs: "5% 1%", sm: "4% 6% 4% 0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Typography
            variant={"h3"}
            fontWeight={300}
            textAlign={"left"}
            color={"#3CAB34"}
            paddingBottom={"2%"}
          >
            Welcome to Eco-Cyclers
          </Typography>
          <Typography
            variant={"h6"}
            fontWeight={400}
            textAlign={"left"}
            color={"#1B5E20"}
            paddingBottom={"1%"}
          >
            We encourage individuals to take responsibility for their waste,
            becoming proactive contributors to a sustainable and cleaner future.
          </Typography>
          <Typography
            variant={"body1"}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            paddingTop={"2%"}
          >
            Welcome to Eco Cyclers, where nothing is seen as waste but as a
            valuable resource. As a social enterprise focused on plastic waste
            recycling in Enugu State, we aim to address environmental issues,
            one plastic bottle at a time, by engaging citizens to transform
            attitudes towards environmental sustainability
          </Typography>
          <Box padding={"3% 1%"}>
            <ColorButton
              component={"a"}
              variant="contained"
              size="medium"
              href={"/about-us"}
            >
              Learn More
            </ColorButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Trash4Cash;
