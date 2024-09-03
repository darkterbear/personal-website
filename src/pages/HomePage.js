import React from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div id="home-page">
      {/* Frame 1 */}
      <div id="frame-1">
        <Header />
        {/* Splash */}
        <div id="splash">
          <img src="https://files.terranceli.com/assets/portrait/bear-square512.png" />
          <div id="splash-content">
            <div>
              <h1>hey there</h1>
            </div>
            <div>
              <h2>I design and build software</h2>
            </div>
          </div>
        </div>
        {/* Down Indicator */}
        <i class="material-icons">keyboard_arrow_down</i>
        {/* Links */}
        <div id="links">
          <a
            href="https://www.linkedin.com/in/terrance-li/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>linkedin</h3>
          </a>
          <a
            href="https://github.com/darkterbear"
            target="_blank"
            rel="noreferrer"
          >
            <h3>github</h3>
          </a>
          <a
            href="https://files.terranceli.com/ssh.txt"
            target="_blank"
            rel="noreferrer"
          >
            <h3>ssh</h3>
          </a>
          <a href="/#/blog" target="_top">
            <h3>blog</h3>
          </a>
          <a href="/#/photos" target="_top">
            <h3>photography</h3>
          </a>
        </div>
      </div>

      {/* Frame 2 */}
      <div id="frame-2">
        {/* About Me */}
        <div class="section">
          <div class="section-img">
            <img src="https://files.terranceli.com/assets/iceland.jpg" />
          </div>
          <div class="section-content">
            <p>
              Thanks for stopping by! I'm currently building large-scale data
              infra and worfklows for autonomy at{" "}
              <a href="https://applied.co/">Applied Intuition</a>. <br />
              <br />
              I've also worked with
              <ul>
                <li>
                  <a href="https://scale.com/">Scale AI</a> on mobile-friendly
                  data-labeling
                </li>
                <li>
                  <a href="https://www.salesforce.com/">Salesforce</a> on
                  frontend accessibility
                </li>
              </ul>
              <br />
              Feel free to check out my <a href="/#/blog">blog</a>, my{" "}
              <a href="/#/photos">photos</a> or reach out to me at
              me@terranceli.com :)
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};
