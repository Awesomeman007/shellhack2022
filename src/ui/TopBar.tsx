import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Colors from "../constants/colors"

const Container = styled.div`
  height: 100px;
  width: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${Colors.lightgrey};
  border: none;
  border-radius: 10px;
  padding: 0 15px;
`;

const TopBar = () => {
  return (
    <>
      <Container>
        <Grid container height="100%" alignItems="center" justifyItems="center">
          <Grid item xs={2}>
            <img src={logo} width="50%"/>
          </Grid>
          <Grid item xs={8}>
            <Input placeholder="Search Jobs, Employers here"/>
          </Grid>
          <Grid item xs={2}>
            <FilterAltIcon color="disabled" fontSize="large" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TopBar;
