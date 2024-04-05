export function findPath(start, waypoints, end) {
  let currentPoint = start;
  let totalPath = [];

  // 출발지에서 각 경유지까지의 경로를 찾습니다.
  for (let i = 0; i < waypoints.length; i++) {
    const path = findPathBetweenTwoPoints(currentPoint, waypoints[i]);
    totalPath = totalPath.concat(path);
    currentPoint = waypoints[i];
  }

  // 마지막 경유지에서 목적지까지의 경로를 찾습니다.
  const finalPath = findPathBetweenTwoPoints(currentPoint, end);
  totalPath = totalPath.concat(finalPath);

  return totalPath;
}

// 두 지점 간의 최단 경로를 찾는 보조 함수 (간단하게 구현)
function findPathBetweenTwoPoints(start, end) {
  const path = [];
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  // x와 y 중에서 어떤 축을 따라서 먼저 이동할지 결정합니다.
  let stepX = deltaX > 0 ? 1 : -1;
  let stepY = deltaY > 0 ? 1 : -1;

  // 더 긴 축을 따라서 이동합니다.
  for (let i = 0; i < Math.abs(deltaX); i++) {
    path.push({ x: start.x + i * stepX, y: start.y });
  }
  for (let i = 0; i < Math.abs(deltaY); i++) {
    path.push({ x: end.x, y: start.y + i * stepY });
  }
  return path;
}
