import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from './music'
import Contact from './contact'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/contact' element={<Contact/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes