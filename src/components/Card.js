import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";

const CustomCard = ({ cardData }) => {
  const cardStyle = {
    backgroundColor: "#0F283C",
    color: "white",
    margin: "10px",
   height: "30vh",
   width:"70vw",
    marginLeft: "15%",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
  };
  const imageStyle = {
    height: "auto",
    width: "10%",
    margin: "10px",
  };
  const titleDescriptionContainerStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Card style={{ ...cardStyle }}>
      <div style={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={cardData.image}
          alt={cardData.title}
          style={imageStyle}
        />
        <div style={titleDescriptionContainerStyle}>
          <Typography
            variant="body1"
            color="white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {cardData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {cardData.description}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
