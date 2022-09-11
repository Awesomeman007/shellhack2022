import { Typography, Box, Button, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components'

const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`

const JobCard = () => {
    return (
        <Box bgcolor="white" my="5px" p="10px">
            {/* <Container> */}
                <Typography variant="h4" textAlign="left" fontWeight={400} mb={1}>Job Title</Typography>
                <Typography variant="h5" textAlign="left">- Company Name</Typography>
                <Typography variant="h5" textAlign="left">- Location</Typography>
                <Typography variant="h5" textAlign="left">- Salary</Typography>
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
    )
}

export default JobCard