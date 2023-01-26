import { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../theme/styles";
import IconCheck from "../assets/icon-check.svg";

const CheckboxContainer = styled.div`
	display: flex;
`;

const Icon = styled.span`
	position: absolute;
	background-image: url(${IconCheck});
	width: 1.1rem;
	height: 0.83rem;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;
// (props.checked ? "black" : "black")
const StyledCheckbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.6rem;
	height: 1.6rem;
	background: ${(props) =>
		props.checked ? `${COLORS.MAINPURPLE}` : `${COLORS.WHITE}`};
	border-radius: 3px;
	border: 1px solid ${COLORS.MEDIUMGRAY};

	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		// box-shadow: 0 0 0 3px black;
	}

	${Icon} {
		visibility: ${(props) => (props.checked ? "visible" : "hidden")};
	}
`;

const CheckBox = ({ className, title }) => {
	const [checked, setChecked] = useState(false);

	const isCheckedChecked = (e) => {
		setChecked(e.target.checked);
	};
	console.log(checked);
	return (
		<>
			<CheckboxContainer className={className}>
				<HiddenCheckbox checked={checked} onChange={isCheckedChecked} />
				<StyledCheckbox checked={checked} onChange={isCheckedChecked}>
					<Icon />
				</StyledCheckbox>
				<span style={{ marginLeft: "1.6rem" }}>{title}</span>
			</CheckboxContainer>
		</>
	);
};

export default CheckBox;
