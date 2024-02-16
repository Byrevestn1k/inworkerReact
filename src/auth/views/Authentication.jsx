import "./auth.css";

import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Avatar,
  Button,
  TextField,
  Container,
  Box,
  Typography,
  CircularProgress,
  Backdrop
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
// actions
import { SignIn } from "../action/auth.action";
import { useNavigate } from "react-router";
import { deepOrange } from '@mui/material/colors';
// copyright component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a color="inherit" href="">
        Quintessence
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// styles


const Authentication = (props) => {
  // declarations
  let navigator = useNavigate()
  const dispatch = useDispatch();
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  // check  data
  const { isLoggedIn, loading } = useSelector((state) => state.authReducer);
  // sign in method
  const handleSignIn = () => {
    SignIn(email, password, dispatch);
  };
  // check user loggedin or not to change route
  useEffect(() => {
    if (isLoggedIn) {
      navigator("/admin");
    } else navigator("/auth");
  }, [isLoggedIn]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* loading */}
      <Backdrop style={{ zIndex: "1000", color: "#fff" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div >
        <div className="auth-avatar">
          <Avatar sx={{ bgcolor: deepOrange[500], width: 70, height: 70 }}>
          </Avatar>
        </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => set_email(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => set_password(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignIn}
          >
            {loading ? "...signing" : "SIGN IN"}
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Authentication;
