import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import Box from "@mui/material/Box";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
// import banner from "../../../assets/banner/banner1b.JPG";
import logo from "../../../assets/logos/logo.png";
import story from "../../../static/story";

export default function CustomizedTimeline() {
  return (
    <Box marginTop={{ xs: "20%", sm: "5%" }}>
      <Typography
        gutterBottom
        fontWeight={700}
        variant="h3"
        paddingTop={"2%"}
        paddingBottom={"2%"}
        color="#F89521"
        fontFamily={("Caveat", "cursive")}
      >
        Success Stories
      </Typography>
      <Timeline position="alternate">
        {story.map((stories, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body1"
              color="#025066"
              fontWeight={700}
            >
              {stories.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#389493" }} />
              <TimelineDot sx={{ width: 44, height: 44, bgcolor: "#025066" }}>
                {stories.icon}
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#389493" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                fontWeight={700}
                gutterBottom
              >
                {stories.title}
              </Typography>
              <Typography variant="body1">{stories.description}</Typography>
              {/* <Box
              component="img"
              height={{ xs: "95vh", sm: "310px" }}
              sx={{
                objectFit: "cover",
                width: "100%",
                marginTop: "2%",
              }}
              src={stories.images}
              alt={"image"}
            /> */}
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ width: 106, height: 106, bgcolor: "#fff" }}>
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "50%",
                }}
                src={logo}
                alt={"image"}
              />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
