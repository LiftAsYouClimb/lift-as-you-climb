import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

const EditableInput = ({ setText, text }) => {
  const [isEditing, setEditing] = useState(false);

  const handleSave = () => {
    // Handle saving the text to the backend here
    setEditing(false);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxHeight: "300px",
    overflow: "hidden",
    padding: "16px"
  };

  const textContainerStyle = {
    maxHeight: "80%",
    overflowY: "auto",
    width: "100%"
  };

  return (
    <div style={containerStyle}>
      {isEditing ? (
        <div>
          <TextField
            fullWidth
            multiline
            onChange={(e) => {
              // Restrict the input to 1000 characters
              if (e.target.value.length <= 1000) {
                setText(e.target.value);
              }
            }}
            rows={4} // Adjust the number of rows as needed
            style={textContainerStyle}
            value={text}
          />
          <p>{1000 - text.length} characters remaining</p>
          <IconButton color="primary" onClick={handleSave}>
            SAVE
          </IconButton>
        </div>
      ) : (
        <div style={{ ...textContainerStyle, height: "auto" }}>
          <div onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
            <div
              style={{
                whiteSpace: "pre-line",
                wordWrap: "break-word"
              }}
            >
              {text || "Click to add text"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableInput;
