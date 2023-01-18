import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";
import { GlobalStyles } from "./GlobalStyles";

const themes = {
	dark: {
		background: "#2B2C37",
		title: "#6495ed",
		text: "white",
	},
	light: {
		background: "white",
		title: "#ff6347",
		text: "#000",
	},
};

const Theme = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={themes[theme]}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
