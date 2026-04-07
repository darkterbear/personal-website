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
            Engineer by trade. Photographer, backpacker, adventurer &amp; gamer at heart.
          </p>
          <p className="home-work">
            Building data infra at{" "}
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
              href="https://www.linkedin.com/in/terrance-li/"
              target="_blank"
              rel="noreferrer"
              className="home-link"
            >
              linkedin →
            </a>
            <a
              href="https://github.com/darkterbear"
              target="_blank"
              rel="noreferrer"
              className="home-link"
            >
              github →
            </a>
            <a
              href="https://files.terranceli.com/ssh.txt"
              target="_blank"
              rel="noreferrer"
              className="home-link"
            >
              ssh →
            </a>
            <a href="/#/blog" className="home-link">
              blog →
            </a>
            <a href="/#/photos" className="home-link">
              photography →
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
