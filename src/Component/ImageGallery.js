// src/components/ImageGallery.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../Redux/ImagesSlice";
import "../Component/CSS/header.css";

const ImageGallery = ({ category }) => {
  const dispatch = useDispatch();
  const { error, images } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages(category));
  }, [category, dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }
};

export default ImageGallery;
