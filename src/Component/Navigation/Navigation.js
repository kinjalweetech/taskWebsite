import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppOutlet from '../Outlet/AppOutlet'


function Navigation() {
  return (
   <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AppOutlet/>}>
        </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default Navigation
