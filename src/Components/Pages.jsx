import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home';
import Country from './Country';

const Pages = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/country" element={<Country />} />
            </ Routes>
        </BrowserRouter>
    );
};
export default Pages;