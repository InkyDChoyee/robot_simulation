import React, { useState } from "react";
import Building from "./components/Building";
import Robot from "./components/Robot";
import { findPath } from "./utils/pathfinding";

function RobotSimulation() {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const destination = { x: 9, y: 9 };

  const handleMoveToDevice = async (devicePosition) => {
    const pathToDevice = await findPath(
      { x: 0, y: 0 },
      [devicePosition],
      destination,
      []
    );

    for (const position of pathToDevice) {
      setRobotPosition(position);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  };

  const handleMoveToBell = () => handleMoveToDevice({ x: 2, y: 3 });
  const handleMoveToElevator = () => handleMoveToDevice({ x: 5, y: 5 });
  const handleMoveToChime = () => handleMoveToDevice({ x: 8, y: 2 });

  const handleMoveRobot = async () => {
    const totalPath = await findPath(
      { x: 0, y: 0 },
      [
        { x: 2, y: 3 },
        { x: 5, y: 5 },
        { x: 8, y: 2 },
      ],
      destination,
      []
    );

    for (const position of totalPath) {
      setRobotPosition(position);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  };

  return (
    <div className="App">
      <Building>
        <Robot position={robotPosition} />
        <div
          style={{
            position: "absolute",
            left: 2 * 50,
            top: 3 * 50,
            cursor: "pointer",
          }}
          onClick={handleMoveToBell}
        >
          bell
        </div>
        <div
          style={{
            position: "absolute",
            left: 5 * 50,
            top: 5 * 50,
            cursor: "pointer",
          }}
          onClick={handleMoveToElevator}
        >
          elevator
        </div>
        <div
          style={{
            position: "absolute",
            left: 8 * 50,
            top: 2 * 50,
            cursor: "pointer",
          }}
          onClick={handleMoveToChime}
        >
          chime
        </div>
      </Building>
      <button onClick={handleMoveRobot}>Move Robot</button>
    </div>
  );
}

export default RobotSimulation;
