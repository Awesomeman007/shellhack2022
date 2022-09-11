import React from "react";
import MessageCard from "../ui/MessageCard";
import styled from "styled-components";
import { Box, Typography, Grid } from "@mui/material";

const Title = styled(Grid)`
  height: 80px;
  background-color: white;
  align-items: center;
  justify-items: center;

  position: fixed;
  top: 0;
  width: 100vw;
`;

const Container = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
`

const MessagePage = () => {
  return (
    <Container>
      <Title container justifyContent="center">
        <Typography
          variant="h2"
        >
          Message
        </Typography>
      </Title>
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </Container>
  );
};

export default MessagePage;
