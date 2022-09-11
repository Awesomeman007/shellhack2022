import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "../mockData/jobs";
import JobCard from "../ui/JobCard";
import StyledBottomNavigation from "../ui/StyledBottomNavigation";
import TopBar from "../ui/TopBar";
import styled from 'styled-components'
import UnstyledLink from "../ui/UnstyledLink";

const Container = styled.div`
  padding: 100px 0 50px 0;
`

const HomePage = () => {
  return (
    <>
    <TopBar />
    <Container>
      {jobs.map((job) => {
        return (
          <UnstyledLink to={job.redirect} >
            <JobCard
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              location={job.location}
              logo={job.logo}
              salary={job.salary}
              redirect={job.redirect}
              key={`${job.companyName}+${job.jobTitle}`}
            />
          </UnstyledLink>
        );
      })}
    </Container>
    </>
  );
};

export default HomePage;
