import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";
import IconUnhide from "../assets/icon-show-sidebar.svg";

const Wrapper = styled.div`
	display: ${(props) => (props.toggleSidebar ? "none" : null)};
`;

const UnhideContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5.6rem;
	height: 4.8rem;
	position: absolute;
	left: 0.1rem;
	top: 60rem;
	background: #635fc7;
	border-radius: 0px 100px 100px 0px;
	cursor: pointer;
`;

const UnhideBar = styled.span`
	background-image: url(${IconUnhide});
	position: absolute;

	width: 1.6rem;
	height: 1rem;
`;

function UnhideButton() {
	const { toggleSidebar, setToggleSidebar } = useContext(BoardContext);
	return (
		<Wrapper
			onClick={() => setToggleSidebar(!toggleSidebar)}
			toggleSidebar={toggleSidebar}>
			<UnhideContainer>
				<UnhideBar />
			</UnhideContainer>
		</Wrapper>
	);
}

export default UnhideButton;
