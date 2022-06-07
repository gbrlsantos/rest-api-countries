import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home';
import CountryDetails from './CountryDetails';

const Pages = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/country/:id" element={<CountryDetails />} />
            </ Routes>
        </BrowserRouter>
    );
};
export default Pages;