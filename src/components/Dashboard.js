import React, { useContext, useEffect } from "react";
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
	const { setIsModalOpen, setSelectedTask, columns } =
		useContext(BoardContext);

	useEffect(() => {}, [columns]);

	return (
		<>
			<DashboardContainer>
				{columns
					? columns.map((col, colId) => (
							<Col key={colId}>
								{col.name} {`(${col.tasks.length})`}
								<ul>
									{col.tasks.map((item, i) =>
										item ? (
											<li
												key={i}
												onClick={() => {
													setSelectedTask(
														item,
														(item.key = colId),
														(item.status =
															col.name),
														(item.index = i)
													);
													setIsModalOpen("view_task");
												}}>
												{item.title}
											</li>
										) : null
									)}
								</ul>
							</Col>
					  ))
					: null}
			</DashboardContainer>
		</>
	);
}

export default Dashboard;
