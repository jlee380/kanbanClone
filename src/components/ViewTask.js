import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

import IconDots from "../assets/icon-vertical-ellipsis.svg";
import { COLORS } from "../theme/styles";
import CheckBox from "./CheckBox";

const TitleAndEditContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TaskTitle = styled.h3``;

const EditButton = styled.span`
	background-image: url(${IconDots});
	width: 0.5rem;
	height: 2rem;
`;

const Description = styled.div`
	font-weight: 500;
`;

const SubTaskContainer = styled.div``;

const SubTaskCount = styled.div`
	margin-bottom: 1.6rem;
`;

const ListOfSubTasks = styled.div``;

const SubTask = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const Label = styled.label``;

const StatusContainer = styled.div``;

const StatusHeading = styled.div``;
const StatusDropDown = styled.div``;

const DropDown = ({ columns }) => {
	return (
		<select>
			{columns.map((column, i) => (
				<option key={i}>{column.name}</option>
			))}
		</select>
	);
};

function ViewTask() {
	const {
		selectedTask,
		numOfCompletedTasks,
		setNumOfCompletedTasks,
		boards,
		active,
		setIsModalOpen,
	} = useContext(BoardContext);

	useEffect(() => {
		setNumOfCompletedTasks(
			subTasks.filter((sub) => sub.isCompleted === true).length
		);
	}, [selectedTask]);

	const subTasks = selectedTask.subtasks;
	const columns = boards[active].columns;

	return (
		<>
			<TitleAndEditContainer>
				<TaskTitle>{selectedTask.title}</TaskTitle>
				<EditButton onClick={() => setIsModalOpen(null)} />
			</TitleAndEditContainer>
			<Description>{selectedTask.description}</Description>
			<SubTaskContainer>
				<SubTaskCount>{`SubTasks ${numOfCompletedTasks} of ${subTasks.length}`}</SubTaskCount>
				<ListOfSubTasks>
					<SubTask>
						{subTasks.map((subTask, i) => (
							<Label key={i}>
								<CheckBox title={subTask.title} />
							</Label>
						))}
					</SubTask>
				</ListOfSubTasks>
			</SubTaskContainer>
			<StatusContainer>
				<StatusHeading>Current Status</StatusHeading>
				<DropDown columns={columns}></DropDown>
			</StatusContainer>
		</>
	);
}

export default ViewTask;
