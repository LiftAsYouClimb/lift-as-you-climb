import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
  
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="App Logo"
            style={{ height: 100, marginRight: 10 }}
          />
      
        </Typography>
        <Box>
          <Button color="inherit">Button 1</Button>
          <Button color="inherit">Button 2</Button>
          <Button color="inherit">Button 3</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
