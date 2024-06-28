import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Intro = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "60%" }}
          paddingRight={{ xs: "0%", sm: "4%" }}
        >
          <Typography
            variant="body1"
            color="#4f4f4f"
            paddingBottom={"2%"}
            align="left"
          >
            Tracka is a community of active citizens who monitor the
            implementation of government projects to ensure quality service
            delivery, participate in governance, and advocate for social
            development in their communities.
          </Typography>
          <Typography
            variant="body1"
            color="#4f4f4f"
            paddingBottom={"2%"}
            align="left"
          >
            Tracka was established by BudgIT in 2014 as the service delivery arm
            of the organization. The movement was borne during the
            #Followthefloodmoney campaign, an aftermath of heavy flooding in
            2012, majorly affecting the country's North-Central, South-East and
            South-South regions. This was a national crisis as over 500 people
            were reported dead, thousands were injured, and 1.4 million people
            were displaced. This incident attracted grants from international
            organizations to the government to support the recovery and relief
            of the people impacted.
          </Typography>
          <Typography
            variant="body1"
            color="#4f4f4f"
            paddingBottom={"2%"}
            align="left"
          >
            Ironically, the affected communities denied receiving any relief
            material from the government, which led to the need for an
            independent body to intervene, track, and ensure the distribution of
            donated funds and items to the affected citizens, for which Tracka
            filled the shoes.
          </Typography>
          <Typography
            variant="body1"
            color="#4f4f4f"
            paddingBottom={"2%"}
            align="left"
          >
            Tracka’s mission is to raise a generation of citizens who are
            actively involved in governance and are imbibed with the culture of
            demanding transparency and accountability from the government.
          </Typography>
          <Typography
            variant="body1"
            color="#4f4f4f"
            paddingBottom={"2%"}
            align="left"
          >
            From 2014 to the present, one community, one project at a time,
            Tracka’s influence is spreading through our focus communities. We
            have facilitated the completion of <strong>11,883 projects</strong>{" "}
            across education, health, water, electricity, and roads in{" "}
            <strong>3,500+ communities</strong>, currently serving over 10
            million Nigerians.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", sm: "40%" }}
          marginTop={{ xs: "25%", sm: "0%" }}
        >
          <Typography
            variant="h3"
            color="#fff"
            padding={{ xs: "4%", sm: "8%" }}
            align="center"
            bgcolor={"#025066"}
            fontWeight={700}
            fontStyle={"italic"}
            fontFamily={("Caveat", "cursive")}
          >
            "Tracka is currently present in 36 states and the FCT, with State
            Officers in 26 states of the federation."
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
