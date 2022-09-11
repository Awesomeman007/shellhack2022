import { Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { jobs } from "../mockData/jobs";
import JobCard from "../ui/JobCard";
import TopBar from "../ui/TopBar";
import UnstyledLink from "../ui/UnstyledLink";

const Container = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background-color: white;
`;

const Chip = styled.div`
  background-color: blue;
  padding: 5px;
  display: inline-block;
  color: white;
  border-radius: 10px;
  margin: 5px;
`;

const SearchPage = () => {
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  return (
    <>
      <TopBar
        searchKeyWord={searchKeyWord}
        setSearchKeyWord={setSearchKeyWord}
      />
      <Container>
        <Chip>
          <Typography variant="h6" fontWeight={400}>
            + Location
          </Typography>
        </Chip>
        <Chip>
          <Typography variant="h6" fontWeight={400}>
            + Languages
          </Typography>
        </Chip>
        <Chip>
          <Typography variant="h6" fontWeight={400}>
            + Occupation Type
          </Typography>
        </Chip>

        {searchKeyWord.length >= 2 &&
          jobs.map((job) => {
            if (
              job.companyName
                .toLowerCase()
                .includes(searchKeyWord.toLowerCase()) ||
              job.jobTitle
                .toLowerCase()
                .includes(searchKeyWord.toLowerCase()) ||
              job.location.toLowerCase().includes(searchKeyWord.toLowerCase())
            ) {
              return (
                <UnstyledLink to={job.redirect}>
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
            }
            return;
          })}
      </Container>
    </>
  );
};

export default SearchPage;
