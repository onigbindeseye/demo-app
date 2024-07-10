import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import { Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import "./WithScrollbar.css";
import gallery9 from "../../../assets/townhall/townhall_8.jpg";
import gallery8 from "../../../assets/townhall/townhall_9.jpg";
import gallery10 from "../../../assets/townhall/townhall_10.jpg";
import gallery11 from "../../../assets/townhall/townhall_11.jpg";
import gallery12 from "../../../assets/townhall/townhall_12.jpg";
import gallery13 from "../../../assets/townhall/townhall_13.jpg";
import gallery14 from "../../../assets/townhall/townhall_14.jpg";
import gallery15 from "../../../assets/townhall/townhall_15.jpg";
// import gallery16 from "../../../assets/townhall/townhall_16.jpg";
// import gallery17 from "../../../assets/townhall/townhall_17.jpg";
// import gallery18 from "../../../assets/townhall/townhall_18.jpg";
// import gallery19 from "../../../assets/townhall/townhall_19.jpg";
// import gallery20 from "../../../assets/townhall/townhall_20.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const WithScrollbar = () => {
  const [additionalTransfrom, setAdditionalTransfrom] = useState(0);
  const carouselRef = useRef(null);

  const CustomSlider = ({ carouselState }) => {
    let value = 0;
    let carouselItemWidth = 0;

    if (carouselRef.current) {
      carouselItemWidth = carouselRef.current.state.itemWidth;
      const maxTranslateX = Math.round(
        carouselItemWidth *
          (carouselRef.current.state.totalItems -
            carouselRef.current.state.slidesToShow) +
          150
      );
      value = maxTranslateX / 100;
    }

    const { transform } = carouselState;

    return (
      <div className="custom-slider">
        <input
          type="range"
          value={Math.round(Math.abs(transform) / value)}
          defaultValue={0}
          max={
            (carouselItemWidth *
              (carouselState.totalItems - carouselState.slidesToShow) +
              (additionalTransfrom === 150 ? 0 : 150)) /
            value
          }
          onChange={(e) => {
            if (carouselRef.current.isAnimationAllowed) {
              carouselRef.current.isAnimationAllowed = false;
            }
            const nextTransform = e.target.value * value;
            const nextSlide = Math.round(nextTransform / carouselItemWidth);
            if (e.target.value === 0 && additionalTransfrom === 150) {
              carouselRef.current.isAnimationAllowed = true;
              setAdditionalTransfrom(0);
            }
            carouselRef.current.setState({
              transform: -nextTransform,
              currentSlide: nextSlide,
            });
          }}
          className="custom-slider__input"
        />
      </div>
    );
  };

  return (
    <dix>
      <Typography
        variant="h3"
        color="#F89521"
        sx={{ fontWeight: 700 }}
        paddingBottom={{ xs: "5%", sm: "3%" }}
      >
        Community Town Hall Meetings
      </Typography>
      <Carousel
        ssr={false}
        ref={carouselRef}
        arrows
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        keyBoardControl={true}
        autoPlaySpeed={3000}
        rewind={false}
        rewindWithAnimation={false}
        rtl={true}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        swipeable
        focusOnSelect={false}
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-additionalTransfrom}
        beforeChange={(nextSlide) => {
          if (nextSlide !== 0 && additionalTransfrom !== 150) {
            setAdditionalTransfrom(150);
          }
          if (nextSlide === 0 && additionalTransfrom === 150) {
            setAdditionalTransfrom(0);
          }
        }}
      >
        <div className="increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery8}
          />
        </div>
        <div className="increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery9}
          />
        </div>

        <div className="increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery10}
          />
        </div>

        <div className="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery11}
          />
        </div>

        <div className="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery12}
          />
        </div>
        <div className="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery13}
          />
        </div>

        <div className="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery14}
          />
        </div>
        <div className="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={gallery15}
          />
        </div>
      </Carousel>
    </dix>
  );
};

export default WithScrollbar;

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./withScrollbar.css";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 2,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };
// const sliderImageUrl = [
//   //First image url
//   {
//     url: "https://images.unsplash.com/flagged/photo-1556091766-9b818bc73fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
//   },
//   {
//     url: "https://images.unsplash.com/flagged/photo-1556091766-9b818bc73fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
//   },
//   //Second image url
//   {
//     url: "https://images.unsplash.com/flagged/photo-1556091766-9b818bc73fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
//   },
//   //Third image url
//   {
//     url: "https://images.unsplash.com/flagged/photo-1556091766-9b818bc73fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
//   },

//   //Fourth image url

//   {
//     url: "https://images.unsplash.com/flagged/photo-1556091766-9b818bc73fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
//   },
// ];
// const WithScrollbar = () => {
//   return (
//     <div className="parent">
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         // infinite={true}
//         partialVisible={false}
//         dotListClass="custom-dot-list-style"
//       >
//         {sliderImageUrl.map((imageUrl, index) => {
//           return (
//             <div className="slider" key={index}>
//               <img src={imageUrl.url} alt="movie" />
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// };
// export default WithScrollbar;
