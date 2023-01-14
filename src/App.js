import "./App.css";

import Theme from "./theme/Theme";
import { ThemeStore } from "./contexts/ThemeStore";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<ThemeStore>
			<Theme>
				<div className="App">
					<Header className="header" />
					<div></div>
					<SideBar className="sideBar" />
					<Dashboard className="dashboard" />
				</div>
			</Theme>
		</ThemeStore>
	);
}

export default App;
