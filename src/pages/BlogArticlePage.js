import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./BlogPage.scss";
import BasicUbuntuServerSecurityContent from "./blog_articles/basic_ubuntu_server_security";
import BuildingADroneContent from "./blog_articles/building_a_drone";
import BuildingMahjongContent from "./blog_articles/building_mahjong";
import UbuntuServerSetupWithDOContent from "./blog_articles/ubuntu_server_setup_with_do";
import MyFutureforceInternshipExperienceContent from "./blog_articles/my_futureforce_internship_experience";

export const BlogArticlePage = () => {
  const { article } = useParams();

  let articleObject;
  switch (article) {
    case "building-mahjong":
      articleObject = BuildingMahjongContent;
      break;
    case "building-a-drone":
      articleObject = BuildingADroneContent;
      break;
    case "basic-ubuntu-server-security":
      articleObject = BasicUbuntuServerSecurityContent;
      break;
    case "ubuntu-server-setup-with-do":
      articleObject = UbuntuServerSetupWithDOContent;
      break;
    case "my-futureforce-internship-experience":
      articleObject = MyFutureforceInternshipExperienceContent;
      break;
    default:
      articleObject = <Navigate to={"/blog"} />;
      break;
  }

  return (
    <div id="blog-page">
      <a href="/">
        <h3 id="header">terrance li</h3>
      </a>
      <div class="article-page">
        <div class="content">
          <h1>{articleObject.title}</h1>
          <span>Published {articleObject.date}</span>
          <p class="description">{articleObject.description}</p>
          {articleObject.content}
        </div>
      </div>
      <p id="copyright">Copyright © Terrance Li 2022</p>
    </div>
  );
};
