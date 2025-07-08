
import PF from 'pathfinding';
import { gridMatrix, CELL_SIZE } from '../jsonfiles/aisleGrid';

export function findPath(start, end) {
  // Invert the matrix: 1 (your walkable) → 0 (PF walkable), 0 → 1 (PF blocked)
  const walkableGrid = gridMatrix.map(row => row.map(cell => (cell === 1 ? 0 : 1)));

  const grid = new PF.Grid(walkableGrid);
  const finder = new PF.AStarFinder();

  const toGridCoord = ({ x, y }) => [
    Math.floor(x / CELL_SIZE),
    Math.floor(y / CELL_SIZE)
  ];

  const toPixelCoord = ([gx, gy]) => ({
    x: gx * CELL_SIZE + CELL_SIZE / 2,
    y: gy * CELL_SIZE + CELL_SIZE / 2
  });

  const [sx, sy] = toGridCoord(start);
  const [ex, ey] = toGridCoord(end);


  if (!grid.isInside(sx, sy) || !grid.isInside(ex, ey)) {
    console.warn('Path point out of bounds:', { sx, sy, ex, ey });
    return [];
  }

  if (!grid.isWalkableAt(sx, sy) || !grid.isWalkableAt(ex, ey)) {
    console.warn('Start or end not walkable:', { sx, sy, ex, ey });
    return [];
  }

  const rawPath = finder.findPath(sx, sy, ex, ey, grid);

  return rawPath.map(toPixelCoord);
}