// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AppOutlet from '../Outlet/AppOutlet';
// import ImageGallery from '../ImageGallery';

// const Navigation = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppOutlet />}>
//           <Route path="mountain" element={<ImageGallery category="Mountain" />} />
//           <Route path="bird" element={<ImageGallery category="Bird" />} />
//           <Route path="food" element={<ImageGallery category="Food" />} />
//           <Route path="beach" element={<ImageGallery category="Beach" />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Navigation;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav className="main-nav">
//       <ul>
//         <li><NavLink to="/mountain">Mountain</NavLink></li>
//         <li><NavLink to="/beach">Beaches</NavLink></li>
//         <li><NavLink to="/bird">Birds</NavLink></li>
//         <li><NavLink to="/food">Food</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppOutlet from '../Outlet/AppOutlet';  // Ensure this path is correct
import ImageGallery from '../ImageGallery';  // Ensure this path is correct
import NotFound from '../NotFound';
import NoImages from '../NoImageFound';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppOutlet />}>
          <Route path="/mountain" element={<ImageGallery category="Mountain" />} />
          <Route path="/bird" element={<ImageGallery category="Bird" />} />
          <Route path="/food" element={<ImageGallery category="Food" />} />
          <Route path="/beach" element={<ImageGallery category="Beach" />} />
          <Route path='/search/*' element={<ImageGallery category="search"/>}/>
          <Route path="/no-image-found" element={<NoImages/>} />

        </Route>
        <Route path='/notFound' element={<NotFound/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
