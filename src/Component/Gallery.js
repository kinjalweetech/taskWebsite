import React from "react";
import NoImages from "../Component/NoImageFound";
import Image from "../Component/Images"; // Assuming you have an Image component for each image
import "../Component/CSS/header.css";

const Gallery = ({ data, searching }) => {
  let images;

  if (data.length > 0) {
    images = data.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      // return <Image/>
      return <Image key={id} url={url} title={title} />;
      // return (
      //   <div key={id} className="image-container">
      //   <h3 className="image-title">{title}</h3> {/* Display the title above the image */}
      //   <Image url={url} title={title} />
      // </div>
      // )
    });
  } else {
    images = <NoImages />; // Return NoImages component if no images are found
  }

  return (
    <div className="gallery-container">
      <h2>{searching} images </h2> {/* Display the search term as the title */}
      <ul className="image-list">{images}</ul>
    </div>
  );
};

export default Gallery;
