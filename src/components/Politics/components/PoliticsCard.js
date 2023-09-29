import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const PoliticsCard = (props) => {
  const { details } = props;

  return (
    <Box
      border={"1px solid #ddd"}
      borderRadius={"10px"}
      width={{ xs: "100%", sm: "23%" }}
      flexWrap={"wrap"}
      padding={{ xs: "4% 1%", sm: "1%" }}
      component={Card}
      marginBottom={{ xs: "10%", sm: "1%" }}
      marginLeft={{ xs: "1%", sm: "2%" }}
    >
      <Box>
        <Box padding={"2%"} border={"1px solid #aaa"}>
          <Box
            component="img"
            height={{ xs: "30vh", sm: "25vh" }}
            sx={{
              objectFit: "cover",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              marginRight: "2%",
            }}
            src={details.image}
            alt={details.name}
          />
        </Box>
        <Typography
          padding={"5% 0%"}
          variant={"h5"}
          fontWeight={700}
          textAlign={"center"}
        >
          {details.name}
        </Typography>
        <Typography variant={"body2"} paddingBottom={"1%"} textAlign={"center"}>
          {details.position}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            marginTop: "1%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Chip
            label={details.category}
            size="small"
            sx={{
              backgroundColor: "#DC0000",
              color: "#fff",
              fontWeight: 600,
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

PoliticsCard.propTypes = {
  details: PropTypes.string,
};
export default PoliticsCard;
