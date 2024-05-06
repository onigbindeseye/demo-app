import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gallery1 from "../../../assets/scholarship/scholar_1.jpg";
import gallery2 from "../../../assets/scholarship/scholar_2.jpg";
import gallery3 from "../../../assets/scholarship/scholar_3.jpg";
import gallery4 from "../../../assets/scholarship/scholar_4.jpg";
import gallery5 from "../../../assets/scholarship/scholar_5.jpg";
import gallery6 from "../../../assets/scholarship/scholar_6.jpg";
import gallery7 from "../../../assets/scholarship/scholar_7.jpg";

const Gallery = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Box marginTop={{ xs: "25%", sm: "2%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "25vh", sm: "25vh" }}
            onClick={() => setIsViewerOpen(!isViewerOpen)}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"loyola college"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
            width={{ xs: "100%", sm: "24%" }}
          />
        ))}

        <FsLightbox toggler={isViewerOpen} sources={photos} />
      </Box>
    </Box>
  );
};

export default Gallery;
