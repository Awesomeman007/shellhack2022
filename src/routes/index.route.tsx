import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyInfoPage from "../pages/CompanyInfoPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MessagePage from "../pages/MessagePage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";
import StyledBottomNavigation from "../ui/StyledBottomNavigation";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<StyledBottomNavigation />}>
        <Route index element={<HomePage />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="company/info" element={<CompanyInfoPage />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
};

export default MainRoute;
