import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gallery1 from "../../../assets/iread/iRead_23_1.jpeg";
import gallery2 from "../../../assets/iread/2023/iread8.jpeg";
import gallery3 from "../../../assets/iread/2023/iread1.jpeg";
import gallery4 from "../../../assets/iread/2023/iread2.jpeg";
import gallery5 from "../../../assets/iread/2023/iread3.jpeg";
import gallery6 from "../../../assets/iread/2023/iread4.jpeg";
import gallery7 from "../../../assets/iread/2023/iread5.jpeg";
import gallery8 from "../../../assets/iread/2023/iread6.jpeg";
import gallery9 from "../../../assets/iread/2023/iread7.jpeg";
import gallery10 from "../../../assets/iread/2023/iread9.jpeg";
import gallery11 from "../../../assets/iread/2023/iread10.jpeg";
import gallery12 from "../../../assets/iread/2023/iread11.jpeg";

const Gallery = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    gallery1,
    gallery10,
    gallery11,
    gallery12,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Box marginTop={{ xs: "25%", sm: "2%" }}>
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
