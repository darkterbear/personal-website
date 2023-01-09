import React from "react";
import Copyright from "../components/Copyright";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div id="home-page">
      {/* Frame 1 */}
      <div id="frame-1">
        <h3 id="header">terrance li</h3>
        {/* Splash */}
        <div id="splash">
          <img src="https://files.terranceli.com/assets/portrait/bear-square512.png" />
          <div id="splash-content">
            <div>
              <h1>hey there!</h1>
            </div>
            <div>
              <h2>I design and build software :)</h2>
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
          <a href="mailto:tyli@berkeley.edu" target="_blank" rel="noreferrer">
            <h3>email</h3>
          </a>
          <a
            href="https://files.terranceli.com/ssh.txt"
            target="_blank"
            rel="noreferrer"
          >
            <h3>ssh</h3>
          </a>
          <a href="/blog" target="_top">
            <h3>blog</h3>
          </a>
        </div>
      </div>

      {/* Frame 2 */}
      <div id="frame-2">
        {/* About Me */}
        <div class="section">
          <div class="section-img"></div>
          <div class="section-content">
            <h1>about me</h1>
            <p>
              Thanks for stopping by! I studied Electrical Engineering &
              Computer Science at UC Berkeley, and I'm currently a software
              engineer at Applied Intuition, a startup developing simulation and
              testing tools for autonomous vehicles. <br />
              <br />
            </p>
          </div>
        </div>
        {/* Experience */}
        <div class="section">
          <div class="section-img">
            <img src="https://files.terranceli.com/assets/calhacks-1.png" />
          </div>
          <div class="section-content">
            <h1>experience</h1>
            <p>
              During the summer of 2021, I was a SWE intern at{" "}
              <a href="https://scale.com/" target="_blank" rel="noreferrer">
                Scale AI
              </a>
              's Content and Language team, building mobile functionality into
              parts of their tasking platform. For the summer prior, I interned
              at{" "}
              <a
                href="https://www.salesforce.com/products/community-cloud/overview/"
                target="blank"
              >
                Salesforce
              </a>{" "}
              building{" "}
              <a
                href="/blog/my-futureforce-internship-experience/"
                target="blank"
              >
                accessibility features
              </a>{" "}
              for their website builder platform.
              <br />
              <br />
              At Berkeley, I joined{" "}
              <a
                href="https://codebase.berkeley.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Codebase
              </a>{" "}
              to work on software projects with tech companies, and organized
              the world's largest collegiate hackathon as a{" "}
              <a href="https://calhacks.io" target="_blank" rel="noreferrer">
                Cal Hacks
              </a>{" "}
              director. I also assisted with research on transactionally-aware
              database caching under Audrey Cheng and Professor Natacha Crooks
              at{" "}
              <a
                target="_blank"
                href="https://rise.cs.berkeley.edu/"
                rel="noreferrer"
              >
                RISELab
              </a>
              .
            </p>
          </div>
        </div>
        {/* Projects */}
        <div class="section">
          <div class="section-img">
            <img src="https://files.terranceli.com/blog/building-a-drone/assembled-drone.jpg" />
          </div>
          <div class="section-content">
            <h1>projects</h1>
            <p>
              Apart from my work in internships and clubs, I love working on
              side-projects! Here's some stuff I've built in the past.
              <br />
              <ul>
                <li>
                  Various card games like{" "}
                  <a
                    href="https://hearts.terranceli.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hearts
                  </a>
                  ,{" "}
                  <a
                    href="https://yikes.terranceli.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yikes
                  </a>{" "}
                  (inspired by Red Flags)
                </li>
                <li>
                  Traditional multiplayer{" "}
                  <a
                    href="https://mahjong.terranceli.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mahjong
                  </a>
                </li>
                <li>
                  A 3D-printed custom{" "}
                  <a href="blog/building-a-drone/" target="_blank">
                    drone
                  </a>
                </li>
                <li>
                  This website and{" "}
                  <a href="/blog/" target="_blank">
                    blog
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};
