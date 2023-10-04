import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
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
        <Route path="/vans" element={<Vans />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
