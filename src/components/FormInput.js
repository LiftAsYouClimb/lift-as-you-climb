import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

const FormInput = ({ setText, text }) => {
  const [isEditing, setEditing] = useState(false);

  const handleSave = () => {
    // Handle saving the text to the backend here
    setEditing(false);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100px",
    overflow: "hidden",
    marginBottom: "0"
  };

  const textContainerStyle = {
    maxHeight: "70%",
    overflowY: "auto",
    width: "100%"
  };

  return (
    <div style={containerStyle}>
      {isEditing ? (
        <div>
          <TextField 
            fullWidth
            onChange={(e) => {
              if (e.target.value.length <= 1000) {
                setText(e.target.value);
              }
            }}
            rows={2} 
            style={textContainerStyle}
            value={text}
          />
          <div style={{display: "flex"}}>
            <p>{1000 - text.length} characters remaining</p>
            <IconButton color="primary" onClick={handleSave}>
              SAVE
            </IconButton>
          </div>
        </div>
      ) : (
        <div style={{ ...textContainerStyle, height: "5em" }}>
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

export default FormInput;
