import React, { useState, useEffect } from "react";
import NoImages from "../Component/NoImageFound";
import Image from "../Component/Images"; // Assuming you have an Image component
import Loader from "../Component/Loader";
import "../Component/CSS/header.css";

const Gallery = ({ data, searching }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="gallery-container">
      {loading ? (
        <Loader /> // Show loader while waiting
      ) : (
        <>
          <h2> {searching} images </h2>
          <ul className="image-list">
            {data.length > 0 ? (
              data.map((image) => {
                const { farm, server, id, secret, title } = image;
                const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                return <Image key={id} url={url} title={title} />;
              })
            ) : (
              <NoImages /> // Show no images found if no data
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Gallery;
