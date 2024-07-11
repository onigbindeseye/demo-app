import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import image1 from "../../../assets/images/paint.jpg";
import image2 from "../../../assets/images/card.jpg";
import { Link } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #F89521",
  boxShadow: 24,
  p: 4,
};

const Activities = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box paddingTop={{ xs: "25%", sm: "10%" }}>
      <Typography
        variant="h3"
        color="#B84028"
        fontWeight={700}
        paddingBottom={{ xs: "0%", sm: "4%" }}
        textAlign={"left"}
        // fontFamily={("Caveat", "cursive")}
      >
        Festival Activities
      </Typography>
      <Box
        width={"100%"}
        marginBottom={"10%"}
        marginTop={{ xs: "0%", sm: "0%" }}
      >
        <Box
          width={{ xs: "100%", sm: "55%" }}
          position="relative"
          marginLeft={{ xs: "0%", sm: "0%" }}
          display={{ xs: "none", sm: "block" }}
        >
          <Box
            component="img"
            height={{ xs: "400px", sm: "680px" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              width: "100%",
            }}
            src={image1}
            alt={"festival-image"}
          />
          <Box
            width={{ xs: "100%", sm: "70%" }}
            top={{ xs: "10%", sm: "60%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
            position={"absolute"}
            transform="translate(-50%, -50%)"
          >
            <Box
              component="img"
              height={{ xs: "30vh", sm: "350px" }}
              display={{ xs: "none", sm: "block" }}
              data-aos={"fade-up"}
              sx={{
                objectFit: "cover",
                overflow: "hidden",
                width: "100%",
              }}
              src={image2}
              alt={"festival-image"}
            />
          </Box>
          <Box display={{ xs: "block", sm: "none" }}>
            <Box
              component="img"
              height={{ xs: "400px", sm: "680px" }}
              sx={{
                objectFit: "cover",
                position: "relative",
                width: "100%",
              }}
              src={image1}
              alt={"festival-image"}
            />
          </Box>
          <Box
            width={{ xs: "100%", sm: "95%" }}
            bgcolor={"#fff"}
            padding={{ xs: "0%", sm: "4% 8% 4% 4%" }}
            top={{ xs: "50%", sm: "5%" }}
            left={{ xs: "0%", sm: "90%" }}
            position={"absolute"}
          >
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingTop={"2%"}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                01{" "}
              </Typography>
              Essay Competition
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Celebrate the power of words and ideas by participating in
              Tracka's Essay Competition. This contest invites citizens to
              articulate their visions for a better future, reflecting on past
              achievements and proposing innovative solutions for community
              development.{" "}
              <Link
                onClick={handleOpen}
                cursor={"pointer"}
                fontWeight={700}
                color={"#B84028"}
              >
                View Details
              </Link>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    fontWeight={700}
                    color="#099795"
                  >
                    Essay Competition Application
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    To apply for the Essay competition, you must be a current
                    secondary school student in Nigeria. Write a 500-word essay
                    on<strong> ‘The Nigerian Utopia’</strong> and send
                    submissions via email <strong> festival@budgit.org </strong>{" "}
                    - with the email title as Essay Submission for Tracka@10.
                    The essay must be submitted in a PDF format, and the
                    following details must be in the email body:
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    &#8226; First and Last Name
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    &#8226; School’s Name and Address
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    &#8226; School’s contact details (Email and phone number)
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    The email submission must include a letter of approval from
                    the school authorities. The finalists will be announced in{" "}
                    <strong> August 2024</strong>.
                  </Typography>
                </Box>
              </Modal>
            </Typography>
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingTop={"2%"}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                02{" "}
              </Typography>
              Game Arena
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Unleash your competitive spirit and join the fun at the Games
              Arena! Engage in a variety of interactive and exciting games
              designed to foster teamwork, strategic thinking, and community
              bonding.
            </Typography>
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingTop={"2%"}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                03{" "}
              </Typography>
              Sip & Paint
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Unleash your inner artist at the Sip & Paint session. This
              relaxing and creative activity combines art and refreshments,
              allowing participants to enjoy a leisurely painting experience
              while sipping their favorite beverages.
            </Typography>
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                04{" "}
              </Typography>
              Silent Disco
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Dance to your own beat at our Silent Disco! Equipped with wireless
              headphones, attendees can choose their preferred music channels
              and dance the night away, enjoying a unique and immersive audio
              experience.
            </Typography>
          </Box>
        </Box>
        <Box display={{ xs: "block", sm: "none" }}>
          <Box
            width={{ xs: "100%", sm: "100%" }}
            marginTop={{ xs: "10%", sm: "0%" }}
            bgcolor={"#fff"}
            padding={{ xs: "0%", sm: "4%" }}
          >
            <Box
              component="img"
              height={{ xs: "80vh", sm: "680px" }}
              sx={{
                objectFit: "cover",
                position: "relative",
                width: "100%",
              }}
              src={image1}
              alt={"festival-image"}
            />
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingTop={{ xs: "10%", sm: "0%" }}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingTop={"2%"}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                01{" "}
              </Typography>
              Essay Competition
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Celebrate the power of words and ideas by participating in
              Tracka's Essay Competition. This contest invites citizens to
              articulate their visions for a better future, reflecting on past
              achievements and proposing innovative solutions for community
              development.{" "}
              <Link
                onClick={handleOpen}
                cursor={"pointer"}
                fontWeight={700}
                color={"#B84028"}
              >
                View Details
              </Link>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    fontWeight={700}
                    color="#099795"
                  >
                    Essay Competition Application
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    To apply for the Essay competition, you must be a current
                    secondary school student in Nigeria. Write a 500-word essay
                    on<strong> ‘The Nigerian Utopia’</strong> and send
                    submissions via email <strong> festival@budgit.org </strong>{" "}
                    - with the email title as Essay Submission for Tracka@10.
                    The essay must be submitted in a PDF format, and the
                    following details must be in the email body:
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    &#8226; First and Last Name
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    &#8226; School’s Name and Address
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    &#8226; School’s contact details (Email and phone number)
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    The email submission must include a letter of approval from
                    the school authorities. The finalists will be announced in{" "}
                    <strong> August 2024</strong>.
                  </Typography>
                </Box>
              </Modal>
            </Typography>
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingTop={"2%"}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                02{" "}
              </Typography>
              Game Arena
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Unleash your competitive spirit and join the fun at the Games
              Arena! Engage in a variety of interactive and exciting games
              designed to foster teamwork, strategic thinking, and community
              bonding.
            </Typography>
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingTop={"2%"}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingTop={"2%"}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                03{" "}
              </Typography>
              Sip & Paint
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Unleash your inner artist at the Sip & Paint session. This
              relaxing and creative activity combines art and refreshments,
              allowing participants to enjoy a leisurely painting experience
              while sipping their favorite beverages.
            </Typography>
            <Typography
              variant="h4"
              color="#F89521"
              fontWeight={700}
              paddingBottom={"2%"}
              textAlign={"left"}
            >
              <Typography
                variant="h3"
                color="#025066"
                fontWeight={400}
                paddingBottom={"2%"}
                textAlign={"left"}
                component={"span"}
              >
                04{" "}
              </Typography>
              Silent Disco
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              fontWeight={400}
              paddingBottom={"2%"}
              lineHeight={1.75}
              textAlign={"left"}
            >
              Dance to your own beat at our Silent Disco! Equipped with wireless
              headphones, attendees can choose their preferred music channels
              and dance the night away, enjoying a unique and immersive audio
              experience.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Activities;
