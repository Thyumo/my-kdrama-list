import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";

import { useRealmApp } from "../realm/RealmApp";

const LoginScreen: React.FC = () => {
  const app = useRealmApp();

  // Keep track of form input state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Keep track of input validation/errors
  const [error, setError] = React.useState<{
    email?: string;
    password?: string;
  }>({});

  function parseAuthenticationError(err: Error) {
    const parts = err.message.split(":");
    const reason = parts[parts.length - 1].trimStart();
    if (!reason) return { status: "", message: "" };
    const reasonRegex = /(?<message>.+)\s\(status (?<status>[0-9][0-9][0-9])/;
    const match = reason.match(reasonRegex);
    const { status, message } = match?.groups ?? {};
    return { status, message };
  }

  function handleAuthenticationError(err: Error) {
    console.error(err);
    const { status, message } = parseAuthenticationError(err);
    const errorType = message || status;
    switch (errorType) {
      case "invalid username":
        setError((prevErr) => ({
          ...prevErr,
          email: "Invalid email address.",
        }));
        break;
      case "invalid username/password":
      case "invalid password":
      case "401":
        setError((err) => ({ ...err, password: "Incorrect password." }));
        break;
      case "name already in use":
      case "409":
        setError((err) => ({ ...err, email: "Email is already registered." }));
        break;
      case "password must be between 6 and 128 characters":
      case "400":
        setError((err) => ({
          ...err,
          password: "Password must be between 6 and 128 characters.",
        }));
        break;
    }
  }

  const handleLogin = async () => {
    setError((e) => ({ ...e, password: undefined }));
    try {
      return app.logIn(email, password);
    } catch (err) {
      handleAuthenticationError(err as Error);
    }
  };

  return (
    <Container>
      <Paper
        elevation={4}
        style={{
          paddingTop: "70px",
          paddingBottom: "70px",
          marginTop: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">My KDrama List</Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <TextField
            style={{ margin: "8px", marginTop: "38px" }}
            fullWidth
            id="email"
            label="Email"
            type="email"
            value={email}
            error={!!error.email}
            helperText={error.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ margin: "8px" }}
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            error={!!error.password}
            helperText={error.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            style={{ margin: "8px", marginTop: "38px" }}
            fullWidth
            variant="outlined"
            color="primary"
            type="submit"
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginScreen;
