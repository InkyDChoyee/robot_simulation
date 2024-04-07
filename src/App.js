import React, { useState } from "react";
import Building from "./components/Building";
import Robot from "./components/Robot";
import { findPath } from "./utils/pathfinding";
import "./App.css";
import elevatorImg from "./resources/img/elevator.png";
import bellImg from "./resources/img/bell.png";
import chimeImg from "./resources/img/chime.png";

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
      await new Promise((resolve) => setTimeout(resolve, 300));
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
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };

  return (
    <div className="App">
      <div className="titleBox">
        <h2>자율주행 로봇 시뮬레이터</h2>
      </div>
      <nav>
        <p>원하는 경유지를 선택하여 로봇을 이동시킬 수 있습니다</p>
      </nav>
      <div className="content">
        <div className="buildingBox">
          <Building>
            <Robot position={robotPosition} />
            <div className="bell" onClick={handleMoveToBell}>
              <img src={bellImg} alt="bell" />
            </div>
            <div className="elevator" onClick={handleMoveToElevator}>
              <img src={elevatorImg} alt="elevator" />
            </div>
            <div className="chime" onClick={handleMoveToChime}>
              <img src={chimeImg} alt="chime" />
            </div>
          </Building>
          <section>
            <div className="subBell" onClick={handleMoveToBell}>
              <img src={bellImg} alt="bell" /> <span>호출벨</span>
            </div>
            <div className="subElevator" onClick={handleMoveToElevator}>
              <img src={elevatorImg} alt="elevator" /> <span>엘레베이터</span>
            </div>
            <div className="subChime" onClick={handleMoveToChime}>
              <img src={chimeImg} alt="chime" />
              <span>차임벨</span>
            </div>
            <button onClick={handleMoveRobot}>모든 경유지 경유하기</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RobotSimulation;
