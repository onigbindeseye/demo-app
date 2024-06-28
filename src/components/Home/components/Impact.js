import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Impact = () => {
  return (
    <Grid container padding={"2%"} margin={{ xs: "25% 0%", sm: "4% 0%" }}>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: " 10% ", sm: "2%" }}
      >
        <Typography
          variant={"h3"}
          color={"#F89521"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={19644}
                    duration={5}
                    useEasing={true}
                  />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#099795"}>
          No of Projects Tracked
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "2%" }}
      >
        <Typography
          variant={"h3"}
          color={"#F89521"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={11883}
                    duration={5}
                    useEasing={true}
                  />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#099795"}>
          No of Projects Completed
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "2%" }}
      >
        <Typography
          variant={"h3"}
          color={"#F89521"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={7589} duration={5} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#099795"}>
          No of Towns Visited
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "2%" }}
      >
        <Typography
          variant={"h3"}
          color={"#F89521"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={7612} duration={5} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#099795"}>
          No of Townhall Meetings
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Impact;
