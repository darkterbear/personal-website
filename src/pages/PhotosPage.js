import React, { useEffect, useState } from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./PhotosPage.scss";

import "react-image-lightbox/style.css";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import { useParams } from "react-router-dom";
import { ALBUMS, BUCKET_NAME } from "./AlbumsPage";

const fetchS3Objects = async (prefix) => {
  // Construct the S3 URL for the listing request
  const s3Url = `https://${BUCKET_NAME}.s3.amazonaws.com/?prefix=${encodeURIComponent(
    prefix
  )}`;

  // Fetch the XML response from the S3 bucket
  const response = await fetch(s3Url);

  if (!response.ok) {
    throw new Error("Failed to fetch S3 objects");
  }

  // Parse the XML response
  const text = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "application/xml");

  // Extract object keys and construct URLs
  const keys = Array.from(xml.getElementsByTagName("Key")).map(
    (element) => element.textContent
  );
  const urls = keys.map(
    (key) => `https://${BUCKET_NAME}.s3.us-west-2.amazonaws.com/${key}`
  );

  return urls;
};

const fetchImagesForAlbum = async (albumS3Prefix) => {
  const allImageURLs = new Set(
    await fetchS3Objects(`photography/${albumS3Prefix}/`)
  );
  const thumbnailURLs = new Set(
    await fetchS3Objects(`photography/${albumS3Prefix}/thumbnails/`)
  );
  const originalURLs = new Set(
    [...allImageURLs].filter(
      (u) => !thumbnailURLs.has(u) && !u.includes("cover.jpg")
    )
  );

  const sortedThumbnails = [...thumbnailURLs].sort();
  const sortedOriginals = [...originalURLs].sort();

  return sortedOriginals
    .map((_, i) => ({
      src: sortedThumbnails[i],
      original: sortedOriginals[i],
    }))
    .filter((i) => !i.src.endsWith("/"));
};

export const PhotosPage = () => {
  const { album: albumS3Prefix } = useParams();
  const album = ALBUMS.filter((a) => a.s3Prefix === albumS3Prefix)[0];

  const [image, setImage] = useState();
  const handleClick = (_, item) => {
    setImage(item);
  };

  const [albumImages, setAlbumImages] = useState([]);

  useEffect(() => {
    (async () => {
      const a = await fetchImagesForAlbum(albumS3Prefix);
      console.log(albumS3Prefix, a);
      setAlbumImages(a);
    })();
  }, [albumS3Prefix]);

  return (
    <div id="photos-page">
      <Header to="/#/photos" label="albums" />
      <div className="page-header">
        <h1 className="album-title">{album.title}</h1>
        <p className="album-date">{album.subtitle}</p>
        <div className="accent-rule" />
      </div>

      <div className="content">
        <div className="desktop-content">
          <Gallery
            rowHeight={360}
            margin={8}
            images={albumImages}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </div>
        <div className="mobile-content">
          <div className="single-col-gallery">
            {albumImages.map((i) => {
              return <img key={i.src} src={i.src} onClick={() => handleClick(-1, i)} />;
            })}
          </div>
        </div>
        {!!image && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={image.original}
            onCloseRequest={() => setImage(null)}
          />
        )}
      </div>
      <Copyright white />
    </div>
  );
};
