// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import fetchImages from '../Redux/ImagesSlice'
// import Loader from '../Component/Loader'

// const PhotoComponent = ({category}) => {
//   const dispatch = useDispatch()
//   const {images, loading, error} = useSelector((state) => state.photos);

//   useEffect(() => {
//     dispatch(fetchImages(category));
//   }, [category, dispatch]);

//   if (loading) {
//     return <Loader/>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!Array.isArray(images) || images.length === 0) {
//     return <p>No images found or data is not an array.</p>;
//   }

//   return (
//     <div className="image-gallery">
//     {images.map((image) => {
//       const { farm, server, id, secret, title } = image;
//       const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
//       return (
//         <img
//           src={url}
//           alt={title}
//           key={id}
//           className="image-item"
//         />
//       );
//     })}
//   </div>
// );
// };

// export default PhotoComponent

// // components/PhotoComponent.js
// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchPhotos } from '../Redux/ImagesSlice';

// // const PhotoComponent = ({ query }) => {
// //   const dispatch = useDispatch();
// //   const { images, loading, error } = useSelector((state) => state.photos);

// //   useEffect(() => {
// //     dispatch(fetchPhotos(query));
// //   }, [dispatch, query]);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (error) {
// //     return <p>Error: {error}</p>;
// //   }

// //   return (
// //     <div>
// //       {images.map((image) => (
// //         <img
// //           key={image.id}
// //           src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
// //           alt={image.title}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default PhotoComponent;

// src/components/ImageGallery.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../Redux/ImagesSlice';
import Loader from './Loader'; // Optional loader component
import Gallery from '../Component/Gallery';
import '../Component/CSS/header.css'

const ImageGallery = ({ category }) => {
  const dispatch = useDispatch();
  const { loading, error, images } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages(category));
  }, [category, dispatch]);

  if (loading) {
    return <Loader />; // Show loader while images are being fetched
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // return <Gallery data={images} />; // Gallery component to display images
};

export default ImageGallery;
