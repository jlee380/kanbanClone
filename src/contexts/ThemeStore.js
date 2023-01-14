import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = (theme) => setTheme(theme);

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeStore, ThemeContext };
