import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import img_1 from "../../../assets/images/img_5.jpg";
import img_2 from "../../../assets/images/img_2.jpeg";
import img_3 from "../../../assets/images/img_3.jpeg";
import img_4 from "../../../assets/images/img_4.jpg";
import img_5 from "../../../assets/images/img_1.jpeg";
import img_6 from "../../../assets/images/img_6.jpg";
import img_7 from "../../../assets/images/img_7.jpg";

const Gallery = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [img_1, img_3, img_4, img_6, img_7, img_2, img_5];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Box marginTop={{ xs: "25%", sm: "2%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "27vh", sm: "24vh" }}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsViewerOpen(!isViewerOpen);
            }}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"infographics"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
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
