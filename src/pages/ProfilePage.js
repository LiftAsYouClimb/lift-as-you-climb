import React, { useState } from "react";

import { Container, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";

import EditableInput from "../components/EditableInput";
import ProfileInfo from "../components/ProfileInfo";
import ProfileImage from "../assets/profile-img.png";

const ProfilePage = () => {
  const [bioText, setBioText] = useState("");
  const [experienceText, setExperienceText] = useState("");
  const theme = useTheme();

  const ProfileIconCustom = styled("img")({
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      height: "100px"
    }
  });

  return (
    <Container style={{ marginTop: "24px" }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Box p={3}>
            <ProfileIconCustom src={ProfileImage} alt="Profile Icon" />
          </Box>
        </Grid>

        <Grid xs={8} style={{}}>
          <Box
            p={3}
            style={{
              alignItems: "center",
              display: "flex",
              height: "100%"
            }}
          >
            <Typography variant="h2" gutterBottom>
              Name
            </Typography>
          </Box>
        </Grid>

        <Grid xs={12} md={4} lg={4}>
          <ProfileInfo />
        </Grid>

        <Grid xs={12} md={8} lg={8}>
          <Paper
            elevation={3}
            style={{ backgroundColor: theme.palette.customColorLightCyan.main }}
          >
            <Box p={3}>
              <Typography
                gutterBottom
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
                variant="h6"
              >
                Bio
              </Typography>
              <EditableInput setText={setBioText} text={bioText} />
            </Box>

            <Box p={3}>
              <Typography
                gutterBottom
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
                variant="h6"
              >
                Professional Experience
              </Typography>
              <EditableInput
                setText={setExperienceText}
                text={experienceText}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ProfilePage;
