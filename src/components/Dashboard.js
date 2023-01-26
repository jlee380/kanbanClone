import React, { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

const DashboardContainer = styled.div`
	display: flex;

	background-color: ${(props) => props.theme.background.grayDarker};
`;

const Col = styled.div`
	border: 1px solid;
	width: 28rem;
`;

function Dashboard() {
	const { boards, active, setIsModalOpen, selectedTask, setSelectedTask } =
		useContext(BoardContext);

	const columns = boards[active].columns;
	// console.log(columns.map((c) => console.log(c)));

	const handleSubTasks = (e, value) => {};

	return (
		<>
			<DashboardContainer>
				{columns.map((col, colId) => (
					<Col key={colId}>
						{col.name} {`(${col.tasks.length})`}
						<ul>
							{col.tasks.map((item, i) => (
								<li
									key={i}
									onClick={() => {
										setSelectedTask(
											item,
											(item.key = colId),
											(item.status = col.name),
											(item.index = i)
										);
										setIsModalOpen("view_task");
									}}>
									{item.title}
								</li>
							))}
						</ul>
					</Col>
				))}
			</DashboardContainer>
			{/* <table>
				<tr>
					<th>1</th>
					<th>2</th>
				</tr>
				<tr>
					<td>1</td>
					<td>2</td>
				</tr>
			</table> */}

			{/* <table>
				<tr>
					{columns.map((a, i) => {
						return <th key={i}>{a.name}</th>;
					})}
				</tr>
				{}
			</table> */}

			{/* <table>
				{columns.map((col, i) => (
					<tbody key={i}>
						<th></th>
						{col.name}
						{col.tasks.map((c, i) => (
							<td
								key={i}
								value={c}
								onClick={(value) => handleSubTasks(value)}>
								{c.title}
							</td>
						))}
					</tbody>
				))}
			</table> */}

			{/* {boards.map((board) =>
				console.log(
					board.columns.map((c) =>
						console.log(
							c.tasks.map((t) =>
								console.log(
									t.subtasks.map((st) => console.log(st))
								)
							)
						)
					)
				)
			)} */}
		</>
	);
}

export default Dashboard;
