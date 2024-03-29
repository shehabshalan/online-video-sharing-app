import React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useUserAuth } from "../context/UserAuthContext";
import LoadingButton from "@mui/lab/LoadingButton";

function Login() {
  const { logIn, loading } = useUserAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    logIn(data.get("email"), data.get("password"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <LoadingButton
            type="submit"
            fullWidth
            loading={loading}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </LoadingButton>

          <Link
            href="/register"
            variant="body2"
            style={{ textAlign: "center" }}
          >
            {"Don't have an account? Register an account"}
          </Link>
        </Box>
        <Typography component="p" variant="body2" sx={{ mt: 3 }}>
          Demo user: <b>demo@demo.com</b>
        </Typography>
        <Typography component="p" variant="body2">
          Password : <b>demodemo</b>
        </Typography>
      </Box>
    </Container>
  );
}
export default Login;
