import React from "react";
import { useParams, Navigate } from "react-router-dom";
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
      <a href="/">
        <h3 id="header">terrance li</h3>
      </a>
      <div class="article-page">
        <div class="content">
          <h1>{article.title}</h1>
          {/* TODO: check for published vs updated dates */}
          <span>Published {article.date}</span>
          <p class="description">{article.description}</p>
          {article.content}
        </div>
      </div>
      <p id="copyright">Copyright © Terrance Li 2022</p>
    </div>
  );
};
