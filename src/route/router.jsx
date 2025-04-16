import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ShowWork from "../components/Projects/ShowWork";
import NotFound from "../components/NotFound";
import data from "../json/dataProjects.json";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<Projects />} />
			<Route path="contact" element={<Contact />} />
			<Route
				path="projects/llamaremovals"
				element={<ShowWork data={data.llamaRemovals} />}
			/>
			<Route
				path="projects/learningwords"
				element={<ShowWork data={data.learningWords} />}
			/>
			<Route
				path="projects/apillamaremovals"
				element={<ShowWork data={data.apillamaRemovals} />}
			/>
			<Route
				path="projects/surveytesalia"
				element={<ShowWork data={data.surveyTesalia} />}
			/>
			<Route path="*" element={<NotFound />} />
		</Route>,
	),
);
