import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/townhall/townhall_1.jpg";
import gallery2 from "../../../assets/townhall/townhall_2.jpg";
import gallery3 from "../../../assets/townhall/townhall_3.jpg";
import gallery4 from "../../../assets/townhall/townhall_4.jpg";
import gallery5 from "../../../assets/townhall/townhall_5.jpg";
import gallery6 from "../../../assets/townhall/townhall_6.jpg";
import gallery7 from "../../../assets/townhall/townhall_7.jpg";
import gallery9 from "../../../assets/townhall/townhall_8.jpg";
import gallery8 from "../../../assets/townhall/townhall_9.jpg";
import gallery10 from "../../../assets/townhall/townhall_10.jpg";
import gallery11 from "../../../assets/townhall/townhall_11.jpg";
import gallery12 from "../../../assets/townhall/townhall_12.jpg";

const Gallery = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery9,
    gallery8,
    gallery10,
    gallery11,
    gallery12,
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box padding={{ xs: "25% 0%", sm: "5% 0% 10% 0%" }}>
      <Box>
        <Typography
          variant={"h5"}
          fontWeight={400}
          color={"#fff"}
          padding={"1% 0%"}
          textAlign={"center"}
          data-aos={"fade-down"}
        >
          A decade of connecting people with the government
        </Typography>
      </Box>
      <Box marginTop={{ xs: "5%", sm: "2%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "27vh", sm: "23vh" }}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsViewerOpen(!isViewerOpen);
            }}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"tracka_townhall_img"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "2%", sm: "0.5%" }}
            width={{ xs: "100%", sm: "24%" }}
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

export default Gallery;
