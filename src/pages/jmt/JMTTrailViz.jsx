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

const eleCoord = (p, width, height, padding = 4) => ({
  x: width - padding - (p.mi / totalMi) * (width - 2 * padding),
  y:
    height -
    padding -
    ((p.ele - minEle) / (maxEle - minEle)) * (height - 2 * padding),
});

const mapCoord = (p, width, height, padding = 4) => {
  const lonRange = maxLon - minLon || 1;
  const latRange = maxLat - minLat || 1;
  const scale = Math.min(
    (width - 2 * padding) / lonRange,
    (height - 2 * padding) / latRange
  );
  const cx = (width - lonRange * scale) / 2;
  const cy = (height - latRange * scale) / 2;
  return {
    x: cx + (p.lon - minLon) * scale,
    y: cy + (maxLat - p.lat) * scale,
  };
};

const toSvgPath = (coords) =>
  coords.length === 0
    ? ""
    : coords
        .map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`)
        .join(" ");

// Split points into three groups by mileage
const splitPoints = (startMi, endMi) => {
  const completed = [];
  const current = [];
  const future = [];

  for (const p of points) {
    if (p.mi < startMi) {
      completed.push(p);
    } else if (p.mi <= endMi) {
      // Ensure continuity: duplicate the boundary point
      if (current.length === 0 && completed.length > 0) {
        current.push(completed[completed.length - 1]);
      }
      current.push(p);
    } else {
      if (future.length === 0 && current.length > 0) {
        future.push(current[current.length - 1]);
      }
      future.push(p);
    }
  }

  // If no completed points but current starts after 0, add first point
  if (completed.length > 0 && current.length > 0) {
    // Ensure current starts where completed ends
  }
  if (current.length === 0 && completed.length > 0) {
    future.unshift(completed[completed.length - 1]);
  }

  return { completed, current, future };
};

const sectionToMiles = (activeSection) => {
  if (activeSection === "intro" || activeSection === "day-0") {
    return { startMi: 0, endMi: 0 };
  }
  if (activeSection === "aftermath") {
    return { startMi: totalMi, endMi: totalMi };
  }

  const dayNum = parseInt(activeSection.replace("day-", ""));
  const dayData = days.find((d) => d.day === dayNum);
  if (!dayData) return { startMi: 0, endMi: 0 };

  return { startMi: dayData.startMi, endMi: dayData.endMi };
};

export const JMTTrailViz = ({
  activeSection = "intro",
  horizontal = false,
}) => {
  const eleWidth = horizontal ? 160 : 160;
  const eleHeight = horizontal ? 54 : 60;
  const mapWidth = horizontal ? 80 : 160;
  const mapHeight = horizontal ? 75 : 110;

  const { startMi, endMi } = sectionToMiles(activeSection);
  const { completed, current, future } = splitPoints(startMi, endMi);

  const eleCompleted = toSvgPath(completed.map((p) => eleCoord(p, eleWidth, eleHeight)));
  const eleCurrent = toSvgPath(current.map((p) => eleCoord(p, eleWidth, eleHeight)));
  const eleFuture = toSvgPath(future.map((p) => eleCoord(p, eleWidth, eleHeight)));

  const mapCompleted = toSvgPath(completed.map((p) => mapCoord(p, mapWidth, mapHeight)));
  const mapCurrent = toSvgPath(current.map((p) => mapCoord(p, mapWidth, mapHeight)));
  const mapFuture = toSvgPath(future.map((p) => mapCoord(p, mapWidth, mapHeight)));

  const pathProps = {
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <div className={`jmt-trail-viz${horizontal ? " horizontal" : ""}`}>
      <div className="viz-section">
        <svg
          width={eleWidth}
          height={eleHeight}
          viewBox={`0 0 ${eleWidth} ${eleHeight}`}
        >
          {eleFuture && <path d={eleFuture} stroke="rgba(0,0,0,0.15)" {...pathProps} />}
          {eleCompleted && <path d={eleCompleted} stroke="#527aff" {...pathProps} />}
          {eleCurrent && <path d={eleCurrent} stroke="#527aff" className="trail-pulse" {...pathProps} />}
        </svg>
        {!horizontal && <span className="viz-label">Elevation</span>}
      </div>
      <div className="viz-section">
        <svg
          width={mapWidth}
          height={mapHeight}
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        >
          {mapFuture && <path d={mapFuture} stroke="rgba(0,0,0,0.15)" {...pathProps} />}
          {mapCompleted && <path d={mapCompleted} stroke="#527aff" {...pathProps} />}
          {mapCurrent && <path d={mapCurrent} stroke="#527aff" className="trail-pulse" {...pathProps} />}
        </svg>
        {!horizontal && <span className="viz-label">Route</span>}
      </div>
    </div>
  );
};
