import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import '../Component/CSS/header.css';
import Loader from "./Loader";
import Gallery from "./Gallery";
import { fetchImages } from "../Redux/ImagesSlice";

const Container = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch, searchTerm]);

  return (
    <div className="photo-container">
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      {!loading && !error && images.length > 0 && <Gallery data={images} />}
      {!loading && !error && images.length === 0 && <p>No images found for "{searchTerm}"</p>}
    </div>
  );
};

export default Container;
