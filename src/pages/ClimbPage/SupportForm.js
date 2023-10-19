import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const SupportForm = () => {
  const theme = useTheme();

  const initialFormData = {
    type: [],
    title: "",
    details: "",
    anonymous: true
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // TODO:
      // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data
      //   const response = await axios.post('your-api-endpoint', formData);
      //   console.log('Data sent to the API:', response.data);

      // Reset the form data after a successful submission
      console.log({ formData });
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error sending data to the API:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleTypeChange = (event) => {
    setFormData({
      ...formData,
      type: event.target.value
    });
  };

  return (
    <Grid xs={12}>
      <form onSubmit={handleSubmit}>
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
              Support Type
            </Typography>
            <FormControl required fullWidth>
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                id="type"
                input={<OutlinedInput label="type" />}
                labelId="type-label"
                multiple
                name="type"
                onChange={handleTypeChange}
                value={formData.type}
              >
                <MenuItem value="words">Words</MenuItem>
                <MenuItem value="resources">Resources</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box p={3}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
              variant="h6"
            >
              Title
            </Typography>
            <FormControl required fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-title">Title</InputLabel>
              <OutlinedInput
                id="outlined-adornment-title"
                label="Enter title"
                maxRows={4}
                multiline
                name="title"
                onChange={handleChange}
                value={formData.title}
              />
            </FormControl>
          </Box>

          <Box p={3}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
              variant="h6"
            >
              Details
            </Typography>
            <FormControl required fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-details">
                Details
              </InputLabel>
              <OutlinedInput
                name="details"
                value={formData.details}
                onChange={handleChange}
                multiline
                maxRows={4}
                id="outlined-adornment-details"
                label="Enter details"
              />
            </FormControl>
          </Box>

          <Box p={3}>
            <FormControlLabel
              control={
                <Checkbox
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                />
              }
              label="Anonymous"
            />
          </Box>

          <Box p={3}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Paper>
      </form>
    </Grid>
  );
};
export default SupportForm;
