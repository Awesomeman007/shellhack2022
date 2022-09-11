import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Benefit = () => {
  return (
    <Grid container spacing={1} p="10px">
      <Grid container item direction="row" spacing={1}>
        <Grid item xs={6}>
          <Box p="10px" bgcolor="white" borderRadius="10px" height="100px">
            <Typography variant="h4" fontWeight={400} textAlign="left">
              Free Lunch
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p="10px" bgcolor="white" borderRadius="10px" height="100px">
            <Typography variant="h4" fontWeight={400} textAlign="left">
              Free Shelter
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container item direction="row" spacing={1}>
        <Grid item xs={6}>
          <Box p="10px" bgcolor="white" borderRadius="10px" height="100px">
            <Typography variant="h4" fontWeight={400} textAlign="left">
              Work Permit Sponsorship
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p="10px" bgcolor="white" borderRadius="10px" height="100px">
            <Typography variant="h4" fontWeight={400} textAlign="left">
              10 Annual Holidays
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Benefit;
