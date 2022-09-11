import { Typography, Box, Button, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Colors from "../constants/colors";

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
`;

interface JobCardInterface {
    companyName: string,
    logo: string,
    jobTitle: string,
    location: string,
    salary: string,
    redirect: string
}

const JobCard: React.FC<JobCardInterface> = (props: JobCardInterface) => {
  return (
    <Box bgcolor="white" my="5px" p="10px 15px">
      {/* <Container> */}
      <Grid container alignItems="center" spacing={2} mb="10px">
        <Grid item>
          <Profile src={props.logo} />
        </Grid>
        <Grid item>
            <Typography variant="h6">{props.companyName}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" textAlign="left" fontWeight={400} mb={1}>
        {props.jobTitle}
      </Typography>
      <Typography variant="h5" textAlign="left">
        - {props.location}
      </Typography>
      <Typography variant="h5" textAlign="left">
        - {props.salary}
      </Typography>
      {/* <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button variant="outlined" fullWidth>Save</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth>Apply</Button>
                    </Grid>
                </Grid> */}
      {/* </Container> */}
    </Box>
  );
};

export default JobCard;
