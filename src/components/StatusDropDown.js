import { useState, useEffect, useContext } from "react";
import { BoardContext } from "../App";

function StatusDropDown() {
	const { selectedTask, setSelectedTask, columns, setColumns } =
		useContext(BoardContext);

	const [currentStatus, setCurrentStatus] = useState("");
	const [currentColumn, setCurrentColumn] = useState({});

	useEffect(() => {
		console.log(columns);
		setCurrentStatus(selectedTask.status);
	}, [columns]);

	const removeTaskFromCurrentColumn = (removedTask) => {
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

	// const updateNewColumn = (removedTask) => {

	// 	const updatedColumn = columns.map((col, i) => {
	// 		return {
	// 			...col,
	// 			tasks: [
	// 				...col.tasks,
	// 				col.name === targetColumn
	// 					? (col.tasks[i] = removedTask)
	// 					: null,
	// 			],
	// 		};
	// 	});

	// 	setColumns(updatedColumn);
	// };

	const getSelectedOption = (e) => {
		const selectedStatus = e.target.value;
		setCurrentStatus(selectedStatus);

		let copiedSelectedTask = selectedTask;
		let currentColumn = {};

		columns.map((c) =>
			c.name === currentStatus ? (currentColumn = c) : null
		);

		const removedTask = selectedTask;
		removedTask.status = selectedStatus;

		removeTaskFromCurrentColumn(removedTask);
		// updateNewColumn(removedTask);
	};

	return (
		<select value={currentStatus} onChange={getSelectedOption}>
			{columns
				? columns.map((column, i) => (
						<option key={i} value={column.name}>
							{column.name}
						</option>
				  ))
				: null}
		</select>
	);
}

export default StatusDropDown;
