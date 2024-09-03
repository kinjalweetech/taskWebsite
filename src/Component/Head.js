import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../Redux/SearchSlice";
import "../Component/CSS/header.css"; // Assuming you have a separate CSS file for styling

const Head = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <h1 className="header__title">Snap Shot</h1>
      <div className="header__search-container">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          className="header__search-bar"
          placeholder="Search..."
        />
        {search && (
          <button className="search-btn">
            {/* <span className="header__search-icon"> */}
              <i className="fa fa-search" aria-hidden="true"></i>
            {/* </span> */}
          </button>
        )}
      </div>
      <nav className="header__nav">
        <button className="nav-btn">Mountain</button>
        <button className="nav-btn">Bird</button>
        <button className="nav-btn">Food</button>
        <button className="nav-btn">Beach</button>
      </nav>
    
    </>
  );
};

export default Head;


// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchImages } from "../redux/slices/ImageSlice";
// import "../Component/CSS/header.css";

// const Head = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const dispatch = useDispatch();
//   const images = useSelector((state) => state.images.images);
//   const status = useSelector((state) => state.images.status);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     dispatch(fetchImages(category));
//   };

//   return (
//     <>
//       <h1 className="header__title">Snap Shot</h1>
//       <div className="header__search-container">
//         <input
//           type="text"
//           className="header__search-bar"
//           placeholder="Search..."
//         />
//         <button className="search-btn">
//           <i className="fa fa-search" aria-hidden="true"></i>
//         </button>
//       </div>
//       <nav className="header__nav">
//         <button className="nav-btn" onClick={() => handleCategoryClick('Mountain')}>Mountain</button>
//         <button className="nav-btn" onClick={() => handleCategoryClick('Bird')}>Bird</button>
//         <button className="nav-btn" onClick={() => handleCategoryClick('Food')}>Food</button>
//         <button className="nav-btn" onClick={() => handleCategoryClick('Beach')}>Beach</button>
//       </nav>

//       {selectedCategory && (
//         <div className="image-grid">
//           {status === 'loading' && <p>Loading...</p>}
//           {status === 'succeeded' && images[selectedCategory] && images[selectedCategory].map((image) => (
//             <img key={image.id} src={image.url} alt={image.title} className="image-item" />
//           ))}
//           {status === 'failed' && <p>Failed to load images</p>}
//         </div>
//       )}
//     </>
//   );
// };

// export default Head;
