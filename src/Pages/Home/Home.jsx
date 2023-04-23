import { Box, Title, Text, ToTweets } from "./Home.styled.jsx";

const Home = () => {
  return (
    <Box>
      <Title>Tweets</Title>
      <Text>
        Here you can follow and unfollow different people,filter them and etc...
      </Text>
      <ToTweets to="tweets">Check this out</ToTweets>
    </Box>
  );
};

export default Home;
