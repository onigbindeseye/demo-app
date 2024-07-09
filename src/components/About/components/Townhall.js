// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import MobileStepper from "@mui/material/MobileStepper";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import gallery1 from "../../../assets/townhall/townhall_1.jpg";
// import gallery2 from "../../../assets/townhall/townhall_2.jpg";
// import gallery3 from "../../../assets/townhall/townhall_3.jpg";
// import gallery4 from "../../../assets/townhall/townhall_4.jpg";
// import gallery5 from "../../../assets/townhall/townhall_5.jpg";
// import gallery6 from "../../../assets/townhall/townhall_6.jpg";
// import gallery7 from "../../../assets/townhall/townhall_7.jpg";
// import gallery9 from "../../../assets/townhall/townhall_8.jpg";
// import gallery8 from "../../../assets/townhall/townhall_9.jpg";
// import gallery10 from "../../../assets/townhall/townhall_10.jpg";
// import gallery11 from "../../../assets/townhall/townhall_11.jpg";
// import gallery12 from "../../../assets/townhall/townhall_12.jpg";
// import gallery13 from "../../../assets/townhall/townhall_13.jpg";
// import gallery14 from "../../../assets/townhall/townhall_14.jpg";
// import gallery15 from "../../../assets/townhall/townhall_15.jpg";
// import gallery16 from "../../../assets/townhall/townhall_16.jpg";
// // import gallery17 from "../../../assets/townhall/townhall_17.jpg";
// // import gallery18 from "../../../assets/townhall/townhall_18.jpg";
// // import gallery19 from "../../../assets/townhall/townhall_19.jpg";
// // import gallery20 from "../../../assets/townhall/townhall_20.jpg";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: "img_1",
//     imgPath: gallery1,
//   },
//   {
//     label: "img_2",
//     imgPath: gallery2,
//   },
//   {
//     label: "img_3",
//     imgPath: gallery3,
//   },
//   {
//     label: "img_4",
//     imgPath: gallery4,
//   },
//   {
//     label: "img_5",
//     imgPath: gallery5,
//   },
//   {
//     label: "img_6",
//     imgPath: gallery6,
//   },
//   {
//     label: "img_7",
//     imgPath: gallery7,
//   },
//   {
//     label: "img_8",
//     imgPath: gallery8,
//   },
//   {
//     label: "img_9",
//     imgPath: gallery9,
//   },
//   {
//     label: "img_10",
//     imgPath: gallery10,
//   },
//   {
//     label: "img_11",
//     imgPath: gallery11,
//   },
//   {
//     label: "img_12",
//     imgPath: gallery12,
//   },
//   {
//     label: "img_13",
//     imgPath: gallery13,
//   },
//   {
//     label: "img_14",
//     imgPath: gallery14,
//   },
//   {
//     label: "img_15",
//     imgPath: gallery15,
//   },
//   {
//     label: "img_16",
//     imgPath: gallery16,
//   },
//   //   {
//   //     label: "img_17",
//   //     imgPath: gallery17,
//   //   },
//   //   {
//   //     label: "img_18",
//   //     imgPath: gallery18,
//   //   },
//   //   {
//   //     label: "img_19",
//   //     imgPath: gallery19,
//   //   },
//   //   {
//   //     label: "img_20",
//   //     imgPath: gallery20,
//   //   },
// ];

// const WithStyles = ({ image }) => (
//   <Box>
//     {/* <img src={image} alt={image} style={{ width: "100%", height: "auto" }} /> */}
//     <Box
//       component="img"
//       height={{ xs: "35vh", sm: "50vh" }}
//       sx={{
//         objectFit: "cover",
//         position: "relative",
//         overflow: "hidden",
//         width: "100%",
//         marginRight: "2%",
//       }}
//       src={image}
//       alt={image}
//     />
//   </Box>
// );

