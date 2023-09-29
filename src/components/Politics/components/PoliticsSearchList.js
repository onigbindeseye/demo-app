import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import PoliticsCard from "./PoliticsCard";

function PoliticsSearchList({ filteredPolitics }) {
  const filtered = filteredPolitics.map((details) => (
    <PoliticsCard key={details.id} details={details} />
  ));
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
    >
      {filtered}
    </Box>
  );
}

PoliticsSearchList.propTypes = {
  filteredPolitics: PropTypes.string,
};

export default PoliticsSearchList;
