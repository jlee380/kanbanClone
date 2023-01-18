import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Theme from "./theme/Theme";
import { ThemeStore } from "./contexts/ThemeStore";

import response from "./data.json";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UnhideButton from "./components/UnhideBar";

const MainApp = styled.div`
	border: 1px solid black;
	display: grid;
	grid-template-columns: 30% 70%;
	grid-template-rows: 10% 90%;
	grid-template-areas:
		"headerArea headerArea"
		"side dash";

	& :nth-child(1) {
		grid-area: headerArea;
	}

	& :nth-child(2) {
		grid-area: side;
	}

	& :nth-child(3) {
		grid-area: dash;
	}
`;

function App() {
	const [toggleSidebar, setToggleSidebar] = useState(true);
	const [boards, setBoards] = useState([""]);
	const [active, setActive] = useState(null);
	const [loading, setLoading] = useState(true);

	const addBoard = () => {
		const newBoardList = [...boards];
		newBoardList.push({ name: "new one", columns: [1, 2, 3] });
		setBoards(newBoardList);
	};

	useEffect(() => {
		setBoards(response.boards);
		setLoading(false);
	}, []);

	return (
		<ThemeStore>
			<Theme>
				{loading ? (
					<div>loading...</div>
				) : (
					<MainApp>
						<Header boards={boards} active={active} />
						<SideBar
							addBoard={addBoard}
							boards={boards}
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
							active={active}
							setActive={setActive}
						/>
						<Dashboard boards={boards} active={active} />

						<UnhideButton
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					</MainApp>
				)}
			</Theme>
		</ThemeStore>
	);
}

export default App;
