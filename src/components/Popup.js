import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

const PopupContainer = styled.div`
	float: right;
	display: block;

	// background-color: black;
	width: 19.2rem;
`;

const EditTask = styled.div`
	cursor: pointer;
`;

function handleEditTask() {}

function handleDeleteTask() {}

function Popup() {
	const { setIsModalOpen } = useContext(BoardContext);
	return (
		<PopupContainer>
			<EditTask onClick={() => setIsModalOpen("edit_task")}>
				Edit Task
			</EditTask>
			<div onClick={handleDeleteTask}>Delete Task</div>
		</PopupContainer>
	);
}

export default Popup;
