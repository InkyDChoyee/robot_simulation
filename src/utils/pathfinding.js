import React from "react";

export function findPath(start, waypoints, end) {
  let currentPoint = start;
  let totalPath = [];

  for (let i = 0; i < waypoints.length; i++) {
    const path = findPathBetweenTwoPoints(currentPoint, waypoints[i]);
    totalPath = totalPath.concat(path);
    currentPoint = waypoints[i];
  }

  const finalPath = findPathBetweenTwoPoints(currentPoint, end);
  totalPath = totalPath.concat(finalPath);

  return totalPath;
}

function findPathBetweenTwoPoints(start, end) {
  const path = [];
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  let stepX = deltaX > 0 ? 1 : -1;
  let stepY = deltaY > 0 ? 1 : -1;

  for (let i = 0; i < Math.abs(deltaX); i++) {
    path.push({ x: start.x + i * stepX, y: start.y });
  }
  for (let i = 0; i < Math.abs(deltaY); i++) {
    path.push({ x: end.x, y: start.y + i * stepY });
  }
  return path;
}
