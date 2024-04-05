import React from "react";
import robot from "../resources/img/Robot.PNG";

const Robot = ({ position }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: position.x * 50,
        top: position.y * 50,
      }}
    >
      <img src={robot} alt="robot" />
    </div>
  );
};

export default Robot;
