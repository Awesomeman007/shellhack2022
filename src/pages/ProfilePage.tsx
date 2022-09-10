import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ProfilePic = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: lightgrey;
`;

const ProfilePage = () => {
  return (
    <>
      <Box bgcolor="white" p={2}>
        <Grid container>
          <Grid item xs={4}>
            <ProfilePic />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h2" textAlign="left">Pablo Picaaaaho</Typography>
            <Typography variant="h4" textAlign="left">"Your code goes here!"</Typography>
            <Typography variant="h4" textAlign="left">Language: English, Spanish</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor="white" p={2} my={1}>
        <Typography variant="h3" textAlign="left">
          Preferences
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" textAlign="left">
              Desired Occupation:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" textAlign="left">
              Server
            </Typography>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={6}>
            <Typography variant="h4" textAlign="left">
              Desired Salary:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" textAlign="left">
              1000000
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" textAlign="left">
              Location:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" textAlign="left">
              Miami
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor="white" p={2} my={1}>
        <Typography variant="h3" textAlign="left">
          Security
        </Typography>
        <Typography variant="h4" textAlign="left">
          Form of ID:
        </Typography>
        <Typography variant="h4" textAlign="left">
          Date Verified:
        </Typography>
        <Typography variant="h4" textAlign="left">
          Status:
        </Typography>
      </Box>
    </>
  );
};

export default ProfilePage;
