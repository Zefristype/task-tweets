import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const pulsate = keyframes`
  0% {
    opacity: 0.5;
  }
  30% {
    text-shadow: 4px 2px 30px #ae7be3;
    }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 30px 0;
  color: #9c49f5;
`;

export const Text = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const ToTweets = styled(Link)`
  font-size: 30px;
  animation-name: ${pulsate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  opacity: 0.5;
`;
