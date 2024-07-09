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

function Demo() {
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

export default Demo;
