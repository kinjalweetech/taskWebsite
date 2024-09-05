// // src/components/Gallery.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import NoImages from './NoImageFound';
// // import NoImages from '../Component/NoImageFound';
// import Image from '../Component/Images';

// const Gallery = () => {
//   // Use `useSelector` to get images and error from the Redux store
//   const { images, error } = useSelector((state) => state.images);

//   let content;
  
//   if (error) {
//     // If there's an error, display it
//     content = <p>Error: {error}</p>;
//   } else if (images.length === 0) {
//     // If no images, show NoImages component
//     content = <NoImages/>;
//   } else {
//     // If images are available, map them to Image components
//     content = images.map(image => {
//       const { farm, server, id, secret, title } = image;
//       const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
//       return <Image url={url} key={id} alt={title} />;
//     });
//   }

//   return (
//     <div>
//       <ul>{content}</ul>
//     </div>
//   );
// };

// export default Gallery;

import React from 'react';
import NoImages from '../Component/NoImageFound';
import Image from '../Component/Images'; // Assuming you have an Image component for each image
import '../Component/CSS/header.css'

const Gallery = ({ data }) => {
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
    });
  } else {
    images = <NoImages />; // Return NoImages component if no images are found
  }

  return (
    <div className="gallery-container">
      <ul className="image-list">{images}</ul>
    </div>
  );
};

export default Gallery;
