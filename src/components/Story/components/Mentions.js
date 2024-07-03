import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/media/media_1.png";
import gallery2 from "../../../assets/media/media_2.png";
import gallery3 from "../../../assets/media/media_3.png";
import gallery4 from "../../../assets/media/media_4.png";
import gallery5 from "../../../assets/media/media_5.png";
import gallery6 from "../../../assets/media/media_6.png";
import gallery7 from "../../../assets/media/media_7.png";
import gallery8 from "../../../assets/media/media_8.png";
import gallery9 from "../../../assets/media/media_9.png";
import gallery10 from "../../../assets/media/media_10.png";
import gallery11 from "../../../assets/media/media_11.png";
import gallery12 from "../../../assets/media/media_12.png";

const Mentions = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    gallery7,
    gallery8,
    gallery10,
    gallery12,
    gallery6,
    gallery5,
    gallery9,
    gallery11,
    gallery3,
    gallery4,
    gallery2,
    gallery1,
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box padding={{ xs: "20% 0%", sm: "4% 0% 6% 0%" }}>
      <Typography
        gutterBottom
        fontWeight={700}
        variant="h3"
        paddingTop={"2%"}
        paddingBottom={"2%"}
        textAlign={"left"}
        color="#F89521"
        data-aos={"fade-down"}
      >
        Media Mentions
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        alignItems={"center"}
        width={{ xs: "100%", sm: "100%" }}
        marginBottom={{ xs: "0%", sm: "1%" }}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          display={{ xs: "none", sm: "block" }}
        >
          <Box
            component="img"
            height={{ xs: "25vh", sm: "300px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
              marginTop: "2%",
            }}
            src={gallery1}
            alt={"image"}
          />
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Typography
            variant="h5"
            color="#fff"
            align="left"
            padding={{ xs: "10% 1%", sm: "6%" }}
          >
            Tracka's 10th anniversary is a monumental milestone, celebrating a
            decade of empowering communities through active citizenship and
            vigilant monitoring of government projects.
          </Typography>
        </Box>
      </Box>
      <Box marginTop={{ xs: "5%", sm: "0%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "28vh", sm: "23vh" }}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsViewerOpen(!isViewerOpen);
            }}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"aca2022_img"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "4%", sm: "0.5%" }}
            width={{ xs: "100%", sm: "32%" }}
          />
        ))}

        <FsLightbox
          toggler={isViewerOpen}
          sources={photos}
          slide={currentImageIndex + 1}
        />
      </Box>
    </Box>
  );
};

export default Mentions;
