import React from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { locators } from '../jsonfiles/locators';
import { sections } from '../jsonfiles/sections';
import { axile } from '../jsonfiles/axile';
import { useRoute } from '../context/RouteContext';


const StoreMap = () => {
  const { selectedSection } = useRoute();

  // function getPathSegmentsBetweenSections(sectionFrom, sectionTo, axile, locators) {
  //   const fromLocator = locators.find(p => p.name === sectionFrom);
  //   const toLocator = locators.find(p => p.name === sectionTo);
  //   if (!fromLocator || !toLocator) return [];

  //   const startAxiles = axile.filter(a => a.next.includes(sectionFrom));
  //   const targetAxiles = axile.filter(a => a.next.includes(sectionTo));

  //   const queue = [];
  //   const parent = {};

  //   startAxiles.forEach(ax => queue.push({ axile: ax, path: [ax.name] }));

  //   let finalPath = [];

  //   while (queue.length > 0) {
  //     const { axile: current, path: currentPath } = queue.shift();

  //     // If current axile connects to the target section
  //     if (targetAxiles.some(t => t.name === current.name)) {
  //       finalPath = currentPath;
  //       break;
  //     }

  //     for (let nextName of current.next) {
  //       const nextAxile = axile.find(a => a.name === nextName);

  //       // Only avoid cycles in current path
  //       if (nextAxile && !currentPath.includes(nextAxile.name)) {
  //         queue.push({
  //           axile: nextAxile,
  //           path: [...currentPath, nextAxile.name],
  //         });
  //         parent[nextAxile.name] = current.name;
  //       }
  //     }
  //   }

  //   if (!finalPath.length) return [];

  //   // Reconstruct full path from axile names
  //   const axilePath = finalPath.map(name => axile.find(a => a.name === name)).filter(Boolean);

  //   const fullPath = [[fromLocator.x, fromLocator.y]];
  //   axilePath.forEach(a => fullPath.push([a.x, a.y]));
  //   fullPath.push([toLocator.x, toLocator.y]);

  //   const segments = [];
  //   for (let i = 0; i < fullPath.length - 1; i++) {
  //     segments.push({ points: [...fullPath[i], ...fullPath[i + 1]] });
  //   }

  //   return segments;
  // }

  function getPathSegmentsBetweenSections(sectionFrom, sectionTo, axile, locators) {
    const fromLocator = locators.find(p => p.name === sectionFrom);
    const toLocator = locators.find(p => p.name === sectionTo);
    if (!fromLocator || !toLocator) return [];

    // ✅ Check if sections are close enough to connect directly
    // const dx = Math.abs(fromLocator.x - toLocator.x);
    // const dy = Math.abs(fromLocator.y - toLocator.y);
    // const distanceThreshold = 50; // Adjust as needed

    // if (dx <= distanceThreshold && dy <= distanceThreshold) {
    //   return [{
    //     points: [fromLocator.x, fromLocator.y, toLocator.x, toLocator.y]
    //   }];
    // }

    const startAxiles = axile.filter(a => a.next.includes(sectionFrom));
    const targetAxiles = axile.filter(a => a.next.includes(sectionTo));

    const queue = [];
    const visited = new Set();

    startAxiles.forEach(ax => queue.push({ axile: ax, path: [ax.name] }));

    while (queue.length > 0) {
      const { axile: current, path: currentPath } = queue.shift();

      if (targetAxiles.some(t => t.name === current.name)) {
        const axilePath = currentPath.map(name => axile.find(a => a.name === name)).filter(Boolean);

        const fullPath = [[fromLocator.x, fromLocator.y]];
        axilePath.forEach(a => fullPath.push([a.x, a.y]));
        fullPath.push([toLocator.x, toLocator.y]);

        const segments = [];
        for (let i = 0; i < fullPath.length - 1; i++) {
          segments.push({ points: [...fullPath[i], ...fullPath[i + 1]] });
        }

        return segments;
      }

      for (let nextName of current.next) {
        const nextAxile = axile.find(a => a.name === nextName);

        if (nextAxile && !currentPath.includes(nextAxile.name)) {
          queue.push({
            axile: nextAxile,
            path: [...currentPath, nextAxile.name],
          });
          visited.add(nextAxile.name);
        }
      }
    }

    return [];
  }


  const buildAllRouteSegments = () => {
    const allSegments = [];

    for (let i = 0; i < selectedSection.length - 1; i++) {
      const from = selectedSection[i];
      const to = selectedSection[i + 1];

      const segs = getPathSegmentsBetweenSections(from, to, axile, locators);
      allSegments.push(...segs);
    }

    return allSegments;
  };

  const pathSegments = buildAllRouteSegments();

  return (
    <div className='w-[85%] border-2 h-full rounded-2xl p-1 bg-gray-100'>
      <Stage width={1190} height={540}>

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
          {locators.map((p, i) => (
            <Circle key={i} x={p.x} y={p.y} radius={3} fill="red" />
          ))}

          {axile.map((p, i) => (
            <Circle key={i} x={p.x} y={p.y} radius={3} fill="blue" />
          ))}
        </Layer>

        <Layer>
          {pathSegments.map((seg, i) => (
            <Line
              key={i}
              points={seg.points}
              stroke="black"
              strokeWidth={2}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>

      </Stage>
    </div>
  );
};

export default StoreMap;
