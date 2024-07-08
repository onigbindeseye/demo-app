import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gallery1 from "../../../assets/projects/project_1.jpg";
import gallery2 from "../../../assets/projects/project_2.jpg";
import gallery3 from "../../../assets/projects/project_3.jpg";
import gallery4 from "../../../assets/projects/project_4.jpg";
import gallery5 from "../../../assets/projects/project_5.jpg";
import gallery6 from "../../../assets/projects/project_6.jpg";
import gallery7 from "../../../assets/projects/project_7.jpg";
import gallery8 from "../../../assets/projects/project_8.jpg";
import gallery9 from "../../../assets/projects/project_9.jpg";
import gallery10 from "../../../assets/projects/project_10.jpg";
import gallery11 from "../../../assets/projects/project_11.jpg";
import gallery12 from "../../../assets/projects/project_12.jpg";
import gallery13 from "../../../assets/projects/project_13.jpg";
import gallery14 from "../../../assets/projects/project_14.jpg";
import gallery15 from "../../../assets/projects/project_15.jpg";
import gallery16 from "../../../assets/projects/project_16.jpg";

const Projects = () => {
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
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box padding={{ xs: "10% 0%", sm: "0% 0% 5% 0%" }}>
      <Box marginTop={{ xs: "0%", sm: "2%" }}>
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
            alt={"project_tracked_img"}
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

export default Projects;
