import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { COLORS } from "../theme/styles";
import IconCheck from "../assets/icon-check.svg";
import { BoardContext } from "../App";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

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
	flex-shrink: 1;
`;

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

const TitleSpan = styled.span`
	margin-left: 1.6rem;
	text-decoration: ${(props) => (props.checked ? "line-through" : null)};
	color: ${(props) => (props.checked ? `${COLORS.MEDIUMGRAY}` : null)};
`;

const CheckBox = ({ className, subTask, subTasks, setSubTasks }) => {
	const title = subTask.title;
	const { completedTasks, setCompletedTasks } = useContext(BoardContext);

	const [checked, setChecked] = useState(false);

	useEffect(() => {
		console.log(subTask, subTasks);
		if (subTask.isCompleted) {
			setChecked(true);
		}
	}, []);

	useEffect(() => {
		let check = true;
		checked ? (check = true) : (check = false);

		subTasks.map((sub, i) =>
			sub.title === title ? updateSubTasks(sub, i, check) : null
		);
	}, []);

	const isCheckedChecked = (e) => {
		setChecked(e.target.checked);
	};

	const updateSubTasks = (sub, i, boolVal) => {
		const updatedSubTask = [...subTasks];

		sub.isCompleted = boolVal;
		updatedSubTask.splice(i, 1, sub);
		setSubTasks(updatedSubTask);
	};

	return (
		<>
			<CheckboxContainer className={className}>
				<HiddenCheckbox checked={checked} onChange={isCheckedChecked} />
				<StyledCheckbox checked={checked} onChange={isCheckedChecked}>
					<Icon />
				</StyledCheckbox>
				<TitleSpan checked={checked}>{title}</TitleSpan>
			</CheckboxContainer>
		</>
	);
};

export default CheckBox;
