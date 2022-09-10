import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainRoute from "./routes/index.route";
import MessagePage from "./pages/MessagePage";
import ProfilePage from "./pages/ProfilePage";
import StyledBottomNavigation from "./ui/StyledBottomNavigation";
import AuthenRoute from "./routes/authen.route";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;

function App() {
  return (
    <Container>
      {/* <Routes> */}
        <MainRoute />
        <AuthenRoute />
      {/* </Routes> */}
    </Container>
  );
}

export default App;
