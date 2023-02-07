import React from "react";

import styled from "styled-components";
import "../style.css";

import HideSidebar from "./HideSidebar";
import BoardsList from "./BoardsList";
import DarkModeBar from "./DarkModeBar";
import { useContext } from "react";
import { BoardContext } from "../App";

import { COLORS } from "../theme/styles";

const Wrapper = styled.div``;

const SideBarContainer = styled.div`
	display: flex;
	display: ${(props) => (props.toggleSidebar ? "" : "none")};

	// left: 0;

	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding-top: 4rem;

	background-color: ${COLORS.WHITE};
`;

const SwitchAndHide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	border: 1px solid;
`;

const SideBar = () => {
	const { toggleSidebar, setToggleSidebar, addBoard, boards } =
		useContext(BoardContext);
	return (
		<>
			<SideBarContainer toggleSidebar={toggleSidebar}>
				<BoardsList addBoard={addBoard} boards={boards} />
				<SwitchAndHide>
					<DarkModeBar />
					<HideSidebar
						toggleSidebar={toggleSidebar}
						setToggleSidebar={setToggleSidebar}
					/>
				</SwitchAndHide>
			</SideBarContainer>
		</>
	);
};

export default SideBar;
