import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Divider, Link } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import tech from "../../../assets/images/tech.jpg";
import medical from "../../../assets/images/medical2.jpg";
import iread from "../../../assets/images/iread.jpg";
import iread2 from "../../../assets/images/iread2.jpeg";
import center from "../../../assets/images/center.jpg";
import loyola from "../../../assets/images/loyola2.jpg";
import scholarship from "../../../assets/images/scholarship.jpg";

const eventsPerPage = 4;

const events = [
  {
    title: "Ogbomosho Medical Outreach",
    description:
      "The one day free medical outreach program organized by Oluseun Onigbinde Resource center in collaboration with Pouring Water Foundation was held on March 15, 2024 at the compound of Masifa DC Primary School, Ogbomosho.",
    pics: medical,
    links: "/ogbomosho-free-medical-outreach",
    date: "March 15, 2024",
    location: "Ogbomosho",
  },
  {
    title: "Oluseun Onigbinde Literacy Awards",
    description:
      "The Literacy Awards 2.0 was held on June 24, 2023 at the the Liberty Event Centre, Ogbomosho. The theme for this event was Transforming Civic Education and Literacy in Rural Communities.",
    pics: iread2,
    links: "/oluseun-onigbinde-literacy-awards-2023",
    date: "June 24, 2023",
    location: "Ogbomosho",
  },
  {
    title: "Oluseun Onigbinde Fellowship",
    description:
      "Oluseun Onigbinde Fellowship is a 12-week program organized in collaboration with Ennovate Lab to train shortlisted students and residents of Ogbomoso who want to transition to a Tech Career.",
    pics: tech,
    links: "/oluseun-onigbinde-tech-fellowship",
    date: "May 15, 2023",
    location: "Ogbomosho",
  },
  {
    title: "Oluseun Onigbinde Literacy Awards",
    description:
      "The Oluseun Onigbinde Literacy Awards 1.0 was held on March 12, 2022 at the the Liberty Event Centre, Ogbomosho. The theme for this event was Enhancing Literacy Through Civic Education.",
    pics: iread,
    links: "/oluseun-onigbinde-literacy-awards-2022",
    date: "March 12, 2022",
    location: "Ogbomosho",
  },
  {
    title: "Oluseun Onigbinde Scholarship",
    description:
      "Since 2019, Oluseun Onigbinde who is also a memeber of CAC Agbala Itura, Ibadan, has been offering annual scholarships to deserving church members who are pursuing their undergraduate education.",
    pics: scholarship,
    links: "/oluseun-onigbinde-annual-scholarship",
    date: "Annually",
    location: "Ibadan",
  },
  {
    title: "Loyola College Technology Lab",
    description:
      "The Technology Lab was equipped with 50 computers, 1 projector and it was commissioned on June 8, 2018. The Lab was dedicated to the memory of Oluseun Onigbinde late father, Mr Olatunbosun Onigbinde.",
    pics: loyola,
    links: "/loyola-college-technology-lab",
    date: "June 8, 2018",
    location: "Ibadan",
  },
];

const latest = [
  {
    img: center,
    title: "Official Opening of the Oluseun Onigbinde Resource Center",
    subtitle: "library, research and skill acquisition...",
    date: "May 11, 2024",
    links: "/official-launching-of-oluseun-onigbinde-resource-centre",
  },
  {
    img: iread,
    title: "Oluseun Onigbinde Literacy Awards",
    subtitle: "The Literacy Awards 3.0 will be held on June 24, 2024...",
    date: "June 24, 2024",
    links: "/oluseun-onigbinde-literacy-awards-2023",
  },
];

const ColorButton = styled(Button)(() => ({
  color: "#F2C844",
  width: 125,
  height: 40,
  fontWeight: 400,
  fontSize: "14px",
  textTransform: "capitalize",
  backgroundColor: "#071783",
  borderColor: "#071783",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#071783",
    borderColor: "#071783",
  },
}));

