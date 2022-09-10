import React from "react";
import JobCard from "../ui/JobCard";
import StyledBottomNavigation from "../ui/StyledBottomNavigation";
import TopBar from "../ui/TopBar";

const HomePage = () => {
  return (
    <>
        <div style={{height: "80px"}}/>
        <TopBar />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
    </>
  );
};

export default HomePage;
