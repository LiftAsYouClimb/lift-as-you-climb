import React from "react";
import { Link, useLocation } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/logo.png";

const Navbar = () => {
  const buttonStyle = {
    color: "white",
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "24px",
  };

  const location = useLocation();
const isHomePage = location.pathname === "/" || location.pathname === "/login";

// Function to determine if the current page is the profile page or lift page
const isProfileOrLiftPageOrClimbPage =
  location.pathname === "/profile" || location.pathname === "/LiftPage" || location.pathname === "/ClimbPage";
  
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
            <Button style={{ ...buttonStyle }}>
              {location.pathname === "/" ? "< ABOUT />" : "ABOUT"}
            </Button>
          </Link>
          {isProfileOrLiftPageOrClimbPage && (
            <>
              <Link to="/ClimbPage">
                <Button style={{ ...buttonStyle }}>
                  {location.pathname.includes("/ClimbPage")
                    ? "< CLIMB />"
                    : "CLIMB"}
                </Button>
              </Link>
              <Link to="/LiftPage">
                <Button style={{ ...buttonStyle }}>
                  {location.pathname.includes("/LiftPage")
                    ? "< LIFT />"
                    : "LIFT"}
                </Button>
              </Link>
              <Link to="/profile">
                <Button style={{ ...buttonStyle }}>
                  {location.pathname.includes("/profile")
                    ? "< PROFILE />"
                    : "PROFILE"}
                </Button>
              </Link>
            </>
          )}
          {location.pathname === "/" || location.pathname === "/login" ? (
            <Link to="/login">
              <Button style={{ ...buttonStyle }}>
                {location.pathname === "/login" ? "< LOGIN />" : "LOGIN"}
              </Button>
            </Link>
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
