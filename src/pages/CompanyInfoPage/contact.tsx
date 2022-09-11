import { Box, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <>
      <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h4" fontWeight={400} textAlign="left">
          Phone Number
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          01111111111
        </Typography>
      </Box>
      <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h4" fontWeight={400} textAlign="left">
          Email
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          totojapaneserestaurant@outlook.com
        </Typography>
      </Box>
    </>
  );
};

export default Contact;
