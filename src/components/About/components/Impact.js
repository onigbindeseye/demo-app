import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Impact = () => {
  return (
    <Grid container padding={"2%"} marginBottom={{ xs: "25%", sm: "2%" }}>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          color={"#fff"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={500} duration={1} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          No of Scholarships
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          color={"#fff"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={13500000}
                    duration={1}
                    useEasing={true}
                  />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          Total Charitable Support
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          color={"#fff"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={6} duration={1} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          Projects
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          color={"#fff"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={1000} duration={1} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          People Empowered
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Impact;
