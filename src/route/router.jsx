import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Projects from "../components/Projects";
import ContactApi from "../components/ContactApi";
import Certificates from "../components/Certificate";
import ShowWork from "../components/Projects/ShowWork";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<ContactApi />} />
      <Route path="certificates" element={<Certificates />} />
      <Route
        path="projects/llamaremovals"
        element={<ShowWork project={"app.projects.list.project-1"} />}
      />
      <Route
        path="projects/learningwords"
        element={<ShowWork project={"app.projects.list.project-2"} />}
      />
      <Route
        path="projects/apillamaremovals"
        element={<ShowWork project={"app.projects.list.project-3"} />}
      />
      <Route
        path="projects/surveytesalia"
        element={<ShowWork project={"app.projects.list.project-4"} />}
      />
      <Route
        path="projects/playface"
        element={<ShowWork project={"app.projects.list.project-5"} />}
      />
      <Route
        path="projects/playface-api"
        element={<ShowWork project={"app.projects.list.project-6"} />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
