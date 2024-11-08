import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import img_1 from "../../../assets/images/trash.jpg";
import img_2 from "../../../assets/images/sign.jpg";

const Infographics = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [img_1, img_2];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Box marginTop={{ xs: "25%", sm: "2%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "27vh", sm: "36vh" }}
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

export default Infographics;
