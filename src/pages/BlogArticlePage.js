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
      <Header />
      <div class="article-page">
        <div class="content">
          <h1>{article.title}</h1>
          <span>Published {article.publishedDate}</span>

          {article.updatedDate && (
            <>
              <br />
              <span>Last updated {article.updatedDate}</span>
            </>
          )}
          <p class="description">{article.description}</p>
          {article.content}
        </div>
      </div>
      <Copyright />
    </div>
  );
};
