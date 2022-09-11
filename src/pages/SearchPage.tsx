import React from "react";
import styled from "styled-components";
import TopBar from "../ui/TopBar";

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
`;

const SearchPage = () => {
  return (
    <>
      <TopBar />
      <Container />
    </>
  );
};

export default SearchPage;
