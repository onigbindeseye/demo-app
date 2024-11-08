import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#fff" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#1B5E20",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div data-aos={"fade-down"}>
      <Typography
        variant={"h3"}
        fontWeight={300}
        textAlign={"left"}
        color={"#3CAB34"}
        paddingBottom={"1%"}
        paddingTop={{ xs: "25%", sm: "0%" }}
      >
        FAQs
      </Typography>
      <Typography
        variant={"body1"}
        fontWeight={400}
        textAlign={"left"}
        color={"#000"}
        paddingBottom={"2%"}
      >
        Some of our most frequently asked questions
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color={"#fff"}>
            1. How does the Trash for Cash program work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={"#000"}>
            The Trash for Cash program allows community members to collect
            recyclable plastics and other materials in exchange for cash
            incentives, encouraging responsible waste management.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color={"#fff"}>
            2. How can I get involved with Eco-Cyclers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={"#000"}>
            You can participate in our Trash for Cash program, join our
            community events and cleanups, volunteer, or partner with us to
            promote environmental sustainability.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography color={"#fff"}>
            3. What types of waste do you accept?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={"#000"}>
            We accept various types of recyclable waste, including PET bottles,
            plastic bags, cans, and nylon. For specific items, please refer to
            our guidelines or contact us directly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography color={"#fff"}>
            4. What are the benefits of recycling with Eco-Cyclers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={"#000"} fontWeight={700}>
            Recycling with us not only helps the environment but also allows
            individuals and communities to earn cash rewards, gain
            sustainability certifications, and reduce local waste.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography color={"#fff"}>
            5. Do you offer any workshops or educational programs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={"#000"} fontWeight={700}>
            Yes, Eco-Cyclers conducts regular workshops, school programs, and
            awareness campaigns focused on waste management, recycling, and
            sustainable practices.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
