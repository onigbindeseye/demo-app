import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import BoltIcon from "@mui/icons-material/Bolt";
import ForestIcon from "@mui/icons-material/Forest";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";

const list = [
  {
    icon: (
      <LocalFireDepartmentIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    serial: "1",
    title: "Carbon Credit Certification",
    description:
      "We guide you through the certification process, enabling you to earn carbon credits that contribute to a greener future and demonstrate your commitment to sustainability.",
  },
  {
    icon: (
      <ForestIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    serial: "2",
    title: "Green Innovation Advisory & Investment",
    description:
      "At Forefront, we offer Green Innovation Advisory services that help you identify and implement innovative solutions to reduce your environmental footprint. ",
  },
  {
    icon: (
      <WaterDamageIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    serial: "3",
    title: "Climate Finance Sourcing & Evaluation",
    description:
      "Our experts evaluate and analyze financing options to help you make informed decisions, ensuring that your projects are well-funded and positioned for success in achieving environmental sustainability goals.",
  },
  {
    icon: (
      <BoltIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
    ),
    serial: "4",
    title: "Energy Transition Advisory",
    description:
      "We provide strategic advice, technical expertise, and tailored roadmaps to facilitate a smooth transition to renewable energy sources, reducing your carbon footprint and enhancing your energy efficiency.",
  },
];

const Services = () => {
  return (
    <Box padding={{ xs: "20% 0%", sm: "5% 0%" }}>
      <Typography
        variant="h3"
        color="#5BB318"
        fontWeight={800}
        paddingBottom={"1%"}
        textAlign={"left"}
      >
        Discover Our Services
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={{ xs: "100%", sm: "75%" }}
        flexWrap={"wrap"}
        marginLeft={{ xs: "0%", sm: "25%" }}
      >
        {list.map((lists, id) => (
          <Box
            key={id}
            width={{ xs: "100%", sm: "40%" }}
            marginTop={{ xs: "10%", sm: "4%" }}
            padding={{ xs: "2%", sm: "1%" }}
            data-aos={"fade-up"}
            marginLeft={{ xs: "0%", sm: "0%" }}
          >
            <Divider color={"#000"} paddingTop={"3%"} />
            <Box marginTop={"6%"} marginRight={36}>
              <Avatar
                sx={{
                  bgcolor: "#D4F6CC",
                  color: "#1a4d2e",
                  width: 56,
                  height: 56,
                }}
                variant="rounded"
              >
                {lists.icon}
              </Avatar>
            </Box>
            {/* <Typography
              variant={"body1"}
              fontWeight={500}
              textAlign={"left"}
              paddingTop={"5%"}
              color={"#000"}
            >
              {lists.serial}
            </Typography> */}
            <Typography
              variant={"h5"}
              fontWeight={700}
              textAlign={"left"}
              paddingTop={"8%"}
              color={"#205723"}
            >
              {lists.title}
            </Typography>
            <Typography
              variant={"body1"}
              fontWeight={500}
              textAlign={"left"}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              color={"#000"}
            >
              {lists.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
