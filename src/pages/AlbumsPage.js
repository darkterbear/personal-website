import React from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./AlbumsPage.scss";

export const BUCKET_NAME = "terrance-files";
export const ALBUMS = [
  {
    title: "Banff",
    subtitle: "Aug 2025",
    s3Prefix: "banff",
  },
  {
    title: "Glacier",
    subtitle: "Aug 2025",
    s3Prefix: "glacier",
  },
  {
    title: "Norway",
    subtitle: "Aug 2025",
    s3Prefix: "norway",
  },
  {
    title: "Desolation Wilderness: Lake Aloha",
    subtitle: "Jul 2025",
    s3Prefix: "desolation_wilderness_lake_aloha",
  },
  {
    title: "Yosemite: Pohono Trail",
    subtitle: "Jun 2025",
    s3Prefix: "yosemite_pohono_trail",
  },
  {
    title: "Lost Coast Trail",
    subtitle: "May 2025",
    s3Prefix: "lost_coast_trail",
  },
  {
    title: "Trans-Catalina Trail",
    subtitle: "Feb 2025",
    s3Prefix: "trans_catalina_trail",
  },
  {
    title: "Pinnacles",
    subtitle: "Dec 2024",
    s3Prefix: "pinnacles",
  },
  {
    title: "Point Reyes 2",
    subtitle: "Nov 2024",
    s3Prefix: "point_reyes_2",
  },
  {
    title: "Desolation Wilderness: Island and Twin Lakes",
    subtitle: "Oct 2024",
    s3Prefix: "desolation_wilderness_island_and_twin_lakes",
  },
  {
    title: "Yosemite: Half Dome",
    subtitle: "Aug 2024",
    s3Prefix: "yosemite_half_dome",
  },
  {
    title: "Iceland 2",
    subtitle: "Jul 2024",
    s3Prefix: "iceland_2",
  },
  {
    title: "Point Reyes 1",
    subtitle: "Nov 2023",
    s3Prefix: "point_reyes",
  },
  {
    title: "Russian Ridge",
    subtitle: "Sep 2023",
    s3Prefix: "russian_ridge",
  },
  {
    title: "Iceland 1",
    subtitle: "Jun 2023",
    s3Prefix: "iceland_1",
  },
  {
    title: "Tyresta",
    subtitle: "May 2023",
    s3Prefix: "tyresta",
  },
  {
    title: "Yosemite: Fire Falls",
    subtitle: "Feb 2023",
    s3Prefix: "yosemite_fire_falls",
  },
  {
    title: "Grand Canyon, Zion, Bryce Canyon",
    subtitle: "Jun 2022",
    s3Prefix: "grand_canyon_zion_bryce_canyon",
  },
];

export const AlbumsPage = () => {
  return (
    <div id="albums-page">
      <div className="inner">
        <Header to="/#/" label="Home" />
        <div className="page-header">
          <h1 className="page-title">Photography</h1>
          <div className="accent-rule" />
        </div>
        <div className="content">
          {ALBUMS.map((album) => (
            <Album key={album.s3Prefix} {...album} />
          ))}
        </div>
        <Copyright white />
      </div>
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
