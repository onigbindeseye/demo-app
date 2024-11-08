import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Impact = () => {
  return (
    <Grid
      container
      padding={"2% 2% 5% 0%"}
      margin={{ xs: "25% 0%", sm: "10% 0% 2% 0%" }}
    >
      <Grid items xs={12} sm={12}>
        <Typography
          variant="h5"
          fontWeight={700}
          padding={"3% 0% 3% 0%"}
          color={"#fff"}
          textAlign={"center"}
        >
          Our Impact At A Glance
        </Typography>
      </Grid>
      <Grid
        items
        xs={12}
        sm={3}
        textAlign={"center"}
        padding={{ xs: "20% 0% 10% 0%", sm: "0%" }}
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
                    end={42853}
                    duration={2}
                    useEasing={true}
                  />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          People Trained and Certified
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
                  <CountUp start={0} end={3247} duration={2} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          Starter Kits & Equipment Distributed
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
                  <CountUp start={0} end={34} duration={1} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          Capacity Building Programs
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
                  <CountUp start={0} end={17} duration={1} useEasing={true} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </Typography>
        <Typography variant={"h6"} color={"#fff"}>
          States Reached
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Impact;
