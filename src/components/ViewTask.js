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

const TaskTitle = styled.h3`
	font-size: 1.8rem;
	line-height: 2.3rem;
`;

const EditButton = styled.span`
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

const ListOfSubTasks = styled.div``;

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
	color: ${COLORS.MEDIUMGRAY};
`;
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
	const [subTasks, setSubTasks] = useState([]);
	const {
		selectedTask,
		completedTasks,
		setCompletedTasks,
		boards,
		active,
		setIsModalOpen,
	} = useContext(BoardContext);

	useEffect(() => {
		setSubTasks(selectedTask.subtasks);
		setCompletedTasks(subTasks.filter((sub) => sub.isCompleted === true));
	}, [selectedTask, subTasks]);

	const columns = boards[active].columns;

	return (
		<>
			<TitleAndEditContainer>
				<TaskTitle>{selectedTask.title}</TaskTitle>
				<EditButton onClick={() => setIsModalOpen(null)} />
			</TitleAndEditContainer>
			<Description>{selectedTask.description}</Description>
			<SubTaskContainer>
				<SubTaskCount>{`SubTasks ${completedTasks.length} of ${subTasks.length}`}</SubTaskCount>
				<ListOfSubTasks>
					<SubTask>
						{console.log(subTasks)}
						{subTasks ? (
							subTasks.map((subTask, i) => (
								<Label key={i}>
									<CheckBox
										subTask={subTask}
										subTasks={subTasks}
										setSubTasks={setSubTasks}
									/>
								</Label>
							))
						) : (
							<div>Loading...</div>
						)}
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
