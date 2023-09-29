import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "white" : "transparent",
      color: trigger ? "black" : "white",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px",
    },
  });
};

const Scroll = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default Scroll;
