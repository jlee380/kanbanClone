import React from "react";
import styled from "styled-components";
import IconHide from "../assets/icon-hide-sidebar.svg";

const HideBarAndIcon = styled.div`
	display: flex;
	align-items: center;

	width: 20rem;
	height: 4.8rem;
	border-radius: 0px 100px 100px 0px;
	border: none;
	margin-left: -12rem;

	& > * {
		margin-left: 3.5rem;
	}

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
	margin-left: 1rem;
`;

function HideSidebar({ toggleSidebar, setToggleSidebar }) {
	const hideSidebar = () => {
		setToggleSidebar(!toggleSidebar);
	};

	return (
		<div>
			<HideBarAndIcon onClick={hideSidebar}>
				<IconHideBar />
				<HideBar>Hide Sidebar</HideBar>
			</HideBarAndIcon>
		</div>
	);
}

export default HideSidebar;
