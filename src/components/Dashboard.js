import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

import { COLORS } from "../theme/styles";

const Wrapper = styled.div`
	// flex: 1 1 auto;
	// min-width: 0;
`;
const DashboardContainer = styled.div`
	display: flex;

	// overflow-x: auto;

	background: ${COLORS.LIGHTGRAY};
`;

const OvalAndColContainer = styled.div`
	display: flex;
`;

const Col = styled.div`
	padding: 2.3rem 0 2.3rem 2.3rem;
	width: 28rem;
`;

const Oval = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	margin-top: 0.2rem;

	border-radius: 50%;

	background: ${(props) => props.color};
`;

const ColNameAndCount = styled.h4`
	padding: 0 0 2.4rem 1.2rem;
	font-size: 1.2rem;
	color: ${COLORS.MEDIUMGRAY};
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Li = styled.li`
	padding: 2.3rem 1.6rem 2.3rem 1.6rem;
	box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
	border-radius: 8px;
	background: ${COLORS.WHITE};

	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const Title = styled.p``;

const SubtaskCounter = styled.p`
	font-size: 12px;
	line-height: 15px;
	color: ${COLORS.MEDIUMGRAY};
`;

const NewColumnContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28rem;
	height: 90rem;
	margin: 6.5rem 2.3rem; 0 2.3rem;

	background: linear-gradient(
		180deg,
		#e9effa 0%,
		rgba(233, 239, 250, 0.5) 100%
	);
	border-radius: 6px;
`;

const AddNewColumn = styled.p`
	font-size: 24px;
	line-height: 30px;
	color: ${COLORS.MEDIUMGRAY};

	&:hover {
		color: ${COLORS.MAINPURPLE};
	}

	cursor: pointer;
`;

const colors = ["#96ceb4", "#ffeead", "#ff6f69", "#ffcc5c", "#88d8b0"];

function Dashboard() {
	const { setIsModalOpen, setSelectedTask, columns, completedTasks } =
		useContext(BoardContext);
	console.log(columns);
	return (
		<>
			<Wrapper>
				<DashboardContainer>
					{columns
						? columns.map((col, colId) => (
								<Col key={colId}>
									<OvalAndColContainer>
										<Oval color={colors[colId]} />
										<ColNameAndCount>
											{col.name} {`(${col.tasks.length})`}
										</ColNameAndCount>
									</OvalAndColContainer>

									<Ul>
										{col.tasks.map((item, i) =>
											item ? (
												<Li
													key={i}
													onClick={() => {
														setSelectedTask(
															item,
															(item.key = colId),
															(item.status =
																col.name),
															(item.index = i)
														);

														setIsModalOpen(
															"view_task"
														);
													}}>
													<Title>{item.title}</Title>

													<SubtaskCounter>
														{`Subtasks `}
														{
															item.subtasks.filter(
																(sub) =>
																	sub.isCompleted ===
																	true
															).length
														}
														{` of `}
														{
															item.subtasks.filter(
																(sub) => sub
															).length
														}
													</SubtaskCounter>
												</Li>
											) : null
										)}
									</Ul>
								</Col>
						  ))
						: null}
					<NewColumnContainer>
						<AddNewColumn>+ NEW COLUMN</AddNewColumn>
					</NewColumnContainer>
				</DashboardContainer>
			</Wrapper>
		</>
	);
}

export default Dashboard;
