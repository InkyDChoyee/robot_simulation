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

  // waypoints 배열을 devices와 동일한 구조로 변경
  const waypoints = devices.map((device) => ({
    x: device.position.x,
    y: device.position.y,
  }));

  // 도착점 설정
  const destination = { x: 9, y: 9 };

  // // 경로 계산 및 로봇 이동 로직
  // const handleMoveRobot = async () => {
  //   // 시작점부터 각 경유지까지 이동
  //   for (let i = 0; i < waypoints.length; i++) {
  //     const path = await findPath(
  //       robotPosition, // 로봇의 현재 위치를 시작점으로 설정
  //       [waypoints[i]], // 현재 경유지까지의 경로만 계산
  //       destination,
  //       []
  //     );
  //     for (const position of path) {
  //       setRobotPosition(position);
  //       await new Promise((resolve) => setTimeout(resolve, 500)); // 1초마다 이동
  //     }
  //   }
  // };

  // 경로 계산 및 로봇 이동 로직
  const handleMoveRobot = async () => {
    const totalPath = await findPath(
      { x: 0, y: 0 }, // 시작점을 0,0으로 설정
      waypoints, // 모든 경유지를 포함한 경로 계산
      destination,
      []
    );

    // 경로에 따라 로봇 이동
    for (const position of totalPath) {
      setRobotPosition(position);
      await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5초마다 이동
    }
  };

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
      <button onClick={handleMoveRobot}>Move Robot</button>
    </div>
  );
}

export default App;