// function Townhall() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     // <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "15%", sm: "0%" }}>
//     //   <Typography
//     //     variant="h3"
//     //     color="#F89521"
//     //     sx={{ fontWeight: 700 }}
//     //     paddingBottom={{ xs: "5%", sm: "3%" }}
//     //   >
//     //     Community Town Hall Meetings
//     //   </Typography>
//     //   <AutoPlaySwipeableViews
//     //     axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//     //     index={activeStep}
//     //     onChangeIndex={handleStepChange}
//     //     enableMouseEvents
//     //     interval={5000}
//     //   >
//     //     {images.map((step, index) => (
//     //       <div key={step.label}>
//     //         {Math.abs(activeStep - index) <= 2 ? (
//     //           <Box>
//     //             <Box
//     //               component="img"
//     //               height={{ xs: "35vh", sm: "80vh" }}
//     //               sx={{
//     //                 objectFit: "cover",
//     //                 position: "relative",
//     //                 overflow: "hidden",
//     //                 width: "100%",
//     //               }}
//     //               src={step.imgPath}
//     //               alt={step.label}
//     //             />
//     //           </Box>
//     //         ) : null}
//     //       </div>
//     //     ))}
//     //   </AutoPlaySwipeableViews>
//     //   <MobileStepper
//     //     steps={maxSteps}
//     //     position="static"
//     //     activeStep={activeStep}
//     //     nextButton={
//     //       <Button
//     //         size="small"
//     //         onClick={handleNext}
//     //         disabled={activeStep === maxSteps - 1}
//     //       >
//     //         Next
//     //         {theme.direction === "rtl" ? (
//     //           <KeyboardArrowLeft />
//     //         ) : (
//     //           <KeyboardArrowRight />
//     //         )}
//     //       </Button>
//     //     }
//     //     backButton={
//     //       <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//     //         {theme.direction === "rtl" ? (
//     //           <KeyboardArrowRight />
//     //         ) : (
//     //           <KeyboardArrowLeft />
//     //         )}
//     //         Back
//     //       </Button>
//     //     }
//     //   />
//     // </Box>

//     <Carousel
//       additionalTransfrom={0}
//       arrows
//       autoPlay
//       autoPlaySpeed={1000}
//       centerMode={false}
//       className=""
//       containerClass="container-with-dots"
//       dotListClass=""
//       draggable
//       focusOnSelect={false}
//       infinite
//       itemClass=""
//       keyBoardControl
//       minimumTouchDrag={80}
//       pauseOnHover
//       renderArrowsWhenDisabled={false}
//       renderButtonGroupOutside={false}
//       renderDotsOutside={false}
//       responsive={{
//         desktop: {
//           breakpoint: {
//             max: 3000,
//             min: 1024,
//           },
//           items: 3,
//           partialVisibilityGutter: 40,
//         },
//         mobile: {
//           breakpoint: {
//             max: 464,
//             min: 0,
//           },
//           items: 1,
//           partialVisibilityGutter: 30,
//         },
//         tablet: {
//           breakpoint: {
//             max: 1024,
//             min: 464,
//           },
//           items: 2,
//           partialVisibilityGutter: 30,
//         },
//       }}
//       rewind={false}
//       rewindWithAnimation={false}
//       rtl={false}
//       shouldResetAutoplay
//       showDots={false}
//       sliderClass=""
//       slidesToSlide={2}
//       swipeable
//     >
//       <WithStyles
//         description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
//         headline="w3js.com - web front-end studio"
//         image={gallery1}
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 1"
//         headline="w3js.com - web front-end studio"
//         image={gallery2}
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 2"
//         headline="w3js.com - web front-end studio"
//         image={gallery3}
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 2"
//         headline="w3js.com - web front-end studio"
//         image={gallery3}
//       />

//       {/* <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 2"
//         headline="w3js.com - web front-end studio"
//         image={gallery3}
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 1"
//         headline="w3js.com - web front-end studio"
//         image={gallery4}
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 1"
//         headline="w3js.com - web front-end studio"
//         image={gallery5}
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 2"
//         headline="w3js.com - web front-end studio"
//         image={gallery6}
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 1"
//         headline="w3js.com - web front-end studio"
//         image={gallery7}
//       /> */}
//       {/* <WithStyles
//         description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
//         headline="w3js.com - web front-end studio"
//         image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//       />
//       <WithStyles
//         description="React Carousel with Server Side Rendering Support – Part 1"
//         headline="w3js.com - web front-end studio"
//         image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//       />
//       <WithStyles
//         description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
//         headline="w3js.com - web front-end studio"
//         image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//       />
//       <WithStyles
//         description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
//         headline="w3js.com - web front-end studio"
//         image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//       />
//       <WithStyles
//         description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
//         headline="w3js.com - web front-end studio"
//         image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//       /> */}
//     </Carousel>
//   );
// }

// export default Townhall;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/townhall/townhall_1.jpg";
import gallery2 from "../../../assets/townhall/townhall_2.jpg";

// Define the WithStyles component
const WithStyles = ({ description, headline, image }) => (
  <Box textAlign="center" padding={2}>
    <img src={image} alt={headline} style={{ width: "100%", height: "auto" }} />
    <Typography variant="h6" color="primary" marginTop={2}>
      {headline}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {description}
    </Typography>
  </Box>
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // Optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // Optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // Optional, default to 1.
  },
};

function Townhall() {
  return (
    <Carousel
      swipeable
      draggable
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <WithStyles
        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
        headline="w3js.com - web front-end studio"
        image={gallery1}
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image={gallery2}
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 2"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 2"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
    </Carousel>
  );
}

export default Townhall;
