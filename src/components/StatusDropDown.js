import { useState, useContext } from "react";
import { BoardContext } from "../App";
import { COLORS } from "../theme/styles";
import styled from "styled-components";

const DropdownContainer = styled.div``;

const Select = styled.select`
	width: 100%;
	position: relative;
	padding: 0.8rem;
	background: white;

	border-color: ${COLORS.LINECOLOR};
	border-radius: 0.4rem;
`;

function StatusDropDown() {
	const { selectedTask, columns, setColumns } = useContext(BoardContext);
	const [currentStatus, setCurrentStatus] = useState(selectedTask.status);

	const updateCurrentColumn = (removedTask) => {
		const targetColumn = removedTask.status;

		const taskRemovedColumn = columns.map((col, i) => {
			return {
				...col,
				tasks: col.tasks.filter(
					(sub) => sub.title !== selectedTask.title
				),
			};
		});

		const taskAddedColumn = taskRemovedColumn.map((col, i) => {
			return {
				...col,
				tasks:
					col.name === targetColumn
						? [...col.tasks, removedTask]
						: [...col.tasks],
			};
		});
		setColumns(taskAddedColumn);
	};

	const getSelectedOption = (e) => {
		const selectedStatus = e.target.value;
		setCurrentStatus(selectedStatus);

		const removedTask = selectedTask;
		removedTask.status = selectedStatus;

		updateCurrentColumn(removedTask);
	};

	return (
		<Select value={currentStatus} onChange={getSelectedOption}>
			{columns
				? columns.map((column, i) => (
						<option key={i} value={column.name}>
							{column.name}
						</option>
				  ))
				: null}
		</Select>
	);
}

export default StatusDropDown;
