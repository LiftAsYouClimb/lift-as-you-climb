import React from "react";

import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import LinkedInIcon from "../assets/linkedin.png";

const ProfileInfo = () => {
  // TODO: pull in user information from database
  // const {username, firstName, city, state, zip, email} = user

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxHeight: "300px",
    overflow: "scroll",
    padding: "16px"
  };

  const ProfileContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.customColorLightCyan.main
  }));

  const LinkedInCustom = styled("img")({
    height: "25px"
  });

  return (
    <ProfileContainer>
      <Box p={3}>
        <Typography
          gutterBottom
          style={{ fontWeight: "bold", textTransform: "uppercase" }}
          variant="h6"
        >
          Contact Information
        </Typography>
        <div style={containerStyle}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <AccountCircleIcon style={{ marginRight: "4px" }} />
            username
          </div>
          <div style={{ alignItems: "center", display: "flex" }}>
            <LocationOnIcon style={{ marginRight: "4px" }} />
            City, State Zip
          </div>
          <div style={{ alignItems: "center", display: "flex" }}>
            <EmailIcon style={{ marginRight: "4px" }} />
            Email
          </div>
        </div>
      </Box>

      <Box p={3}>
        <Typography
          gutterBottom
          style={{ fontWeight: "bold", textTransform: "uppercase" }}
          variant="h6"
        >
          Social Media
        </Typography>
        <div style={containerStyle}>
          <Grid container>
            <Link
              href="" // TODO: user linkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInCustom src={LinkedInIcon} alt="LinkedIn Icon" />
            </Link>
          </Grid>
        </div>
      </Box>
    </ProfileContainer>
  );
};

export default ProfileInfo;
