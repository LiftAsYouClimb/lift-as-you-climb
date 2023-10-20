import React from "react";
import CommunityBoard from "../components/CommunityBoard";
import MaximizeForm from "../components/MaximizeForm";

const LiftPage = () => {
  const pageStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const formStyle = {
    flex: 1,
    marginRight: "20px", // Adjust the margin as needed
  };

  const boardStyle = {
    flex: 1,
  };

  return (
    <div style={pageStyle}>
      <div style={formStyle}>
        <MaximizeForm />
      </div>
      <div style={boardStyle}>
        <CommunityBoard />
      </div>
    </div>
  );
};

export default LiftPage;
