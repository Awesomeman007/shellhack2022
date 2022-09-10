import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 100px 10px 0 10px;
`;

interface LoginInterface {
  phoneNumber: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, reset } = useForm<LoginInterface>();

  const onSubmit = (data: LoginInterface) => {
    console.log(data);
    if (data.phoneNumber === "0000000000" && data.password === "0000")
      navigate("/");
  };

  return (
    <Container>
      <Typography variant="h3" textAlign="left">
        Login
      </Typography>
      <form>
        <Controller
          name={"phoneNumber"}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Box sx={{ marginY: "20px" }}>
              <TextField
                fullWidth
                onChange={onChange}
                value={value}
                label={"Phone Number"}
              />
            </Box>
          )}
        ></Controller>

        <Controller
          name={"password"}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Box sx={{ marginY: "20px" }}>
              <TextField
                fullWidth
                onChange={onChange}
                value={value}
                label={"Password"}
              />
            </Box>
          )}
        ></Controller>
        <Button onClick={handleSubmit(onSubmit)}>Log in</Button>
      </form>
    </Container>
  );
};

export default LoginPage;
