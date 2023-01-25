import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

import IconDots from "../assets/icon-vertical-ellipsis.svg";

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

const Description = styled.div``;

const SubTaskContainer = styled.div``;

const SubTaskCount = styled.div``;

const SubTaskCheckBoxes = styled.div``;

const StatusContainer = styled.div``;

const StatusHeading = styled.div``;
const StatusDropDown = styled.div``;

function ViewTask() {
	const { selectedTask } = useContext(BoardContext);
	const subTasks = selectedTask.subTasks;
	// console.log(subTasks.map((s) => s.name));
	useEffect(() => {
		console.log(selectedTask);
	}, []);

	return (
		<>
			<TitleAndEditContainer>
				<TaskTitle>{selectedTask.title}</TaskTitle>
				<EditButton />
			</TitleAndEditContainer>
			<Description>{selectedTask.description}</Description>
			<SubTaskContainer>
				{/* <SubTaskCount>{`SubTasks ${} of ${}`}</SubTaskCount> */}
				<SubTaskCheckBoxes></SubTaskCheckBoxes>
			</SubTaskContainer>
			<StatusContainer>
				<StatusHeading></StatusHeading>
				<StatusDropDown></StatusDropDown>
			</StatusContainer>
		</>
	);
}

export default ViewTask;
