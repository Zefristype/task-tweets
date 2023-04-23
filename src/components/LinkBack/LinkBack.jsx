import { LinkToHome } from "./LinkBack.styled.jsx";

export const LinkBack = ({ children }) => {
  return <LinkToHome to="/">{children}</LinkToHome>;
};
