import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import MessagePage from "../pages/MessagePage";
import ProfilePage from "../pages/ProfilePage";
import styled from "styled-components";

const AuthenRoute = () => {
  const Container = styled.div`
    height: 100vh;
    background-color: white;
  `;

  return (
    <Routes>
      <Route
        path="landing"
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

export default AuthenRoute;
