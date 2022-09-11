import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../constants/colors";
import UnstyledLink from "../ui/UnstyledLink";

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
            <Typography variant="h2" textAlign="left" my={1}>
              Pablo Picaaaaho
            </Typography>
            <Typography variant="h4" textAlign="left" my={1}>
              "Your code goes here!"
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor="white" p={2} my={1}>
      <Typography variant="h3" mb={2} textAlign="left">
          Nationality
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Citizenship:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Spanish
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Language:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              English, Spanish
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor="white" p={2} my={1}>
        <Typography variant="h3" mb={2} textAlign="left">
          Preferences
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Desired Occupation:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Server
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Desired Salary:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              1000000
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Location:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" mb={1} textAlign="left">
              Miami
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor="white" p={2} my={1}>
        <Typography variant="h3" mb={2} textAlign="left">
          Security
        </Typography>
        <Typography variant="h4" mb={1} textAlign="left">
          Form of ID:
        </Typography>
        <Typography variant="h4" mb={1} textAlign="left">
          Date Verified:
        </Typography>
        <Typography variant="h4" mb={1} textAlign="left">
          Status:
        </Typography>
      </Box>

      <UnstyledLink to="/landing">
        <Box bgcolor="white" p={2} my={1}>
          <Typography
            variant="h4"
            sx={{ color: Colors.warning }}
            textAlign="left"
          >
            Log out
          </Typography>
        </Box>
      </UnstyledLink>
    </>
  );
};

export default ProfilePage;
