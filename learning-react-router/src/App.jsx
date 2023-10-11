import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans, { loader as vansLoader } from "./components/Vans";
import Details, { loader as vanDetail } from "./components/vanDetail";
import Layout from "./components/Layout";
import Dashboard from "./components/host/Dashboard";
import Reviews from "./components/host/Reviews";
import Income from "./components/host/Income";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as HostVanLoader } from "./components/host/HostVan";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./components/host/hostVanDetail";
import HostVanInfo from "./components/host/hostVaninfo";
import HostVanPricing from "./components/host/hostVanpricing";
import HostVanPhotos from "./components/host/hostvanphotos";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="/vans/:id" element={<Details />} loader={vanDetail} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} loader={HostVanLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
