import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";
import CreateNewBoard from "./Forms/CreateNewBoard";
import AddNewTask from "./Forms/AddNewTask";
import ViewTask from "./ViewTask";
import Popup from "./Popup";
import EditTask from "./Forms/EditTask";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: 80;
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
	const { isModalOpen, setIsModalOpen, boards, active } =
		useContext(BoardContext);

	return (
		<Overlay onClick={() => setIsModalOpen(null)}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				{isModalOpen === "view_task" && (
					<ViewTask boards={boards} active={active} />
				)}
				{isModalOpen === "add_new_task" && <AddNewTask />}
				{isModalOpen === "create_new_board" && (
					<CreateNewBoard boards={boards} active={active} />
				)}
				{isModalOpen === "edit_task" && <EditTask />}
			</ModalContainer>
		</Overlay>
	);
}

export default Modal;
