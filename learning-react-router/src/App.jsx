import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans, { loader as vansLoader } from "./components/Vans";
import Details from "./components/vanDetail";
import Layout from "./components/Layout";
import Dashboard from "./components/host/Dashboard";
import Reviews from "./components/host/Reviews";
import Income from "./components/host/Income";
import HostLayout from "./components/HostLayout";
import HostVans from "./components/host/HostVan";
import HostVanDetail from "./components/host/hostVanDetail";
import HostVanInfo from "./components/host/hostVaninfo";
import HostVanPricing from "./components/host/hostVanpricing";
import HostVanPhotos from "./components/host/hostvanphotos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} loader={vansLoader} />
      <Route path="/vans/:id" element={<Details />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
      </Route>
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
