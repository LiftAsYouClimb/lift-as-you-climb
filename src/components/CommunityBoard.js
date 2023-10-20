import React from "react";
import {
  Box,
  Button,
} from "@mui/material";
import CustomCard from "./Card";
import cardsData from "../data/cardsData";

const CommunityBoard = () => {
  const headerStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "40px",
    letterSpacing: "2px",
    textAlign: "center",
  };
  const pStyle = {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    fontSize: "20px",
  };
  const boxStyle = {
    backgroundColor: "#D3E1E1",
    marginTop: 0, // Set margin-top to 0
    height: 150,
    width: "75vw",
    marginLeft: "25%",
    marginBottom: "1%",
  };
  const askButton = {
    backgroundColor: "teal",
    borderRadius: "50px",
    color: "white",
    fontFamily: "'Roboto', sans-serif",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "21px",
    width: "260px",
    height: "50px",
    marginLeft: "25%",
  };
  const flexContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  


  return (
    <div style={flexContainerStyle}>
      <Box style={boxStyle}>
        <h1 style={{ ...headerStyle }}>Community Board</h1>
        <p style={{ ...pStyle }}>Offer support to your fellow climbers</p>
      </Box>
      <Button style={askButton}> Ask For Support </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {cardsData.map((card, index) => (
          <CustomCard key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default CommunityBoard;