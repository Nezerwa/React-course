import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import Details from "./components/vanDetail";
import Layout from "./components/layout";
import Dashboard from "./components/host/Dashboard";
import Reviews from "./components/host/Reviews";
import Income from "./components/host/Income";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Details />} />
          <Route path="host/dashboard" element={<Dashboard />} />
          <Route path="host/reviews" element={<Reviews />} />
          <Route path="host/Income" element={<Income />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
