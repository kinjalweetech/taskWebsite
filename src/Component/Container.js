import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Component/CSS/header.css";
import Loader from "./Loader";
import Gallery from "./Gallery";
import { fetchImages } from "../Redux/ImagesSlice";
import NoImages from "./NoImageFound";

const Container = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchImages(searchTerm)); // Fetch images based on the search term
    }
  }, [dispatch, searchTerm]);

  return (
    <div className="photo-container">
      {loading && <Loader />} {/* Display loader if still loading */}
      {error && <p>Error: {error}</p>} {/* Display error if any */}
      {!loading && !error && images.length > 0 && (
        <Gallery data={images} searching={searchTerm}/>
      )}{" "}
      {/* Show gallery */}
      {!loading && !error && images.length === 0 && (
        <p><NoImages/>{searchTerm}"</p>
      )}{" "}
      {/* Handle no images case */}
    </div>
  );
};

export default Container;
