import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gallery1 from "../../../assets/iread/iRead_2022.jpg";
import gallery2 from "../../../assets/iread/iread_22_9.jpg";
import gallery3 from "../../../assets/iread/iread_22_6.jpg";
import gallery4 from "../../../assets/iread/iread_22_7.jpg";
import gallery5 from "../../../assets/iread/iread_22_8.jpg";
import gallery6 from "../../../assets/iread/iread_22_1.jpg";
import gallery7 from "../../../assets/iread/iread_22_2.jpg";
import gallery8 from "../../../assets/iread/iread_22_3.jpg";
import gallery9 from "../../../assets/iread/iread_22_4.jpg";
import gallery10 from "../../../assets/iread/iread_22_5.jpg";
import gallery11 from "../../../assets/iread/iread_22_10.jpg";

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
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Box marginTop={{ xs: "25%", sm: "2%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "27vh", sm: "26vh" }}
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
