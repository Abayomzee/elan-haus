import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import React, { Suspense } from "react";
import { Loader } from "Components/Atoms/Loader";

const Home = React.lazy(() => import("Components/Pages/Home/Home"));
const About = React.lazy(() => import("Components/Pages/About/About"));
const Work = React.lazy(() => import("Components/Pages/Work/Work"));
const WorkAlumniHub = React.lazy(
  () => import("Components/Pages/Works/WorkAlumniHub")
);
const WorkFemi = React.lazy(() => import("Components/Pages/Works/WorkFemi"));
const WorkFudtraka = React.lazy(
  () => import("Components/Pages/Works/WorkFudtraka")
);
const WorkLahdaa = React.lazy(
  () => import("Components/Pages/Works/WorkLahdaa")
);
const WorkTeleSchool = React.lazy(
  () => import("Components/Pages/Works/WorkTeleSchool")
);
const Services = React.lazy(() => import("Components/Pages/Services/Services"));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route
        path="work"
        element={
          <Suspense fallback={<Loader />}>
            <Work />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/lahdaa"
        element={
          <Suspense fallback={<Loader />}>
            <WorkLahdaa />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/alumnihub"
        element={
          <Suspense fallback={<Loader />}>
            <WorkAlumniHub />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/teleschool"
        element={
          <Suspense fallback={<Loader />}>
            <WorkTeleSchool />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route
        path="work/fudtraka"
        element={
          <Suspense fallback={<Loader />}>
            <WorkFudtraka />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route
        path="work/femi"
        element={
          <Suspense fallback={<Loader />}>
            <WorkFemi />
          </Suspense>
        }
        errorElement={<h2>Can't find this page</h2>}
      />
    </>
  )
);

export default Router;
