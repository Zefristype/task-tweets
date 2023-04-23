import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout.jsx";
const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const Tweets = lazy(() => import("../Pages/Tweets/Tweets.jsx"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound.jsx"));

export const App = () => {
  return (
    <BrowserRouter basename="/task-tweets">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
