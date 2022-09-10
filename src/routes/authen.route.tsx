import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MessagePage from "../pages/MessagePage";
import ProfilePage from "../pages/ProfilePage";

const AuthenRoute = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default AuthenRoute;
