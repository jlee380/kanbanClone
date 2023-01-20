import React, { useState, useContext } from "react";

import { ThemeContext } from "../contexts/ThemeStore";

import styled from "styled-components";

const ToggleContainer = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	background: #635fc7;

	border-radius: 1.2rem;
`;

const Switch = styled.div`
	position: relative;
	width: 4rem;
	height: 2rem;
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: "";
		position: absolute;
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 3.5rem;
		top: 50%;
		left: 0.2rem;
		background: white;
		padding: 0.1rem;
		transform: translate(0, -50%);
	}
`;

const Input = styled.input`
	opacity: 0;
	position: absolute;

	&:checked + ${Switch} {
		&:before {
			transform: translate(140%, -50%);
		}
	}
`;

function ToggleSwitch() {
	const [checked, setChecked] = useState(false);
	const { toggleTheme } = useContext(ThemeContext);

	const checkCheckBox = (e) => {
		setChecked(e.target.checked);
		toggleTheme(checked ? "light" : "dark");
	};

	return (
		<ToggleContainer>
			<Input type="checkbox" checked={checked} onChange={checkCheckBox} />
			<Switch />
		</ToggleContainer>
	);
}

export default ToggleSwitch;
