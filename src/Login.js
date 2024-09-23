import * as React from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  IconButton,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Pastikan Grid mengambil seluruh tinggi viewport
        backgroundColor: "#BDE0FE",
      }}
    >
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.first", fontSize: 20, textAlign: "center" }}
          >
            <b>Welcome To Our App!</b>
          </Typography>
          <Grid
            container
            direction="column"
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
              gap: 2, // Add spacing between items in the Grid
            }}
          >
            <FormControl>
              <TextField
                id="standard-required"
                label="Username"
                variant="standard"
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Typography
              sx={{ color: "text.secondary", fontSize: 12, textAlign: "right" }}
            >
              Forgot your password?
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#6482AD", borderRadius: 10 }}
              // onClick={handleLogin}
            >
              Login
            </Button>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Don't have an account? <b>Sign Up</b>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
