import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "Components/Pages/Home/Home";
import { About } from "Components/Pages/About";
import { Work } from "Components/Pages/Work";
import {
  WorkAlumniHub,
  WorkFemi,
  WorkFudtraka,
  WorkLahdaa,
  WorkTeleSchool,
} from "Components/Pages/Works";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route
        path="about"
        element={<About />}
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route
        path="work"
        element={<Work />}
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/lahdaa"
        element={<WorkLahdaa />}
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/alumnihub"
        element={<WorkAlumniHub />}
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/teleschool"
        element={<WorkTeleSchool />}
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/fudtraka"
        element={<WorkFudtraka />}
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route
        path="work/femi"
        element={<WorkFemi />}
        errorElement={<h2>Can't find this page</h2>}
      />
    </>
  )
);

export default Router;
