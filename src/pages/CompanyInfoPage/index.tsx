import { Box, Typography, Grid, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../constants/colors";
import StarIcon from "@mui/icons-material/Star";
import Location from "./location";
import Benefit from "./benefit";
import Position from "./position";
import Contact from "./contact";
import Review from "./review";

const Picture = styled.div`
  height: 300px;
  width: 100vw;
  background-color: ${Colors.lightgrey};
`;

const CompanyInfoPage = () => {
    const [currentTab, setCurrentTabs] = useState<string>("location")
    
    const handleChange = (event: React.SyntheticEvent, newTab: string) => {
        setCurrentTabs(newTab);
    }

    const TabDetail = () => {
      switch (currentTab) {
        case "review": {
          return <Review />
        }
        case "benefit": {
          return <Benefit />
        }
        case "position": {
          return <Position />
        }
        case "contact": {
          return <Contact />
        }
        default: {
          return <Location />
        }
      }
    }

  return (
    <>
      <Picture />
      <Box p="10px" bgcolor="white">
        <Typography variant="h3" textAlign="left">
          Toto Japanese Restaurant
        </Typography>
        <Grid container direction="row">
          <StarIcon color="warning" />
          <StarIcon color="warning" />
          <StarIcon color="warning" />
        </Grid>
        <Typography variant="h5" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      {/* <Box p="10px" my="10px" bgcolor="white">
        <Typography variant="h4" textAlign="left">
          What other people say about this company
        </Typography>
        <Typography variant="h5" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box> */}
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab value="location" label="Location" />
        <Tab value="review" label="Reviews" />
        <Tab value="benefit" label="Benefits" />
        <Tab value="position" label="Positions" />
        <Tab value="contact" label="Contacts" />
      </Tabs>

      <TabDetail />
      
      {/* <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h5" textAlign="left">
          "It is a nice place to work in Miami" Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          Anonymus | Vietnamese
        </Typography>
      </Box>
      <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h5" textAlign="left">
          "It is a nice place to work in Miami" Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          Anonymus | Vietnamese
        </Typography>
      </Box>
      <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h5" textAlign="left">
          "It is a nice place to work in Miami" Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          Anonymus | Vietnamese
        </Typography>
      </Box>
      <Box p="10px" m="10px" bgcolor="white" borderRadius="10px">
        <Typography variant="h5" textAlign="left">
          "It is a nice place to work in Miami" Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Typography>
        <Typography variant="h5" mt="5px" textAlign="left">
          Anonymus | Vietnamese
        </Typography>
      </Box> */}
    </>
  );
};

export default CompanyInfoPage;
