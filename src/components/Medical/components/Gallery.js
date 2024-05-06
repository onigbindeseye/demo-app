import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import gallery1 from "../../../assets/outreach/medical_2.jpg";
import gallery2 from "../../../assets/outreach/medical_3.jpg";
import gallery3 from "../../../assets/outreach/medical_4.jpg";
import gallery4 from "../../../assets/outreach/medical_5.jpg";
import gallery5 from "../../../assets/outreach/medical_6.jpg";
import gallery6 from "../../../assets/outreach/medical_7.jpg";
import gallery7 from "../../../assets/outreach/medical_8.jpg";
import gallery8 from "../../../assets/outreach/medical_9.jpg";
import gallery9 from "../../../assets/outreach/medical_10.jpg";
import gallery10 from "../../../assets/outreach/medical_11.jpg";
import gallery11 from "../../../assets/outreach/medical_12.jpg";
import gallery12 from "../../../assets/outreach/medical_13.jpg";
import gallery13 from "../../../assets/outreach/medical_14.jpg";
import gallery14 from "../../../assets/outreach/medical_15.jpg";
import gallery15 from "../../../assets/outreach/medical_16.jpg";
import gallery16 from "../../../assets/outreach/medical_17.jpg";
import gallery17 from "../../../assets/outreach/medical_18.jpg";
import gallery18 from "../../../assets/outreach/medical_19.jpg";
import gallery19 from "../../../assets/outreach/medical_20.jpg";
import gallery20 from "../../../assets/outreach/medical_21.jpg";

const Gallery = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    gallery1,
    gallery20,
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
    gallery17,
    gallery18,
    gallery19,
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
            alt={"Medical_Outreach"}
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
