import "./App.css";
import Theme from "./theme/Theme";
import { ThemeStore } from "./contexts/ThemeStore";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UnhideButton from "./components/UnhideBar";

function App() {
	return (
		<ThemeStore>
			<Theme>
				<div className="App">
					<Header />
					<div></div>
					<SideBar />
					<Dashboard />
					<UnhideButton />
				</div>
			</Theme>
		</ThemeStore>
	);
}

export default App;
