import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import sign from "../../../assets/images/sign.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "#000",
  border: "2px solid #9ACB34",
  boxShadow: 24,
  p: 2,
};

const About = () => {
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightbox = () => {
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  const ColorButton = styled(Button)(() => ({
    color: "#9ACB34",
    width: 200,
    height: 65,
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "capitalize",
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "2px solid #3CAB34",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#3CAB34",
      borderColor: "#3CAB34",
    },
  }));

  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          left: 0,
          height: "30%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${"#9ACB34"} 20%, transparent 30%)`,
          opacity: 0.1,
        },
      }}
    >
      <Box
        width={"100%"}
        margin={{ xs: "15% 0%", sm: "5% 0% 2% 0%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          padding={{ xs: "5% 1%", sm: "4% 6% 4% 0%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Typography
            variant={"h3"}
            fontWeight={300}
            textAlign={"left"}
            color={"#3CAB34"}
            paddingBottom={"2%"}
          >
            Welcome to Eco-Cyclers
          </Typography>
          <Typography
            variant={"h6"}
            fontWeight={400}
            textAlign={"left"}
            color={"#1B5E20"}
            paddingBottom={"1%"}
          >
            We encourage individuals to take responsibility for their waste,
            becoming proactive contributors to a sustainable and cleaner future.
          </Typography>
          <Typography
            variant={"body1"}
            textAlign={"left"}
            color={"#000"}
            data-aos={"fade-up"}
            paddingTop={"2%"}
          >
            Welcome to Eco Cyclers, where nothing is seen as waste but as a
            valuable resource. As a social enterprise focused on plastic waste
            recycling in Enugu State, we aim to address environmental issues,
            one plastic bottle at a time, by engaging citizens to transform
            attitudes towards environmental sustainability
          </Typography>
          <Box padding={"3% 1%"}>
            <ColorButton
              component={"a"}
              variant="contained"
              size="medium"
              href={"/about-us"}
            >
              Learn More
            </ColorButton>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", sm: "50%" }}
          padding={{ xs: "5% 1%", sm: "4%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <Box
            width={{ xs: "100%", sm: "100%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
            display={{ xs: "none", sm: "block" }}
            data-aos={"fade-up"}
            sx={{
              cursor: "pointer",
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              height={{ xs: "32vh", sm: "45vh" }}
              sx={{
                width: "100%",
                objectFit: "cover",
              }}
              src={sign}
              alt={"youtube_video"}
              onClick={() => openLightbox()}
            />
            <Box
              position={"absolute"}
              top={{ xs: "30%", sm: "35%" }}
              marginLeft={"40%"}
            >
              <Avatar
                sx={{
                  bgcolor: "#000",
                  padding: "5%",
                  border: "3px solid #fff",
                  width: 96,
                  height: 96,
                }}
                onClick={() => openLightbox()}
              >
                <PlayCircleIcon
                  sx={{
                    color: "#9ACB34",
                    "&:hover": {
                      color: "#fff",
                    },
                    width: 46,
                    height: 46,
                  }}
                />
              </Avatar>
            </Box>
          </Box>
          <Modal
            open={viewerIsOpen}
            onClose={closeLightbox}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <iframe
                  width="883"
                  height="450"
                  src={
                    "https://youtube.com/shorts/lTeI3q5Yy-g?si=rKzWlIq4c_UImMo_"
                  }
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Our Projects"
                />
              </div>
            </Box>
          </Modal>
        </Box>
        <Box display={{ xs: "block", sm: "none" }}>
          <div>
            <iframe
              width="583"
              height="400"
              src={"https://youtube.com/shorts/lTeI3q5Yy-g?si=rKzWlIq4c_UImMo_"}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Our Projects"
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
