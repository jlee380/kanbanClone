import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";
import { GlobalStyles } from "./GlobalStyles";

const themes = {
	dark: {
		background: {
			grayDarkest: "#000112",
			grayDarker: "#20212C",
			grayDark: "#2B2C37",
			grayLightDark: "#3E3F4E",
		},
		title: "#6495ed",
		text: "white",
	},
	light: {
		background: "white",
		title: "#ff6347",
		text: "#000",
	},
};

const styles = {
	colors: {
		mainPurple: "#635FC7",
		hoverPurpls: "#A8A4FF",
		white: "#FFFFFF",
		balck: "#000112",
		lineColor: "#E4EBFA",
		red: "#EA5555",
		hoverRed: "#FF9898",
	},
	headings: {
		XL: {
			fontSize: "2.4rem",
			fontWeight: "bold",
			lineHeight: "3rem",
		},
		L: {
			fontSize: "1.8rem",
			fontWeight: "bold",
			lineHeight: "2.3rem",
		},
		M: {
			fontSize: "1.5rem",
			fontWeight: "bold",
			lineHeight: "1.9rem",
		},
		S: {
			fontSize: "1.2rem",
			fontWeight: "bold",
			lineHeight: "1.5rem",
		},
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
