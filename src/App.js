import "./App.css";
import React, { useState } from "react";
import Robot from "./components/Robot";
import Building from "./components/Building";
import { findPath } from "./utils/pathfinding";

function App() {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [devices, setDevices] = useState([
    { type: "bell", position: { x: 2, y: 3 } },
    { type: "elevator", position: { x: 5, y: 5 } },
    { type: "chime", position: { x: 8, y: 2 } },
  ]);

  return (
    <div className="App">
      <Building>
        <Robot position={robotPosition} />
        {devices.map((device, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: device.position.x * 50,
              top: device.position.y * 50,
            }}
          >
            {device.type}
          </div>
        ))}
      </Building>
    </div>
  );
}

export default App;
