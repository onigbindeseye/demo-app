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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
// import banner from "../../../assets/banner/banner1b.JPG";
import logo from "../../../assets/logos/fist.png";
import story from "../../../static/story";

export default function CustomizedTimeline() {
  return (
    <Box margin={{ xs: "25% 0%", sm: "5% 0% 0% 0%" }}>
      <Typography
        gutterBottom
        fontWeight={700}
        variant="h3"
        paddingTop={"2%"}
        paddingBottom={"2%"}
        color="#F89521"
      >
        Success Stories
      </Typography>
      <Box>
        <Box display={{ xs: "none", sm: "block" }}>
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
                  <TimelineConnector sx={{ bgcolor: "#F89521" }} />
                  <TimelineDot
                    sx={{ width: 44, height: 44, bgcolor: "#025066" }}
                  >
                    {stories.icon}
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F89521" }} />
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
                      width: "85%",
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
        <Box display={{ xs: "block", sm: "none" }}>
          {story.map((stories, index) => (
            <Box component={Card} key={index} margin={"10% 0%"}>
              <CardContent>
                <Box></Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Box marginLeft={"0%"}>
                    <Avatar sx={{ bgcolor: "#f89521", width: 96, height: 96 }}>
                      {stories.icon2}
                    </Avatar>
                  </Box>
                  <Box marginRight={"0%"}>
                    <Chip
                      label={stories.year}
                      sx={{
                        bgcolor: "#B84028",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  color="#025066"
                  fontWeight={700}
                  padding={"5% 0%"}
                >
                  {stories.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="#4f4f4f" variant="body1">
                  {stories.description}
                </Typography>
              </CardContent>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
