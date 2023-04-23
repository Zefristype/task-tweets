import { useEffect, useState } from "react";
import { LinkBack } from "../../components/LinkBack/LinkBack.jsx";
import { Users } from "../../components/Users/Users.jsx";
import { getUsers, updateFollowing } from "../../services/Api.js";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { PER_PAGE_LIMIT } from "../../utils/constants.js";
import { throttle } from "../../utils/throttle.js";
import { Filter } from "../../components/Filter/Filter.jsx";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState(() => {
    if (localStorage.getItem("followingUsers") !== null) {
      return JSON.parse(localStorage.getItem("followingUsers"));
    }
    return [];
  });
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMoreBtnShown, setIsLoadMoreBtnShown] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    localStorage.setItem("followingUsers", JSON.stringify(followingUsers));
  }, [followingUsers]);

  useEffect(() => {
    setIsLoading(true);
    try {
      const request = async () => {
        const data = await getUsers(page);
        setUsers((prevState) => [...prevState, ...data]);
        if (data.length < PER_PAGE_LIMIT) {
          setIsLoadMoreBtnShown(false);
        }
      };
      request();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  const handleFilter = (option) => {
    setFilter(option);
  };

  const increasePage = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleClick = (index) => {
    const clickedUser = visibleUsers(filter).find(({ id }) => id === index);

    if (followingUsers.some(({ id }) => id === index)) {
      setFollowingUsers((prevState) =>
        prevState.filter(({ id }) => id !== index)
      );

      const updatedUser = {
        ...clickedUser,
        followers: clickedUser.followers - 1,
      };

      setUsers((prevState) =>
        prevState.map((user) => (user.id === index ? updatedUser : user))
      );

      try {
        updateFollowing(updatedUser);
      } catch (error) {
        console.log(error);
      }
      return;
    }

    const updatedUser = {
      ...clickedUser,
      followers: clickedUser.followers + 1,
    };
    setFollowingUsers((prevState) => [...prevState, updatedUser]);
    setUsers((prevState) =>
      prevState.map((user) => (user.id === index ? updatedUser : user))
    );
    try {
      updateFollowing(updatedUser);
    } catch (error) {
      console.log(error);
    }
  };
  const visibleUsers = (filter) => {
    switch (filter) {
      case "all":
        return users;
      case "follow":
        return users.filter((user) => {
          return !followingUsers.some((followingUser) => {
            return user.id === followingUser.id;
          });
        });
      case "following":
        return followingUsers;
      default:
        break;
    }
  };
  return (
    <>
      <Filter handleFilter={handleFilter} />
      <Users
        users={visibleUsers(filter)}
        followingUsers={followingUsers}
        handleClick={throttle(handleClick, 300)}
      />
      {filter === "all" && isLoadMoreBtnShown && (
        <LoadMoreBtn isLoading={isLoading} increasePage={increasePage} />
      )}

      <LinkBack>Back</LinkBack>
    </>
  );
};

export default Tweets;
