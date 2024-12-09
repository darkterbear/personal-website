import React from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./AlbumsPage.scss";

export const BUCKET_NAME = "terrance-files";
export const ALBUMS = [
  {
    title: "point reyes 2",
    subtible: "nov 2024",
    s3Prefix: "point_reyes_2",
  },
  {
    title: "desolation wilderness: island and twin lakes",
    subtitle: "oct 2024",
    s3Prefix: "desolation_wilderness_island_and_twin_lakes",
  },
  {
    title: "yosemite half dome",
    subtitle: "aug 2024",
    s3Prefix: "yosemite_half_dome",
  },
  {
    title: "iceland 2",
    subtitle: "jul 2024",
    s3Prefix: "iceland_2",
  },
  {
    title: "point reyes 1",
    subtitle: "nov 2023",
    s3Prefix: "point_reyes",
  },
  {
    title: "russian ridge",
    subtitle: "sep 2023",
    s3Prefix: "russian_ridge",
  },
  {
    title: "iceland 1",
    subtitle: "jun 2023",
    s3Prefix: "iceland_1",
  },
  {
    title: "tyresta",
    subtitle: "may 2023",
    s3Prefix: "tyresta",
  },
  {
    title: "yosemite fire falls",
    subtitle: "feb 2023",
    s3Prefix: "yosemite_fire_falls",
  },
  {
    title: "grand canyon, zion, bryce canyon",
    subtitle: "jun 2022",
    s3Prefix: "grand_canyon_zion_bryce_canyon",
  },
];

export const AlbumsPage = () => {
  return (
    <div id="albums-page">
      {/* Top Splash */}
      <div id="frame-1">
        <Header white />
      </div>

      <div class="content">
        {ALBUMS.map((album) => (
          <Album {...album} />
        ))}
      </div>
      <Copyright white />
    </div>
  );
};

const Album = (album) => {
  return (
    <div
      className="album"
      onClick={() => (window.location.href = `/#/photos/${album.s3Prefix}`)}
    >
      <img
        src={`https://${BUCKET_NAME}.s3.us-west-2.amazonaws.com/photography/${album.s3Prefix}/cover.jpg`}
      />
      <div className="album-title">
        <h2>{album.title}</h2>
        <h3>{album.subtitle}</h3>
      </div>
    </div>
  );
};
