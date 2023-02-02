import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";
import { COLORS } from "../theme/styles";

import IconDots from "../assets/icon-vertical-ellipsis.svg";
import CheckBox from "./CheckBox";
import StatusDropDown from "./StatusDropDown";

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

function ViewTask() {
	const { selectedTask, completedTasks, setCompletedTasks, setIsModalOpen } =
		useContext(BoardContext);
	const [subTasks, setSubTasks] = useState(selectedTask.subtasks);

	useEffect(() => {
		console.log(completedTasks);
		setSubTasks(selectedTask.subtasks);
		setCompletedTasks(subTasks.filter((sub) => sub.isCompleted === true));

		console.log(
			"completedTask:",
			completedTasks,
			"subTasks:",
			subTasks,
			"selectedTask:",
			selectedTask
		);
	}, []);

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
				<StatusDropDown></StatusDropDown>
			</StatusContainer>
		</>
	);
}

export default ViewTask;
