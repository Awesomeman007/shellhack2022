import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CompanyInfoPage from "../pages/CompanyInfoPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import MessagePage from "../pages/MessagePage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";
import StyledBottomNavigation from "../ui/StyledBottomNavigation";


const Container = styled.div`
  height: 100vh;
  background-color: white;
`;

const MainRoute = () => {
  const Container = styled.div`
    height: 100vh;
    background-color: white;
  `;

  return (
    <Routes>
      <Route path="/" element={<StyledBottomNavigation />}>
        <Route path="home" element={<HomePage />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="company/info" element={<CompanyInfoPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route
        index
        element={
          <Container>
            <LandingPage />
          </Container>
        }
      />
      <Route
        path="login"
        element={
          <Container>
            <LoginPage />
          </Container>
        }
      />
    </Routes>
  );
};

export default MainRoute;
