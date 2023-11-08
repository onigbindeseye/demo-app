import React from "react";
import Box from "@mui/material/Box";

const Map = ({ themeMode = "light" }) => {
  return (
    <Box>
      <Box
        component={"iframe"}
        borderRadius={2}
        minHeight={400}
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed/v1/place?q=55+Moleye+Street,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        sx={{
          filter: themeMode === "dark" ? "grayscale(0.5) opacity(0.7)" : "none",
        }}
      />
    </Box>
  );
};

export default Map;
