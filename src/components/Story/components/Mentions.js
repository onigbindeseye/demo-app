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
    <Box padding={{ xs: "20% 0%", sm: "4% 0%" }}>
      <Box>
        <Box width={{ xs: "100%", sm: "40%" }}>
          <Typography
            gutterBottom
            fontWeight={700}
            variant="h3"
            paddingTop={"2%"}
            paddingBottom={"2%"}
            color="#F89521"
            fontFamily={("Caveat", "cursive")}
          >
            Media Mentions
          </Typography>
        </Box>
        {/* <Typography
          variant={"body2"}
          fontWeight={500}
          color={"#fff"}
          padding={"1% 0%"}
          textAlign={"center"}
        >
          Images from 2022 Active Citizens Awards
        </Typography> */}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        alignItems={"center"}
        width={{ xs: "100%", sm: "100%" }}
      >
        <Box width={{ xs: "100%", sm: "50%" }}>
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
            onClick={() => setIsViewerOpen(index)}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"aca2022_img"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "4%", sm: "0.5%" }}
            width={{ xs: "100%", sm: "19%" }}
          />
        ))}

        <FsLightbox toggler={isViewerOpen} sources={photos} />
      </Box>
    </Box>
  );
};

export default Mentions;
