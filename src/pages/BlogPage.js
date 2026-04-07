import React from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./BlogPage.scss";
import { ARTICLES } from "./blog_articles";

export const BlogPage = () => {
  return (
    <div id="blog-page">
      <div className="content">
        <Header to="/#/" label="Home" />
        <div className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <div className="accent-rule" />
        </div>
        <div className="article-list">
          {ARTICLES.map((a) => (
            <div className="article" key={a.key}>
              <span className="article-date">{a.publishedDate}</span>
              <h2 className="article-title">
                <a href={`/#/blog/${a.key}`}>{a.title}</a>
              </h2>
              <p className="article-description">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Copyright />
    </div>
  );
};
