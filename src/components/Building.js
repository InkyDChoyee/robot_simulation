import React from "react";

const Building = ({ children }) => {
  return (
    <div className="building">
      <div className="start">ST</div>
      {children}
      <div className="end">END</div>
    </div>
  );
};

export default Building;
