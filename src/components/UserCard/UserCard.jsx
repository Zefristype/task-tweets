import PropTypes from "prop-types";
import {
  Item,
  Line,
  Avatar,
  Ellipse,
  AvatarWrapper,
  Logo,
  Box,
  Text,
  TextBox,
} from "../UserCard/UserCard.styled.jsx";
import { CardButton } from "../CardButton/CardButton.jsx";
import GoItLogo from "../../images/Logo.png";
import Background from "../../images/CardBackground.png";

export const UserCard = ({ user, handleClick, isUserFollowing }) => {
  const numberFormatter = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Item>
      <Logo src={GoItLogo} alt="Logo" />
      <img src={Background} alt="Background" />
      <AvatarWrapper>
        <Avatar src={user.avatar} alt="avatar" />
        <Ellipse />
      </AvatarWrapper>
      <Line />
      <Box>
        <TextBox>
          <Text>{numberFormatter(user.tweets)} tweets</Text>
          <Text>
            {numberFormatter(user.followers)}{" "}
            {user.followers === 1 ? "Follower" : "Followers"}
          </Text>
        </TextBox>
        <CardButton
          id={user.id}
          isUserFollowing={isUserFollowing}
          handleClick={handleClick}
        />
      </Box>
    </Item>
  );
};

UserCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
  isUserFollowing: PropTypes.bool.isRequired,
};