const Details = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box>
      <Box display={"flex"} flexWrap={"wrap"}>
        <Box width={{ xs: "100%", sm: "75%" }}>
          {currentEvents.map((details, index) => {
            const { pics, title, description, links, date, location } = details;
            return (
              <Box marginBottom={{ xs: "20%", sm: "2%" }}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                  key={index}
                >
                  <Box width={{ xs: "100%", sm: "25%" }}>
                    <Box
                      component="img"
                      height={{ xs: "35vh", sm: "200px" }}
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                      src={pics}
                      alt={"image"}
                    />
                  </Box>
                  <Box
                    width={{ xs: "100%", sm: "70%" }}
                    padding={{ xs: "6% 0%", sm: "3%" }}
                  >
                    <Typography
                      gutterBottom
                      fontWeight={400}
                      variant="h4"
                      paddingTop={"1%"}
                      paddingBottom={"1%"}
                      color="#071783"
                    >
                      {title}
                    </Typography>
                    <Typography
                      gutterBottom
                      fontWeight={400}
                      variant="body1"
                      component="div"
                      paddingBottom={"1%"}
                      paddingRight={{ xs: "0%", sm: "10%" }}
                    >
                      {description}
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      flexWrap={"wrap"}
                    >
                      <Box width={{ xs: "100%", sm: "70%" }}>
                        <Divider
                          color={"#04053C"}
                          sx={{ width: "100%", height: 1, marginBottom: "2%" }}
                        />
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          flexWrap={"wrap"}
                          paddingBottom={{ xs: "5%", sm: "1%" }}
                          width={{ xs: "100%", sm: "100%" }}
                          marginLeft={{ xs: "0%", sm: "0%" }}
                        >
                          <Box
                            width={{ xs: "100%", sm: "36%" }}
                            alignItems={"center"}
                            marginLeft={{ xs: "0%", sm: "0%" }}
                            display={{ xs: "none", sm: "flex" }}
                          >
                            <CalendarMonthIcon
                              sx={{
                                color: "#071783",
                                width: 23,
                                height: 23,
                              }}
                            />{" "}
                            <Typography
                              variant="body1"
                              color={"#071783"}
                              textAlign={"left"}
                            >
                              {date}
                            </Typography>
                          </Box>
                          <Box
                            width={{ xs: "100%", sm: "36%" }}
                            alignItems={"center"}
                            marginLeft={{ xs: "0%", sm: "0%" }}
                            display={{ xs: "block", sm: "none" }}
                          >
                            <Typography
                              variant="body1"
                              color={"#071783"}
                              textAlign={"left"}
                            >
                              {date}
                            </Typography>
                          </Box>
                          <Box
                            width={{ xs: "60%", sm: "50%" }}
                            marginLeft={{ xs: "0%", sm: "10%" }}
                          >
                            <Typography
                              variant="body1"
                              color={"#071783"}
                              textAlign={"left"}
                            >
                              {" "}
                              <strong>Location:</strong> {location}
                            </Typography>
                          </Box>
                          <Box
                            width={{ xs: "40%", sm: "30%" }}
                            flexWrap={"flex"}
                            display={{ xs: "block", sm: "none" }}
                          >
                            <ColorButton
                              component={"a"}
                              variant="contained"
                              size="medium"
                              href={links}
                            >
                              Read More
                            </ColorButton>
                          </Box>
                        </Box>

                        <Divider
                          color={"#04053C"}
                          sx={{ width: "100%", height: 1 }}
                        />
                      </Box>
                      <Box
                        width={{ xs: "100%", sm: "30%" }}
                        flexWrap={"flex"}
                        display={{ xs: "none", sm: "block" }}
                      >
                        <ColorButton
                          component={"a"}
                          variant="contained"
                          size="medium"
                          href={links}
                        >
                          Read More
                        </ColorButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Divider color={"#04053C"} sx={{ width: "89%", height: 1 }} />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          display={{ xs: "block", sm: "none" }}
          paddingBottom={{ xs: "10%", sm: "0%" }}
        >
          {events.length > eventsPerPage && (
            <Box display="flex" justifyContent="center" marginTop={2}>
              {Array.from(
                { length: Math.ceil(events.length / eventsPerPage) },
                (_, i) => (
                  <Button
                    key={i}
                    variant="outlined"
                    onClick={() => paginate(i + 1)}
                    sx={{ marginRight: 1 }}
                  >
                    {i + 1}
                  </Button>
                )
              )}
            </Box>
          )}
        </Box>
        <Box
          width={{ xs: "100%", sm: "25%" }}
          marginTop={{ xs: "5%", sm: "4%" }}
        >
          <Typography variant="h5" fontWeight={400} color={"#3E4095"}>
            Upcoming Events
          </Typography>
          {latest.map((post, index) => (
            <Box
              marginTop={{ xs: "5%", sm: "10%" }}
              display={"flex"}
              key={index}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              flexWrap={{ xs: "wrap", sm: "none" }}
              marginBottom={"5%"}
            >
              <Box
                marginLeft={{ xs: "0%", sm: "0%" }}
                width={{ xs: "100%", sm: "40%" }}
              >
                <Link href={post.links}>
                  <Box
                    component="img"
                    height={{ xs: "25vh", sm: "15vh" }}
                    width={{ xs: "100%", sm: "100%" }}
                    src={post.img}
                    alt={"Fishery"}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </Box>
              <Box
                width={{ xs: "100%", sm: "50%" }}
                marginLeft={{ xs: "0%", sm: "0%" }}
              >
                <Link
                  variant="body2"
                  color={"#3E4095"}
                  fontWeight={500}
                  paddingBottom={{ xs: "10%", sm: "5%" }}
                  textAlign={"center"}
                  href={post.links}
                  underline="hover"
                >
                  {post.title}
                </Link>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color={"#4f4f4f"}
                  paddingTop={"2%"}
                >
                  {post.subtitle}
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={500}
                  fontFamily={"PolySansMedian"}
                  color={"#050c4C"}
                  paddingTop={"2%"}
                >
                  {post.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box display={{ xs: "none", sm: "block" }}>
        {events.length > eventsPerPage && (
          <Box display="flex" justifyContent="center" marginTop={2}>
            {Array.from(
              { length: Math.ceil(events.length / eventsPerPage) },
              (_, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  onClick={() => paginate(i + 1)}
                  sx={{ marginRight: 1 }}
                >
                  {i + 1}
                </Button>
              )
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Details;
