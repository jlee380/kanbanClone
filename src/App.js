import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<div className="App">
			<Header className="header" />
			<div></div>
			<SideBar className="sideBar" />
			<Dashboard className="dashboard" />
		</div>
	);
}

export default App;
