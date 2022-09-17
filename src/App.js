import Gallery from "./Pages/Gallery";

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Explode_img1 from "./Pages/Gallery/Components/explode_img1/Explode_img1";
import Explode_img2 from "./Pages/Gallery/Components/explode_img2/Explode_img2";
import Explode_img3 from "./Pages/Gallery/Components/explode_img3/Explode_img3";
import Explode_img4 from "./Pages/Gallery/Components/explode_img4/Explode_img4";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        
				<Route path="/gallery" element={<Gallery />} />
        
				<Route path="/explode_img1" element={<Explode_img1 />} />
        <Route path="/explode_img2" element={<Explode_img2 />} />
        <Route path="/explode_img3" element={<Explode_img3 />} />
        <Route path="/explode_img4" element={<Explode_img4 />} />
      </Routes>
    </Router>
  );
}

export default App;
