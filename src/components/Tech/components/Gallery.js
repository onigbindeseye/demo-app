import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gallery1 from "../../../assets/ennovate/ennovate_3.jpg";
import gallery2 from "../../../assets/ennovate/ennovate_4.jpg";
import gallery3 from "../../../assets/ennovate/ennovate_1.jpg";
import gallery4 from "../../../assets/ennovate/ennovate_2.jpg";
import gallery5 from "../../../assets/ennovate/ennovate_6.jpg";
import gallery6 from "../../../assets/ennovate/ennovate_7.jpg";
import gallery7 from "../../../assets/ennovate/ennovate_8.jpg";
import gallery8 from "../../../assets/ennovate/ennovate_5.jpg";
import gallery9 from "../../../assets/ennovate/ennovate_9.jpg";
import gallery10 from "../../../assets/ennovate/ennovate_10.jpg";
import gallery11 from "../../../assets/ennovate/ennovate_11.jpg";
import gallery12 from "../../../assets/ennovate/ennovate_12.jpg";

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
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Box marginTop={{ xs: "2%", sm: "2%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "25vh", sm: "26vh" }}
            onClick={() => setIsViewerOpen(!isViewerOpen)}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"oof_img"}
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
