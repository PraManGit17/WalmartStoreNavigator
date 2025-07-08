import React from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { locators } from '../jsonfiles/locators';
import { sections } from '../jsonfiles/sections';
import { useRoute } from '../context/RouteContext';
import { findPath } from './Pathfinding'; // <-- A* logic
import { gridMatrix, CELL_SIZE } from '../jsonfiles/aisleGrid';

const StoreMap = () => {
  const { selectedSection } = useRoute();

  const routeCoords = selectedSection
    .map(name => locators.find(loc => loc.name === name))
    .filter(Boolean);

  let finalRoute = [];
  for (let i = 0; i < routeCoords.length - 1; i++) {
    const from = routeCoords[i];
    const to = routeCoords[i + 1];

    console.log(`Finding path from ${from.name || i} to ${to.name || i + 1}`, from, to);

    try {
      const segment = findPath(from, to);
      if (segment.length > 0) {
        finalRoute.push(...segment);
      } else {
        console.warn('No path found between:', from, 'and', to);
      }
    } catch (err) {
      console.error('Error finding path:', err);
    }
  }


  const linePoints = finalRoute.flatMap(p => [p.x, p.y]);

  const cols = Math.floor(1195 / CELL_SIZE);
  const rows = Math.floor(550 / CELL_SIZE);

  routeCoords.forEach(({ name, x, y }) => {
    const gx = Math.floor(x / CELL_SIZE);
    const gy = Math.floor(y / CELL_SIZE);
    console.log(`📍 ${name} locator at grid: (${gx}, ${gy}) value:`, gridMatrix[gy]?.[gx]);
  });

  return (
    <div className='w-[80%] border-2 h-full rounded-2xl p-1 bg-gray-100'>
      <Stage width={1300} height={1000}>

        <Layer>
          {sections.map((sec, i) => (
            <React.Fragment key={i}>
              {sec.width && sec.height && (
                <Rect
                  x={sec.x}
                  y={sec.y}
                  width={sec.width}
                  height={sec.height}
                  fill={sec.color}
                  cornerRadius={4}
                />
              )}
              <Text
                text={sec.name}
                x={sec.textX}
                y={sec.textY}
                fontSize={sec.fontSize || 14}
                fill="black"
                rotation={sec.rotation || 0}
              />
            </React.Fragment>
          ))}
        </Layer>

        <Layer>
          {/* 🔴 Locator Points */}
          {locators.map((p, i) => (
            <Circle key={i} x={p.x} y={p.y} radius={3} fill="red" />
          ))}

          {linePoints.length >= 4 && (
            <Line
              points={linePoints}
              stroke='blue'
              strokeWidth={4}
              tension={0.2}
              lineCap='round'
            />
          )}

          {routeCoords.map((p, i) => (
            <Text
              key={i}
              text={`${i + 1}`}
              x={p.x + 5}
              y={p.y - 10}
              fontSize={14}
              fill="black"
            />
          ))}



          {gridMatrix.map((row, y) =>
            row.map((cell, x) =>
              cell === 1 ? (
                <Circle
                  key={`${x}-${y}`}
                  x={x * CELL_SIZE + CELL_SIZE / 2}
                  y={y * CELL_SIZE + CELL_SIZE / 2}
                  radius={2}
                  fill='gray'
                />
              ) : null
            )
          )}

          {Array.from({ length: rows }).map((_, rowIndex) =>
            Array.from({ length: cols }).map((_, colIndex) => (
              <Rect
                key={`${rowIndex}-${colIndex}`}
                x={colIndex * CELL_SIZE}
                y={rowIndex * CELL_SIZE}
                width={CELL_SIZE}
                height={CELL_SIZE}
                stroke="black"
                strokeWidth={0.5}
              />
            ))
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default StoreMap;
