import PropTypes from "prop-types";
import { UserCard } from "../UserCard/UserCard.jsx";
import { UsersList } from "./Users.styled.jsx";

export const Users = ({ users, followingUsers, handleClick }) => {
  return (
    <UsersList>
      {users.map((user) => (
        <UserCard
          isUserFollowing={followingUsers.some(({ id }) => id === user.id)}
          handleClick={handleClick}
          key={user.id}
          user={user}
        />
      ))}
    </UsersList>
  );
};

Users.propTypes = {
  handleClick: PropTypes.func.isRequired,
  followingUsers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
