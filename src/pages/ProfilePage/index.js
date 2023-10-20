import "@passageidentity/passage-elements/passage-profile";
import { Container, Grid } from "@mui/material";

import { Support } from "../../components/Support";

import "./ProfilePage.css";

function ProfilePage() {
  return (
    <Container
      style={{
        marginBottom: "24px",
        marginTop: "24px"
      }}
    >
      <passage-profile app-id="e0EYlcepCkHve0EiiXrntHDA"></passage-profile>

      <Grid
        container
        spacing={2}
        style={{ flex: 1, marginBottom: "24px", marginTop: "24px" }}
      >
        <Grid item xs={6} md={6} lg={6} style={{ height: "100%" }}>
          <Support title="Support You've Received" />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Support title="Support You've Shared" />
        </Grid>
      </Grid>
    </Container>
  );
}
export default ProfilePage;
