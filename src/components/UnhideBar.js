import React from "react";
import styled from "styled-components";
import IconUnhide from "../assets/icon-show-sidebar.svg";

const UnhideContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5.6rem;
	height: 4.8rem;
	position: absolute;
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
	return (
		<UnhideContainer>
			<UnhideBar />
		</UnhideContainer>
	);
}

export default UnhideButton;
