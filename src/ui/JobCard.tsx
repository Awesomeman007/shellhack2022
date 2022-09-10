import { Typography, Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    max-width: 500px;
    min-height: 200px;
    border-radius: 0px;
    background-color: lightgrey;
    margin: 20px 0;
    box-shadow: 1px 5px 25px -14px rgba(94,94,94,0.84);
    padding: 10px;
`

const JobCard = () => {
    return (
        <Box bgcolor="white" my="20px" p="10px">
            {/* <Container> */}
                <Typography variant="h5" textAlign="left">Job Title</Typography>
                <Typography variant="h6" textAlign="left">- Company Name</Typography>
                <Typography variant="h6" textAlign="left">- Location</Typography>
                <Typography variant="h6" textAlign="left">- Salary</Typography>

            {/* </Container> */}
        </Box>
    )
}

export default JobCard