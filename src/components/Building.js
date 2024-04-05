import React from "react";

const Building = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  );
};

export default Building;
