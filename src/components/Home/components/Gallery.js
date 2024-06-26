import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/townhall/townhall_1.jpg";
import gallery2 from "../../../assets/townhall/townhall_2.jpg";
import gallery3 from "../../../assets/townhall/townhall_3.jpg";
import gallery4 from "../../../assets/townhall/townhall_4.jpg";
import gallery5 from "../../../assets/townhall/townhall_5.jpg";
import gallery6 from "../../../assets/townhall/townhall_6.jpg";
import gallery7 from "../../../assets/townhall/townhall_7.jpg";
import gallery9 from "../../../assets/townhall/townhall_8.jpg";
import gallery8 from "../../../assets/townhall/townhall_9.jpg";
import gallery10 from "../../../assets/townhall/townhall_10.jpg";
import gallery11 from "../../../assets/townhall/townhall_11.jpg";
import gallery12 from "../../../assets/townhall/townhall_12.jpg";
import gallery13 from "../../../assets/townhall/townhall_13.jpg";
import gallery14 from "../../../assets/townhall/townhall_14.jpg";
import gallery15 from "../../../assets/townhall/townhall_15.jpg";
import gallery16 from "../../../assets/townhall/townhall_16.jpg";
import gallery17 from "../../../assets/townhall/townhall_17.jpg";
import gallery18 from "../../../assets/townhall/townhall_18.jpg";
import gallery19 from "../../../assets/townhall/townhall_19.jpg";
import gallery20 from "../../../assets/townhall/townhall_20.jpg";

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
    gallery9,
    gallery8,
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
    gallery20,
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box padding={{ xs: "25% 0%", sm: "5% 0% 10% 0%" }}>
      <Box>
        <Typography
          variant={"h5"}
          fontWeight={400}
          color={"#fff"}
          padding={"1% 0%"}
          textAlign={"center"}
        >
          A decade of connecting people with the government
        </Typography>
      </Box>
      <Box marginTop={{ xs: "5%", sm: "2%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "27vh", sm: "23vh" }}
            onClick={() => setIsViewerOpen(index)}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"tracka_townhall_img"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "2%", sm: "0.5%" }}
            width={{ xs: "100%", sm: "24%" }}
          />
        ))}
        <FsLightbox toggler={isViewerOpen} sources={photos} />
      </Box>
    </Box>
  );
};

export default Gallery;
