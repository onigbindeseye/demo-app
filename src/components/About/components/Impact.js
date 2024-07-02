import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Impact = () => {
  return (
    <Grid container padding={"2%"} margin={{ xs: "25% 0%", sm: "2% 0%" }}>
      <Grid
        items
        xs={12}
        sm={12}
        textAlign={"left"}
        paddingBottom={{ xs: " 10% ", sm: "5%" }}
      >
        <Typography
          gutterBottom
          fontWeight={700}
          variant="h3"
          paddingBottom={"2%"}
          color="#F89521"
          // fontFamily={("Caveat", "cursive")}
        >
          Impact in a Decade
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: " 10% ", sm: "5%" }}
      >
        <Typography
          variant={"h3"}
          color={"#099795"}
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
        <Typography variant={"h6"} color={"#025066"}>
          No of Projects Tracked
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "5%" }}
      >
        <Typography
          variant={"h3"}
          color={"#099795"}
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
        <Typography variant={"h6"} color={"#025066"}>
          No of Projects Completed
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "5%" }}
      >
        <Typography
          variant={"h3"}
          color={"#099795"}
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
        <Typography variant={"h6"} color={"#025066"}>
          No of Towns Visited
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "5%" }}
      >
        <Typography
          variant={"h3"}
          color={"#099795"}
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
        <Typography variant={"h6"} color={"#025066"}>
          No of Townhall Meetings
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={4}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          color={"#099795"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={26} duration={5} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#025066"}>
          No of State Officers
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={4}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          color={"#099795"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={1700} duration={5} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#025066"}>
          No of Community Champions
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={4}
        textAlign={"center"}
        paddingBottom={{ xs: "10%", sm: "0%" }}
      >
        <Typography
          variant={"h3"}
          color={"#099795"}
          fontWeight={700}
          paddingBottom={"2%"}
        >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 55 }}>
                {isVisible ? (
                  <CountUp start={0} end={200} duration={5} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#025066"}>
          No of Impact Stories
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Impact;
