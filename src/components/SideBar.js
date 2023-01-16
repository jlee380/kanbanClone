import React, { useState, useEffect } from "react";

import styled from "styled-components";
import "../style.css";
import response from "../data.json";

import HideSidebar from "./HideSidebar";
import BoardsList from "./BoardsList";
import DarkMode from "./DarkMode";

const SideBarContainer = styled.div`
	display: flex;
	display: ${(props) => (props.toggleSidebar ? "" : "none")};

	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	background-color: ${(props) => props.theme.background};

	border: 1px solid;
`;

const SwitchAndHide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 2rem;

	border: 1px solid;
`;

const SideBar = () => {
	const [boards, setBoards] = useState([]);
	const [active, setActive] = useState(-1);
	const [toggleSidebar, setToggleSidebar] = useState(true);

	useEffect(() => {
		setBoards(response.boards);
	}, [toggleSidebar]);

	const addBoard = () => {
		const newBoardList = [...boards];
		newBoardList.push({ name: "new one", columns: [1, 2, 3] });
		setBoards(newBoardList);
	};

	return (
		<SideBarContainer toggleSidebar={toggleSidebar}>
			<BoardsList
				setActive={setActive}
				active={active}
				addBoard={addBoard}
				boards={boards}
			/>
			<SwitchAndHide>
				<DarkMode />
				<HideSidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			</SwitchAndHide>
		</SideBarContainer>
	);
};

export default SideBar;
