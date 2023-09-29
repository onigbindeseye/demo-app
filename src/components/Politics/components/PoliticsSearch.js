import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import PoliticsSearchList from "./PoliticsSearchList";
import { TextField, Pagination } from "@mui/material";

function PoliticsSearch({ details }) {
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const changeFilterName = (e) => {
    setFilterName(e.target.value);
    setCurrentPage(1);
  };

  const changeFilterCategory = (e) => {
    setFilterCategory(e.target.value);
    setCurrentPage(1);
  };

  let politics = details.slice();

  if (filterName) {
    politics = politics.filter((item) =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }

  if (filterCategory) {
    politics = politics.filter((item) => {
      return item.category.includes(filterCategory);
    });
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPolitics = politics.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  function searchList() {
    return <PoliticsSearchList filteredPolitics={currentPolitics} />;
  }

  return (
    <Grid container marginTop={"2%"}>
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{ marginBottom: 3 }}
        margin={{ xs: "0%", sm: "0% 2%" }}
      >
        <Typography
          variant={"subtitle2"}
          fontWeight={700}
          sx={{ marginBottom: 2 }}
        >
          Search by Name
        </Typography>
        <TextField
          labelId="search3"
          id="search3"
          name={"search3"}
          fullWidth
          onInput={changeFilterName}
          value={filterName}
          placeholder="Search by Name"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{ marginBottom: 3 }}
        marginTop={{ xs: "4%", sm: "0%" }}
      >
        <Typography
          variant={"subtitle2"}
          fontWeight={700}
          sx={{ marginBottom: 2 }}
        >
          Search by Category
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="search2"
            id="search2"
            name={"search2"}
            fullWidth
            onChange={changeFilterCategory}
          >
            <MenuItem value={""}>None</MenuItem>
            <MenuItem value={"Politics"}>Politics</MenuItem>
            <MenuItem value={"Military"}>Military</MenuItem>
            <MenuItem value={"Entrepreneurship"}>Entrepreneurship</MenuItem>
            <MenuItem value={"Sports"}>Sports</MenuItem>
            <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
            <MenuItem value={"Civic Leadership"}>Civic Leadership</MenuItem>
            <MenuItem value={"Professional Leadership"}>
              Professional Leadership
            </MenuItem>
            <MenuItem value={"Law"}>Law</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {searchList()}
      {politics.length > itemsPerPage && (
        <Grid
          item
          xs={12}
          sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}
        >
          <Pagination
            count={Math.ceil(politics.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Grid>
      )}
    </Grid>
  );
}

PoliticsSearch.propTypes = {
  details: PropTypes.string,
};

export default PoliticsSearch;
