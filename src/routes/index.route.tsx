import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MessagePage from "../pages/MessagePage";
import ProfilePage from "../pages/ProfilePage";
import StyledBottomNavigation from "../ui/StyledBottomNavigation";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<StyledBottomNavigation />}>
        <Route index element={<HomePage />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
