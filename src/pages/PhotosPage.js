import React from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./PhotosPage.scss";
import { Gallery, Item } from 'react-photoswipe-gallery'

export const PhotosPage = () => {
  return (
    <div id="photos-page">
      {/* Top Splash */}
      <div id="frame-1">
        <Header />
      </div>

      <div class="content">
        <h1 class="title">yosemite</h1>
        <Gallery
      </div>
      <Copyright />
    </div>
  );
};
