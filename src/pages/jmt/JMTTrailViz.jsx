import React, { useRef, useEffect, useState } from "react";
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

const buildElevationPath = (pts, width, height, padding = 4) => {
  return pts
    .map((p, i) => {
      const x = width - padding - (p.mi / totalMi) * (width - 2 * padding);
      const y =
        height -
        padding -
        ((p.ele - minEle) / (maxEle - minEle)) * (height - 2 * padding);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
};

const buildMapPath = (pts, width, height, padding = 4) => {
  const lonRange = maxLon - minLon || 1;
  const latRange = maxLat - minLat || 1;
  const scale = Math.min(
    (width - 2 * padding) / lonRange,
    (height - 2 * padding) / latRange
  );
  const cx = (width - lonRange * scale) / 2;
  const cy = (height - latRange * scale) / 2;

  return pts
    .map((p, i) => {
      const x = cx + (p.lon - minLon) * scale;
      const y = cy + (maxLat - p.lat) * scale;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
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
  if (!dayData) return { completedFrac: 0, currentStartFrac: 0, currentEndFrac: 0 };

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
      style={pulse ? undefined : { transition: "stroke-dashoffset 0.4s ease, stroke-dasharray 0.4s ease" }}
    />
  );
};

export const JMTTrailViz = ({ activeSection = "intro" }) => {
  const eleWidth = 160;
  const eleHeight = 60;
  const mapWidth = 160;
  const mapHeight = 110;

  const elePath = buildElevationPath(points, eleWidth, eleHeight);
  const mapPath = buildMapPath(points, mapWidth, mapHeight);

  const eleRef = useRef(null);
  const mapRef = useRef(null);
  const [eleLen, setEleLen] = useState(9999);
  const [mapLen, setMapLen] = useState(9999);

  useEffect(() => {
    if (eleRef.current) setEleLen(eleRef.current.getTotalLength());
    if (mapRef.current) setMapLen(mapRef.current.getTotalLength());
  }, []);

  const { completedFrac, currentStartFrac, currentEndFrac } =
    sectionToFractions(activeSection);

  return (
    <div className="jmt-trail-viz">
      <div className="viz-section">
        <svg
          width={eleWidth}
          height={eleHeight}
          viewBox={`0 0 ${eleWidth} ${eleHeight}`}
        >
          {/* Future: full gray background */}
          <path
            d={elePath}
            fill="none"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Completed: solid blue */}
          <TrailPath
            d={elePath}
            pathLen={eleLen}
            startFrac={0}
            endFrac={completedFrac}
            stroke="#527aff"
          />
          {/* Current day: pulsing */}
          <TrailPath
            d={elePath}
            pathLen={eleLen}
            startFrac={currentStartFrac}
            endFrac={currentEndFrac}
            stroke="#527aff"
            pulse
          />
          {/* Hidden ref path for measuring length */}
          <path
            ref={eleRef}
            d={elePath}
            fill="none"
            stroke="none"
          />
        </svg>
        <span className="viz-label">Elevation</span>
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
          <path
            ref={mapRef}
            d={mapPath}
            fill="none"
            stroke="none"
          />
        </svg>
        <span className="viz-label">Route</span>
      </div>
    </div>
  );
};
