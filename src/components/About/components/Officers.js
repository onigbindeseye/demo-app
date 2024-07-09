import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/officers/img_1.jpg";
import gallery2 from "../../../assets/officers/img_2.jpg";
import gallery3 from "../../../assets/officers/img_3.jpg";
import gallery4 from "../../../assets/officers/img_4.jpg";

const Officers = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [gallery1, gallery2, gallery3, gallery4];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box padding={{ xs: "10% 0%", sm: "0% 0% 5% 0%" }}>
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
            alt={"state_officers_img"}
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

export default Officers;
