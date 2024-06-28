// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import media1 from "../../../assets/media/media_6.png";
// import media2 from "../../../assets/media/media_1.png";
// import media3 from "../../../assets/media/media_2.png";
// import media4 from "../../../assets/media/media_3.png";
// import media5 from "../../../assets/media/media_4.png";
// import media6 from "../../../assets/media/media_5.png";
// import media7 from "../../../assets/media/media_7.png";
// import media8 from "../../../assets/media/media_8.png";
// import media9 from "../../../assets/media/media_9.png";
// import media10 from "../../../assets/media/media_10.png";
// import media11 from "../../../assets/media/media_11.png";
// import media12 from "../../../assets/media/media_12.png";

// function srcset(image, width, height, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${width * cols}&h=${
//       height * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function Mentions() {
//   return (
//     <Box>
//       <Typography
//         gutterBottom
//         fontWeight={700}
//         variant="h3"
//         paddingTop={"2%"}
//         paddingBottom={"2%"}
//         color="#F89521"
//         fontFamily={("Caveat", "cursive")}
//       >
//         Media Mentions
//       </Typography>

//       <ImageList
//         sx={{
//           width: 1200,
//           height: 1950,
//           // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
//           transform: "translateZ(0)",
//         }}
//         rowHeight={200}
//         gap={1}
//       >
//         {itemData.map((item) => {
//           const cols = item.featured ? 2 : 1;
//           const rows = item.featured ? 2 : 1;

//           return (
//             <ImageListItem key={item.img} cols={cols} rows={rows}>
//               <img
//                 {...srcset(item.img, 250, 200, rows, cols)}
//                 alt={item.title}
//                 loading="lazy"
//               />
//               <ImageListItemBar
//                 sx={{
//                   background:
//                     "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
//                     "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//                 }}
//                 title={item.title}
//                 position="top"
//                 actionIcon={
//                   <IconButton
//                     sx={{ color: "white" }}
//                     aria-label={`star ${item.title}`}
//                   >
//                     <StarBorderIcon />
//                   </IconButton>
//                 }
//                 actionPosition="left"
//               />
//             </ImageListItem>
//           );
//         })}
//       </ImageList>
//     </Box>
//   );
// }

// const itemData = [
//   {
//     img: media1,
//     title: "2017",
//     author: "@bkristastucchio",
//     // featured: true,
//   },
//   {
//     img: media2,
//     title: "Burger",
//     author: "@rollelflex_graphy726",
//   },
//   {
//     img: media3,
//     title: "Camera",
//     author: "@helloimnik",
//   },
//   {
//     img: media4,
//     title: "Coffee",
//     author: "@nolanissac",
//   },
//   {
//     img: media5,
//     title: "Hats",
//     author: "@hjrc33",
//   },
//   {
//     img: media6,
//     title: "Honey",
//     author: "@arwinneil",
//     // featured: true,
//   },
//   {
//     img: media7,
//     title: "Basketball",
//     author: "@tjdragotta",
//   },
//   {
//     img: media8,
//     title: "Fern",
//     author: "@katie_wasserman",
//   },
//   {
//     img: media9,
//     title: "Mushrooms",
//     author: "@silverdalex",
//   },
//   {
//     img: media10,
//     title: "Tomato basil",
//     author: "@shelleypauls",
//   },
//   {
//     img: media11,
//     title: "Sea star",
//     author: "@peterlaster",
//   },
//   {
//     img: media12,
//     title: "Bike",
//     author: "@southside_customs",
//   },
// ];

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/media/media_1.png";
import gallery2 from "../../../assets/media/media_2.png";
import gallery3 from "../../../assets/media/media_3.png";
import gallery4 from "../../../assets/media/media_4.png";
import gallery5 from "../../../assets/media/media_5.png";
import gallery6 from "../../../assets/media/media_6.png";
import gallery7 from "../../../assets/media/media_7.png";
import gallery8 from "../../../assets/media/media_8.png";
import gallery9 from "../../../assets/media/media_9.png";
import gallery10 from "../../../assets/media/media_10.png";
import gallery11 from "../../../assets/media/media_11.png";
import gallery12 from "../../../assets/media/media_12.png";

const Mentions = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    gallery7,
    gallery8,
    gallery10,
    gallery12,
    gallery6,
    gallery5,
    gallery9,
    gallery11,
    gallery3,
    gallery4,
    gallery2,
    gallery1,
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box padding={{ xs: "10% 0%", sm: "4% 0%" }}>
      <Box>
        <Box width={{ xs: "100%", sm: "40%" }}>
          <Typography
            gutterBottom
            fontWeight={700}
            variant="h3"
            paddingTop={"2%"}
            paddingBottom={"2%"}
            color="#F89521"
            fontFamily={("Caveat", "cursive")}
          >
            Media Mentions
          </Typography>
        </Box>
        {/* <Typography
          variant={"body2"}
          fontWeight={500}
          color={"#fff"}
          padding={"1% 0%"}
          textAlign={"center"}
        >
          Images from 2022 Active Citizens Awards
        </Typography> */}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={{ xs: "100%", sm: "100%" }}
      >
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Box
            component="img"
            height={{ xs: "95vh", sm: "300px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
              marginTop: "2%",
            }}
            src={gallery1}
            alt={"image"}
          />
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <Typography variant="h5" color="#fff" align="left" padding={"6%"}>
            Tracka's 10th anniversary is a monumental milestone, celebrating a
            decade of empowering communities through active citizenship and
            vigilant monitoring of government projects.
          </Typography>
        </Box>
      </Box>
      <Box marginTop={{ xs: "5%", sm: "0%" }}>
        {photosToShow.map((item, index) => (
          <Box
            component="img"
            height={{ xs: "28vh", sm: "23vh" }}
            onClick={() => setIsViewerOpen(index)}
            sx={{
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={item}
            alt={"aca2022_img"}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "1%", sm: "0.5%" }}
            width={{ xs: "100%", sm: "19%" }}
          />
        ))}

        <FsLightbox toggler={isViewerOpen} sources={photos} />
      </Box>
    </Box>
  );
};

export default Mentions;
