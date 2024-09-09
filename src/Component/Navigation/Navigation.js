import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppOutlet from '../Outlet/AppOutlet'; 
import ImageGallery from '../ImageGallery';  
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
        {/*  */}
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
