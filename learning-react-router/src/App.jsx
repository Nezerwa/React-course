import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import Details from "./components/vanDetail";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans"></Link>
          </nav>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
