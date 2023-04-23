import PropTypes from "prop-types";
import { Button } from "./LoadMoreBtn.styled.jsx";
import { Loader } from "../Loader/Loader.jsx";

export const LoadMoreBtn = ({ increasePage, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <Button onClick={() => increasePage()}>Load more</Button>
  );
};

LoadMoreBtn.propTypes = {
  increasePage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
