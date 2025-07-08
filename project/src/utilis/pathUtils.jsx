import PF from 'pathfinding';
import { CELL_SIZE, gridMatrix } from '../jsonfiles/aisleGrid';

export function findPathBetweenPoints(startPx, endPx) {
  console.log('Startpx:', startPx);
  console.log('Endpx:', endPx);

  const [sx, sy] = [Math.floor(startPx.x / CELL_SIZE), Math.floor(startPx.y / CELL_SIZE)];
  const [ex, ey] = [Math.floor(endPx.x / CELL_SIZE), Math.floor(endPx.y / CELL_SIZE)];

  console.log(`Start grid: (${sx}, ${sy}) →`, gridMatrix[sy]?.[sx]);
  console.log(`End grid: (${ex}, ${ey}) →`, gridMatrix[ey]?.[ex]);

  if (gridMatrix[sy]?.[sx] !== 1 || gridMatrix[ey]?.[ex] !== 1) {
    console.warn('Start or end is not walkable.');
    return [];
  }

  const finder = new PF.AStarFinder({
    allowDiagonal: false,
    heuristic: PF.Heuristic.manhattan,
  });

  // ⚠️ Create a fresh grid per path to avoid stale state
  const grid = new PF.Grid(gridMatrix); 
  const rawPath = finder.findPath(sx, sy, ex, ey, grid); // ✅ NO clone here; grid is new already

  console.log('Raw grid path:', rawPath);

  if (rawPath.length === 0) {
    console.warn(`❌ No path found from (${sx}, ${sy}) to (${ex}, ${ey})`);
    return [];
  }

  return rawPath.map(([x, y]) => ({
    x: x * CELL_SIZE + CELL_SIZE / 2,
    y: y * CELL_SIZE + CELL_SIZE / 2,
  }));
}
