import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gallery1 from "../../../assets/champions/champion_1.jpg";
import gallery2 from "../../../assets/champions/champion_2.jpg";
import gallery3 from "../../../assets/champions/champion_3.jpg";
import gallery4 from "../../../assets/champions/champion_4.jpg";
import gallery5 from "../../../assets/champions/champion_5.jpg";
import gallery6 from "../../../assets/champions/champion_6.jpg";
import gallery7 from "../../../assets/champions/champion_7.jpg";
import gallery8 from "../../../assets/champions/champion_8.jpg";
import gallery9 from "../../../assets/champions/champion_9.jpg";
import gallery10 from "../../../assets/champions/champion_10.jpg";

const Champions = () => {
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
    gallery8,
    gallery9,
    gallery10,
  ];

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
            alt={"community_champions_img"}
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

export default Champions;
