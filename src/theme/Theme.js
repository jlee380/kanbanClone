import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";

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

const GlobalStyle = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`;

const Theme = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={themes[theme]}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
