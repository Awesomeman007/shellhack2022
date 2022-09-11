import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-color: white;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  display: flex;
  margin-top: -50px;
  
`;

const LandingPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/login')
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
      <Container>
        <img src={logo} width="80%" />
      </Container>
    </>
  );
};

export default LandingPage;
