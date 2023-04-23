import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "./Layout.styled.jsx";
import { Header } from "../Header/Header.jsx";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
