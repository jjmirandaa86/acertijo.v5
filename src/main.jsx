import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import "@mantine/core/styles.css";
import App from "./App.jsx";

const theme = createTheme({
	colorScheme: "dark",
	fontFamily: "Verdana, sans-serif",
	fontFamilyMonospace: "Monaco, Courier, monospace",
	colors: {
		// Add your color
		white: [
			"#f5f5f5", //x0
			"#e7e7e7",
			"#cdcdcd",
			"#b2b2b2",
			"#9a9a9a",
			"#8b8b8b",
			"#848484",
			"#717171",
			"#656565",
			"#575757",
		], //0
		yellow: [
			"#fffae1",
			"#fff3cc",
			"#ffe69b",
			"#fed865",
			"#fecc39",
			"#fec51d",
			"#fec10a", //x6
			"#e2a900",
			"#c99600",
			"#ae8100",
		], //6
		darkBlue: [
			"#f2f6f8",
			"#e6e9ea",
			"#c7d1d6",
			"#a5b8c2",
			"#88a3b1",
			"#7696a7",
			"#6b8fa3",
			"#5a7c8e",
			"#4d6e80",
			"#3c6072", //x9
		], //9
		blue: [
			"#e7faff",
			"#d6eff9",
			"#addef0",
			"#80cbe8",
			"#5ebce0",
			"#49b2dc",
			"#3baedb",
			"#2b98c3",
			"#1a87af", //x8
			"#00759b",
		], //8
	},
	shadows: {
		md: "1px 1px 3px rgba(0, 0, 0, .25)",
		xl: "5px 5px 3px rgba(0, 0, 0, .25)",
	},
	lineHeights: {
		xs: "1.1",
		sm: "1.15",
		md: "1.25",
		lg: "1.35",
		xl: "1.45",
	},
	headings: {
		fontFamily: "Greycliff CF, sans-serif",
		sizes: {
			h1: { fontSize: "32px" },
			h2: { fontSize: "25px" },
			h3: { fontSize: "20px" },
			h4: { fontSize: "16px" },
			h5: { fontSize: "12px" },
			h6: { fontSize: "8px" },
		},
	},
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
			<App />
		</MantineProvider>
	</StrictMode>,
);
