import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import SupportForm from "./SupportForm";

const ClimbPage = () => {
  return (
    <Container style={{ marginTop: "24px", marginBottom: "24px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} style={{}}>
          <Box
            p={3}
            style={{
              alignItems: "center",
              display: "flex",
              height: "100%",
              justifyContent: "center"
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              style={{ textTransform: "uppercase", fontWeight: 700 }}
            >
              Get support while you climb
            </Typography>
          </Box>
        </Grid>

        <SupportForm />
      </Grid>
    </Container>
  );
};
export default ClimbPage;
