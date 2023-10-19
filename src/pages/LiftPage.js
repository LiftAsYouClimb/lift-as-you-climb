import React, { useState } from "react";

import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";

import FormInput from "../components/FormInput";


const LiftPage = () => {
    const [supportText, setSupportText] = useState("");
    const [resourceText, setResourceText] = useState("");
    const theme = useTheme();

    const handleSave = () => {
        // Handle saving the text to the backend here
      };
    

  return (
    <Container style={{ marginTop: "24px" }}>
      <Grid container spacing={1}>
        <Box p={3} style={{alignItems: "center", justifyContent: "center", display: "flex", height: "100%", width: "100%"}}><Typography variant="h2" gutterBottom>Offer Your Support</Typography></Box>
        <Grid xs={12} md={8} lg={8}  style={{alignItems: "center", justifyContent: "center", display: "flex", height: "100%", width: "100%"}}>
          <Paper elevation={3} style={{justifyContent: "center", display: "flex", flexDirection: "column", height: "100%", width: "80%", backgroundColor: theme.palette.customColorLightCyan.main }} >
                <Typography gutterBottom style={{display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", paddingTop: ".5em" }} variant="h6">Add your words of wisdom or relentless resources:
              </Typography>
            <Box p={3}>
              <Typography gutterBottom style={{ fontWeight: "bold" }} variant="h6"> Words of Support:
              </Typography>
              <FormInput setText={setSupportText} text={supportText}/>
            </Box>
            <Box p={3}>
              <Typography gutterBottom style={{ fontWeight: "bold" }} variant="h6">Resources:
              </Typography>
              <FormInput setText={setResourceText} text={resourceText}/>
            </Box>
            <IconButton color="primary" onClick={handleSave}>
            SUBMIT
          </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default LiftPage;
