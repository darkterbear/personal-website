import React from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./BlogPage.scss";
import { ARTICLES } from "./blog_articles";

export const BlogPage = () => {
  return (
    <div id="blog-page">
      {/* Top Splash */}
      <div id="frame-1">
        <Header white />
        <div class="content">
          <img
            id="illustration"
            src="https://files.terranceli.com/server.png"
          />
          <h1 class="title">terrance's blog</h1>
        </div>
      </div>

      <div class="content">
        {ARTICLES.map((a) => (
          <div class="article">
            <span>{a.publishedDate}</span>
            <h1>
              <a href={`/blog/${a.key}`}>{a.title}</a>
            </h1>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
      <Copyright />
    </div>
  );
};
