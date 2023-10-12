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
import Login, {loader as loginLoader} from "./components/host/Login";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="login" element={<Login />} loader={loginLoadergi}/>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="/vans/:id" element={<Details />} loader={vanDetail} />
      <Route path="host" 
      element={<HostLayout />}
       loader={async () => await requireAuth()}
       >
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={HostVanLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
