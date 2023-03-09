import "./App.css";
import styled from "styled-components";
import { useState, useEffect, createContext } from "react";
import Theme from "./theme/Theme";
import { ThemeStore } from "./contexts/ThemeStore";

import data from "./data.json";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UnhideButton from "./components/UnhideBar";
import Modal from "./components/Modal";

const MainApp = styled.div`
	display: grid;
	grid-template-columns: 30.1rem;
	grid-template-rows: 9.7rem;
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

	&: > * {
		min-width: 0px;
	}
`;

export const BoardContext = createContext();

function App() {
	const [toggleSidebar, setToggleSidebar] = useState(true);
	const [boards, setBoards] = useState([""]);
	const [active, setActive] = useState(0);
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(null);
	const [selectedTask, setSelectedTask] = useState({});
	const [completedTasks, setCompletedTasks] = useState([]);
	const [columns, setColumns] = useState([]);

	const addBoard = () => {
		setIsModalOpen("create_new_board");
		// const newBoardList = [...boards];
		// newBoardList.push({ name: "new one", columns: [1, 2, 3] });
		// setBoards(newBoardList);
	};

	useEffect(() => {
		setColumns(data.boards[active].columns);
		setBoards(data.boards);
		setLoading(false);
	}, []);

	return (
		<ThemeStore>
			<Theme>
				{loading ? (
					<div>loading...</div>
				) : (
					<BoardContext.Provider
						value={{
							data,
							toggleSidebar,
							setToggleSidebar,
							boards,
							setBoards,
							active,
							setActive,
							isModalOpen,
							setIsModalOpen,
							selectedTask,
							setSelectedTask,
							completedTasks,
							setCompletedTasks,
							columns,
							setColumns,
						}}>
						{isModalOpen ? <Modal /> : null}
						<MainApp>
							<Header />
							<SideBar addBoard={addBoard} />
							<Dashboard />
							<UnhideButton />
						</MainApp>
					</BoardContext.Provider>
				)}
			</Theme>
		</ThemeStore>
	);
}

export default App;
