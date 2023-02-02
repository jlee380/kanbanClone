import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";
import AddNewTask from "./Forms/AddNewTask";
import ViewTask from "./ViewTask";

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
	display: flex;
	flex-direction: column;
	gap: 2.4rem;

	padding: 3.2rem 3.2rem 2.4rem;
	background-color: white;
	width: 48rem;
	max-height: 95vh;
	border-radius: 6px;
`;

function Modal() {
	const { isModalOpen, boards, active } = useContext(BoardContext);
	return (
		<Overlay>
			<ModalContainer>
				{isModalOpen === "view_task" ? (
					<ViewTask boards={boards} active={active} />
				) : null}
				{isModalOpen === "add_new_task" ? <AddNewTask /> : null}
			</ModalContainer>
		</Overlay>
	);
}

export default Modal;
