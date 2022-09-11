import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Position = () => {
  return (
    <>
      <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h4" fontWeight={400} textAlign="left">
          Server - Female
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Button variant="contained" fullWidth sx={{marginY: "10px"}}>
          Apply
        </Button>
      </Box>
      <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h4" fontWeight={400} textAlign="left">
          Cook - Male
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Button variant="contained" fullWidth sx={{marginY: "10px"}}>
          Apply
        </Button>
      </Box>
    </>
  );
};

export default Position;
