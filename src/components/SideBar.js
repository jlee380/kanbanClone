import React from "react";

import styled from "styled-components";
import "../style.css";

import HideSidebar from "./HideSidebar";
import BoardsList from "./BoardsList";
import DarkModeBar from "./DarkModeBar";

const SideBarContainer = styled.div`
	display: flex;
	display: ${(props) => (props.toggleSidebar ? "" : "none")};

	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding-top: 4rem;

	background-color: ${(props) => props.theme.background.grayDark};

	border-right: 1px solid;
`;

const SwitchAndHide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	border: 1px solid;
`;

const SideBar = ({
	toggleSidebar,
	setToggleSidebar,
	addBoard,
	boards,
	active,
	setActive,
}) => {
	return (
		<>
			<SideBarContainer toggleSidebar={toggleSidebar}>
				<BoardsList
					setActive={setActive}
					active={active}
					addBoard={addBoard}
					boards={boards}
				/>
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
