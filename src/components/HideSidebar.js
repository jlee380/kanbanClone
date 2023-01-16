import React from "react";
import styled from "styled-components";
import IconHide from "../assets/icon-hide-sidebar.svg";

const HideBarAndIcon = styled.div`
	display: flex;
	align-items: center;

	gap: 1.2rem;
	width: 17.6rem;
	height: 4.8rem;
	border-radius: 0px 100px 100px 0px;
	border: none;

	margin-left: 2.5rem;

	&:hover {
		background: #f4f7fd !important;
	}

	cursor: pointer;
`;

const IconHideBar = styled.div`
	background-image: url(${IconHide});
	width: 1.8rem;
	height: 1.6rem;
`;

const HideBar = styled.div`
	color: #828fa3;
	font-weight: 700;
	font-size: 1.5rem;
`;

function HideSidebar() {
	return (
		<div>
			<HideBarAndIcon>
				<IconHideBar />
				<HideBar>Hide Sidebar</HideBar>
			</HideBarAndIcon>
		</div>
	);
}

export default HideSidebar;
