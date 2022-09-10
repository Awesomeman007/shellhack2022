import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

// const Card = styled.Box`
//     height: 100px;
//     width: 94vw;
//     background-color: lightgrey;
//     margin: 3vw 3vw;
//     border-radius: 10px;
//     position: relative;
// `
const Profile = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: blue;
`;

const MessageTitle = styled.div``;

const MessageCard = () => {
  return (
    // <Card>
    <Box borderRadius="10px" bgcolor="white" p="10px" m="10px">
      <Grid container>
        <Grid item xs={2}>
          <Profile />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5" textAlign="left">
            Message Title
          </Typography>
          <Typography variant="h6" textAlign="left">
            Message Title
          </Typography>
        </Grid>
      </Grid>
    </Box>

    // </Card>
  );
};

export default MessageCard;
