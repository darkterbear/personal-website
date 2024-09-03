import React, { useEffect, useState } from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./PhotosPage.scss";

import "react-image-lightbox/style.css";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";

const BUCKET_NAME = "terrance-files";
const GALLERIES = [
  {
    title: "aug 2024: yosemite half dome",
    s3Prefix: "photography/yosemite_half_dome",
  },
  {
    title: "jul 2024: iceland",
    s3Prefix: "photography/iceland_2",
  },
];

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

const fetchImagesForGallery = async (galleryBasePath) => {
  const allImageURLs = new Set(await fetchS3Objects(galleryBasePath));
  const thumbnailURLs = new Set(
    await fetchS3Objects(galleryBasePath + "/thumbnails")
  );
  const originalURLs = new Set(
    [...allImageURLs].filter((u) => !thumbnailURLs.has(u))
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
  const [image, setImage] = useState();
  const handleClick = (_, item) => {
    setImage(item);
  };

  const [galleryImages, setGalleryImages] = useState({});

  useEffect(() => {
    (async () => {
      const newGalleryImages = {};
      for (const g of GALLERIES) {
        newGalleryImages[g.s3Prefix] = await fetchImagesForGallery(g.s3Prefix);
      }
      console.log(newGalleryImages);
      setGalleryImages(newGalleryImages);
    })();
  }, []);

  return (
    <div id="photos-page">
      {/* Top Splash */}
      <div id="frame-1">
        <Header />
      </div>

      <div class="content">
        <div class="desktop-content">
          {GALLERIES.map((g) => (
            <>
              <h1 class="title">{g.title}</h1>
              <Gallery
                rowHeight={360}
                margin={4}
                images={galleryImages[g.s3Prefix]}
                onClick={handleClick}
                enableImageSelection={false}
              />
            </>
          ))}
        </div>
        <div class="mobile-content">
          {GALLERIES.map((g) => (
            <>
              <h1 class="title">{g.title}</h1>
              <div class="single-col-gallery">
                {galleryImages[g.s3Prefix]?.map((i) => {
                  return <img src={i.src} onClick={() => handleClick(-1, i)} />;
                })}
              </div>
            </>
          ))}
        </div>
        {!!image && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={image.original}
            onCloseRequest={() => setImage(null)}
          />
        )}
      </div>
      <Copyright />
    </div>
  );
};
