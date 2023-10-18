import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "teal" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="App Logo"
            style={{ height: 100, marginRight: 10 }}
          />
        </Typography>
        <Box>
          <Link to="/">
            <Button color="inherit">ABOUT</Button>
          </Link>
          {/* <Button color="inherit">CLIMB</Button>
          <Button color="inherit">LIFT</Button> */}
          <Link to="/profile">
            <Button color="inherit">PROFILE</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit">LOGIN</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
