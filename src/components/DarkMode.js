import React from "react";
import styled from "styled-components";

import ToggleSwitch from "./ToggleSwitch";

import IconLightTheme from "../assets/icon-light-theme.svg";
import IconDarkTheme from "../assets/icon-dark-theme.svg";

const NightModeGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	width: 25.1rem;
	height: 4.8rem;

	background: #f4f7fd;
	border-radius: 0.6rem;
`;

const IconDay = styled.div`
	background-image: url(${IconLightTheme});
	width: 1.8rem;
	height: 1.8rem;
`;
const IconNight = styled.div`
	background-image: url(${IconDarkTheme});
	width: 1.6rem;
	height: 1.6rem;
`;

function DarkMode() {
	return (
		<div>
			<NightModeGroup>
				<IconDay />
				<ToggleSwitch />
				<IconNight />
			</NightModeGroup>
		</div>
	);
}

export default DarkMode;
