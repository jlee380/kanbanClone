import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";
import { COLORS } from "../theme/styles";

import IconDots from "../assets/icon-vertical-ellipsis.svg";
import CheckBox from "./CheckBox";
import StatusDropDown from "./StatusDropDown";
import Popup from "./Popup";

const TitleAndEditContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TaskTitle = styled.h3`
	font-size: 1.8rem;
	line-height: 2.3rem;
`;

const EditButton = styled.span`
	flex: 0 0 auto;
	position: relative;
	background-image: url(${IconDots});
	width: 0.5rem;
	height: 2rem;
`;

const Description = styled.div`
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 2.3rem;
	color: ${COLORS.MEDIUMGRAY};
`;

const SubTaskContainer = styled.div``;

const SubTaskCount = styled.div`
	font-size: 1.2rem;
	line-height: 1.5rem;
	margin-bottom: 1.6rem;
	color: ${COLORS.MEDIUMGRAY};
`;

const SubTask = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const Label = styled.label``;

const StatusContainer = styled.div``;

const StatusHeading = styled.div`
	font-size: 1.2rem;
	line-height: 1.5rem;
	margin-bottom: 0.8rem;
	color: ${COLORS.MEDIUMGRAY};
`;

function ViewTask() {
	const { selectedTask, completedTasks, setCompletedTasks } =
		useContext(BoardContext);

	const [isPopup, setIsPopup] = useState(true);
	const [subTasks, setSubTasks] = useState(selectedTask.subtasks);
	// const subTasks = selectedTask.subtasks;

	// REFACTORING
	useEffect(() => {
		setCompletedTasks(subTasks.filter((sub) => sub.isCompleted === true));
	}, [subTasks, selectedTask.subtasks, setCompletedTasks]);

	return (
		// REFACTORING <CheckBox />
		<>
			<TitleAndEditContainer>
				<TaskTitle>{selectedTask.title}</TaskTitle>
				<EditButton onClick={() => setIsPopup(!isPopup)} />
				{isPopup ? <Popup /> : null}
			</TitleAndEditContainer>
			<Description>{selectedTask.description}</Description>
			<SubTaskContainer>
				<SubTaskCount>{`SubTasks (${completedTasks.length} of ${subTasks.length})`}</SubTaskCount>
				<SubTask>
					{subTasks ? (
						subTasks.map((subTask, i) => (
							<CheckBox
								subTask={subTask}
								subTasks={subTasks}
								setSubTasks={setSubTasks}
							/>
						))
					) : (
						<div>Loading...</div>
					)}
				</SubTask>
			</SubTaskContainer>
			<StatusContainer>
				<StatusHeading>Current Status</StatusHeading>
				<StatusDropDown></StatusDropDown>
			</StatusContainer>
		</>
	);
}

export default ViewTask;
