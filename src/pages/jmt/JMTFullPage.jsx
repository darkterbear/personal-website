import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./JMTPage.scss";
import { INTRO_CONTENT, AFTERMATH_CONTENT } from "./JMTPage";
import { CONTENT as DAY_CONTENT } from "./JMTDayPage";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "day-0", label: "Day 0" },
  { id: "day-1", label: "Day 1" },
  { id: "day-2", label: "Day 2" },
  { id: "day-3", label: "Day 3" },
  { id: "day-4", label: "Day 4" },
  { id: "day-5", label: "Day 5" },
  { id: "day-6", label: "Day 6" },
  { id: "day-7", label: "Day 7" },
  { id: "day-8", label: "Day 8" },
  { id: "day-9", label: "Day 9" },
  { id: "day-10", label: "Day 10" },
  { id: "day-11", label: "Day 11" },
  { id: "day-12", label: "Day 12" },
  { id: "day-13", label: "Day 13" },
  { id: "day-14", label: "Day 14" },
  { id: "day-15", label: "Day 15" },
  { id: "aftermath", label: "Aftermath" },
];

export const JMTFullPage = () => {
  const { day } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("intro");
  const [tocExpanded, setTocExpanded] = useState(false);

  // Scroll to section based on URL (for old bookmarks)
  useEffect(() => {
    let targetId = null;
    if (location.pathname.includes("aftermath")) {
      targetId = "aftermath";
    } else if (day !== undefined) {
      targetId = `day-${day}`;
    }

    if (targetId) {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView();
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setTocExpanded(false);
  };

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div id="jmt-page">
        <nav className="jmt-toc-desktop">
          <div className="toc-track">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                className={`toc-tick${activeSection === id ? " active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                <span className="toc-dot" />
                <span className="toc-label">{label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className={`jmt-toc-mobile${tocExpanded ? " expanded" : ""}`}>
          <button
            className="toc-pill"
            onClick={() => setTocExpanded(!tocExpanded)}
          >
            {SECTIONS.find((s) => s.id === activeSection)?.label || "Intro"}
          </button>
          {tocExpanded && (
            <div className="toc-dropdown">
              {SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div id="jmt-content" className="content">
          <section id="intro">{INTRO_CONTENT}</section>
          {Array.from({ length: 16 }, (_, i) => (
            <section key={i} id={`day-${i}`}>
              {DAY_CONTENT[i]}
            </section>
          ))}
          <section id="aftermath">{AFTERMATH_CONTENT}</section>
        </div>
      </div>
    </>
  );
};
