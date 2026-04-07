import React from "react";
import Copyright from "../components/Copyright";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div id="home-page">
      <main id="home-layout">
        <div id="home-left">
          <h1 className="home-name">Terrance Li</h1>
          <div className="home-rule" />
          <p className="home-identity">
            Engineer by trade. Photographer, adventurer, and gamer at heart.
          </p>
          <p className="home-work">
            Special projects at{" "}
            <a
              href="https://applied.co/"
              target="_blank"
              rel="noreferrer"
              className="home-work-link"
            >
              Applied Intuition
            </a>
          </p>
          <nav className="home-links">
            <a
              href="https://github.com/darkterbear"
              target="_blank"
              rel="noreferrer"
              className="home-link"
            >
              GitHub →
            </a>
            <a href="/#/blog" className="home-link">
              Blog →
            </a>
            <a href="/#/photos" className="home-link">
              Photography →
            </a>
          </nav>
        </div>

        <div id="home-right">
          <img
            src="https://files.terranceli.com/assets/iceland.jpg"
            alt="Terrance Li"
            className="home-portrait"
          />
        </div>
      </main>

      <footer id="home-footer">
        <Copyright />
      </footer>
    </div>
  );
};
