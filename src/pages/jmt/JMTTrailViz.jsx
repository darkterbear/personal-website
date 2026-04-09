import React from "react";
import trailData from "./trailData.json";

const points = trailData.points;
const days = trailData.days;
const elevations = points.map((p) => p.ele);
const lats = points.map((p) => p.lat);
const lons = points.map((p) => p.lon);

const minEle = Math.min(...elevations);
const maxEle = Math.max(...elevations);
const minLat = Math.min(...lats);
const maxLat = Math.max(...lats);
const minLon = Math.min(...lons);
const maxLon = Math.max(...lons);
const totalMi = points[points.length - 1].mi;

// Compute SVG coordinates for each point
const computeEleCoords = (pts, width, height, padding = 4) => {
  return pts.map((p) => ({
    x: width - padding - (p.mi / totalMi) * (width - 2 * padding),
    y:
      height -
      padding -
      ((p.ele - minEle) / (maxEle - minEle)) * (height - 2 * padding),
  }));
};

const computeMapCoords = (pts, width, height, padding = 4) => {
  const lonRange = maxLon - minLon || 1;
  const latRange = maxLat - minLat || 1;
  const scale = Math.min(
    (width - 2 * padding) / lonRange,
    (height - 2 * padding) / latRange
  );
  const cx = (width - lonRange * scale) / 2;
  const cy = (height - latRange * scale) / 2;

  return pts.map((p) => ({
    x: cx + (p.lon - minLon) * scale,
    y: cy + (maxLat - p.lat) * scale,
  }));
};

const coordsToPath = (coords) =>
  coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x},${c.y}`).join(" ");

// Sum of Euclidean distances between consecutive points
const computePathLen = (coords) => {
  let len = 0;
  for (let i = 1; i < coords.length; i++) {
    const dx = coords[i].x - coords[i - 1].x;
    const dy = coords[i].y - coords[i - 1].y;
    len += Math.sqrt(dx * dx + dy * dy);
  }
  return len;
};

// Returns { completedFrac, currentStartFrac, currentEndFrac }
const sectionToFractions = (activeSection) => {
  if (activeSection === "intro" || activeSection === "day-0") {
    return { completedFrac: 0, currentStartFrac: 0, currentEndFrac: 0 };
  }
  if (activeSection === "aftermath") {
    return { completedFrac: 1, currentStartFrac: 1, currentEndFrac: 1 };
  }

  const dayNum = parseInt(activeSection.replace("day-", ""));
  const dayData = days.find((d) => d.day === dayNum);
  if (!dayData)
    return { completedFrac: 0, currentStartFrac: 0, currentEndFrac: 0 };

  return {
    completedFrac: dayData.startMi / totalMi,
    currentStartFrac: dayData.startMi / totalMi,
    currentEndFrac: dayData.endMi / totalMi,
  };
};

const TrailPath = ({ d, pathLen, startFrac, endFrac, stroke, pulse }) => {
  const visibleLen = pathLen * (endFrac - startFrac);

  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={`${visibleLen} ${pathLen}`}
      strokeDashoffset={-pathLen * startFrac}
      className={pulse ? "trail-pulse" : undefined}
      style={
        pulse
          ? undefined
          : {
              transition:
                "stroke-dashoffset 0.4s ease, stroke-dasharray 0.4s ease",
            }
      }
    />
  );
};

export const JMTTrailViz = ({
  activeSection = "intro",
  horizontal = false,
}) => {
  const eleWidth = horizontal ? 160 : 160;
  const eleHeight = horizontal ? 54 : 60;
  const mapWidth = horizontal ? 80 : 160;
  const mapHeight = horizontal ? 75 : 110;

  const eleCoords = computeEleCoords(points, eleWidth, eleHeight);
  const mapCoords = computeMapCoords(points, mapWidth, mapHeight);
  const elePath = coordsToPath(eleCoords);
  const mapPath = coordsToPath(mapCoords);
  const eleLen = computePathLen(eleCoords);
  const mapLen = computePathLen(mapCoords);

  const { completedFrac, currentStartFrac, currentEndFrac } =
    sectionToFractions(activeSection);

  return (
    <div className={`jmt-trail-viz${horizontal ? " horizontal" : ""}`}>
      <div className="viz-section">
        <svg
          width={eleWidth}
          height={eleHeight}
          viewBox={`0 0 ${eleWidth} ${eleHeight}`}
        >
          <path
            d={elePath}
            fill="none"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <TrailPath
            d={elePath}
            pathLen={eleLen}
            startFrac={0}
            endFrac={completedFrac}
            stroke="#527aff"
          />
          <TrailPath
            d={elePath}
            pathLen={eleLen}
            startFrac={currentStartFrac}
            endFrac={currentEndFrac}
            stroke="#527aff"
            pulse
          />
        </svg>
        {!horizontal && <span className="viz-label">Elevation</span>}
      </div>
      <div className="viz-section">
        <svg
          width={mapWidth}
          height={mapHeight}
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        >
          <path
            d={mapPath}
            fill="none"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <TrailPath
            d={mapPath}
            pathLen={mapLen}
            startFrac={0}
            endFrac={completedFrac}
            stroke="#527aff"
          />
          <TrailPath
            d={mapPath}
            pathLen={mapLen}
            startFrac={currentStartFrac}
            endFrac={currentEndFrac}
            stroke="#527aff"
            pulse
          />
        </svg>
        {!horizontal && <span className="viz-label">Route</span>}
      </div>
    </div>
  );
};
