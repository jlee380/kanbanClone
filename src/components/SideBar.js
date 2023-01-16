import React, { useState, useEffect } from "react";

import styled from "styled-components";
import "../style.css";
import response from "../data.json";

import HideSidebar from "./HideSidebar";
import BoardsList from "./BoardsList";
import DarkMode from "./DarkMode";

const SideBarContainer = styled.div`
	display: flex;
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

	margin: 2rem;
	padding: 2rem;
	gap: 2rem;

	border: 1px solid;
`;

const SideBar = () => {
	const [boards, setBoards] = useState([]);
	const [active, setActive] = useState(-1);

	useEffect(() => {
		setBoards(response.boards);
	}, []);

	const addBoard = () => {
		const newBoardList = [...boards];
		newBoardList.push({ name: "new one", columns: [1, 2, 3] });
		setBoards(newBoardList);
	};

	return (
		<SideBarContainer>
			<BoardsList
				setActive={setActive}
				active={active}
				addBoard={addBoard}
				boards={boards}
			/>
			<SwitchAndHide>
				<DarkMode />
				<HideSidebar />
			</SwitchAndHide>
		</SideBarContainer>
	);
};

export default SideBar;
