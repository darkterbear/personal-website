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

  const getArticleContent = () => {
    switch (article) {
      case "building-mahjong":
        return BuildingMahjongContent;
      case "building-a-drone":
        return BuildingADroneContent;
      case "basic-ubuntu-server-security":
        return BasicUbuntuServerSecurityContent;
      case "ubuntu-server-setup-with-do":
        return UbuntuServerSetupWithDOContent;
      case "my-futureforce-internship-experience":
        return MyFutureforceInternshipExperienceContent;
      default:
        return <Navigate to={"/blog"} />;
    }
  };

  return <div id="blog-page">{getArticleContent()}</div>;
};
