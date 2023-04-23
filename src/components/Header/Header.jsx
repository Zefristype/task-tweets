import { Nav, Link, NavHeader, Wrapper } from "./Header.styled.jsx";
import { Container } from "../Layout/Layout.styled.jsx";

export const Header = () => {
  return (
    <NavHeader>
      <Container>
        <Wrapper>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/tweets">Tweets</Link>
          </Nav>
        </Wrapper>
      </Container>
    </NavHeader>
  );
};
