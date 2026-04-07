import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./BlogPage.scss";
import { getArticleByKey } from "./blog_articles/index";

export const BlogArticlePage = () => {
  const { article: key } = useParams();

  let article = getArticleByKey(key);

  if (!article) {
    return <Navigate to={"/blog"} />;
  }

  return (
    <div id="blog-page">
      <div className="content">
        <Header to="/#/blog" label="Blog" />
        <div className="blog-header">
          <span className="article-date">{article.publishedDate}</span>
          {article.updatedDate && (
            <span className="article-date updated">
              {" · "}Last updated {article.updatedDate}
            </span>
          )}
          <h1 className="blog-title">{article.title}</h1>
          <div className="accent-rule" />
        </div>
        <div className="article-page">
          {article.content}
        </div>
      </div>
      <Copyright />
    </div>
  );
};
