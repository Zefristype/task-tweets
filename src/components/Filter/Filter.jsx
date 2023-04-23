import { useState } from "react";
import {
  Box,
  FilterList,
  ToggleFilter,
  FilterButton,
} from "./Filter.styled.jsx";
import PropTypes from "prop-types";

export const Filter = ({ handleFilter }) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [activeBtn, setActiveBtn] = useState("all");

  const toggleFilter = (e) => {
    setIsFilterShown((prevState) => !prevState);
  };

  const handleClick = (e) => {
    const button = e.currentTarget;

    setIsFilterShown(false);
    switch (button.name) {
      case "all":
        handleFilter("all");
        setActiveBtn("all");
        break;
      case "follow":
        handleFilter("follow");
        setActiveBtn("follow");
        break;
      case "following":
        handleFilter("following");
        setActiveBtn("following");
        break;
      default:
        break;
    }
  };
  return (
    <Box>
      <ToggleFilter type="button" onClick={toggleFilter}>
        filter: {activeBtn} {isFilterShown ? "↑" : "↓"}
      </ToggleFilter>
      {isFilterShown && (
        <FilterList>
          <li>
            <FilterButton
              activeBtn={activeBtn}
              name="all"
              onClick={handleClick}
              type="button"
            >
              All
            </FilterButton>
          </li>
          <li>
            <FilterButton
              activeBtn={activeBtn}
              name="follow"
              onClick={handleClick}
              type="button"
            >
              Follow
            </FilterButton>
          </li>
          <li>
            <FilterButton
              activeBtn={activeBtn}
              name="following"
              onClick={handleClick}
              type="button"
            >
              Following
            </FilterButton>
          </li>
        </FilterList>
      )}
    </Box>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
