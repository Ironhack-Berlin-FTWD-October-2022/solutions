import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Beers from "./pages/Beers";
import Navbar from "./pages/components/Navbar";
import Homepage from "./pages/Homepage";
import NewBeer from "./pages/NewBeer";
import Random from "./pages/Random";
import SingleBeer from "./pages/SingleBeer";

function App() {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location.pathname, showNav]);
  return (
    <div className="App">
      <nav>{showNav && <Navbar />}</nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random" element={<Random />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  ); //
}

export default App;
