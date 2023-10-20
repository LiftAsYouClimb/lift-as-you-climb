import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button, // Import Button from Material-UI
} from "@mui/material";
import SubmitButton from "../assets/SubmitButton.png";

function MaximizeForm() {
  const [climberType, setClimberType] = useState("firstTimeClimber");

  const handleClimberTypeChange = (event) => {
    setClimberType(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div
      style={{ backgroundColor: "#D3E1E1", padding: "20px", height: "100%" }}
    >
      <h1>Maximize Your Lift</h1>
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "white",
          padding: "20px",
          border: "2px solid black",
        }}
      >
        <Typography variant="h4" align="center">
          New Climbers
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="climberType"
            name="climberType"
            value={climberType}
            onChange={handleClimberTypeChange}
          >
            <FormControlLabel
              value="firstTimeClimber"
              control={<Radio />}
              label="First time climber"
            />
            <FormControlLabel
              value="friendWithoutLifts"
              control={<Radio />}
              label="Friend without any lifts"
            />
          </RadioGroup>
        </FormControl>
      </Container>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "20px", backgroundColor: "#D3E1E1" }}
      >
        <img src={SubmitButton} alt="Submit" />
      </Button>
    </div>
  );
}

export default MaximizeForm;
