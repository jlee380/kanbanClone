import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContainer = styled.div`
	background-color: white;
	width: 48rem;
	height: 52.3rem;
	border-radius: 6px;
`;

const TitleAndEditContainer = styled.div``;

const TaskTitle = styled.li``;

const EditButton = styled.span`
	// background-image: url();
`;

const Description = styled.div``;

const SubTaskContainer = styled.div``;

const SubTaskCount = styled.div``;

const SubTaskCheckBoxes = styled.div``;

const StatusContainer = styled.div``;

const StatusHeading = styled.div``;
const StatusDropDown = styled.div``;

const TaskLists = (title) => {
	const [selectedTask, setSelectedTask] = useState({});

	return <li onClick={() => setSelectedTask()}>{}</li>;
};

function Modal() {
	const { active, boards, isModalOpen, setIsModalOpen } =
		useContext(BoardContext);
	const columns = boards[active].columns;
	const tasks = [];

	columns.map((c) => tasks.push(c.tasks));
	// console.log(columns);
	tasks.map((task) => task.map((t) => t.title));
	// console.log(tasks);

	const getTaskTitle = (e) => {
		console.log(e.target.value);
	};

	return (
		<Overlay>
			<ModalContainer onClick={() => setIsModalOpen(!isModalOpen)}>
				<TitleAndEditContainer>
					<TaskLists columns={columns} />
					{boards[active].title}
					<EditButton />
				</TitleAndEditContainer>
				<Description></Description>
				<SubTaskContainer>
					<SubTaskCount></SubTaskCount>
					<SubTaskCheckBoxes></SubTaskCheckBoxes>
				</SubTaskContainer>
				<StatusContainer>
					<StatusHeading></StatusHeading>
					<StatusDropDown></StatusDropDown>
				</StatusContainer>
			</ModalContainer>
		</Overlay>
	);
}

export default Modal;
