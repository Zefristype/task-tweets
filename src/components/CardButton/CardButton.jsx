import PropTypes from "prop-types";
import { Button } from "./CardButton.styled.jsx";

export const CardButton = ({ handleClick, id, isUserFollowing }) => {
  return (
    <Button isUserFollowing={isUserFollowing} onClick={() => handleClick(id)}>
      {isUserFollowing ? "Following" : "Follow"}
    </Button>
  );
};

CardButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isUserFollowing: PropTypes.bool.isRequired,
};
