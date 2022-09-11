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
import { createTheme, ThemeProvider } from "@mui/material";

const Container = styled.div`
  text-align: center;
  background-color: lightgrey;
  min-height: 100vh;
`;

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "26px",
  fontWeight: 500,
};
theme.typography.h3 = {
  fontSize: "22px",
  fontWeight: 500,
};
theme.typography.h4 = {
  fontSize: "18px",
  fontWeight: 300,
};
theme.typography.h5 = {
  fontSize: "14px",
  fontWeight: 300,
};
theme.typography.h6 = {
  fontSize: "12px",
  fontWeight: 200,
};

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MainRoute />
      </ThemeProvider>
    </Container>
  );
}

export default App;
