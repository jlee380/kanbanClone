import React from "react";
import IconBoards from "../assets/icon-board.svg";

import styled from "styled-components";

const Ul = styled.ul`
	display: flex;
	flex-direction: column;

	li,
	span {
		margin-left: 32px;
	}

	border: 1px solid;
`;

const IconAndText = styled.a`
	display: flex;
	align-items: center;

	width: 27.6rem;
	height: 4.8rem;

	border-radius: 0px 100px 100px 0px;
	border: none;

	cursor: -webkit-grab;
	cursor: grab;

	&:hover {
		background: #f4f7fd !important;
	}

	&:hover li {
		color: #635fc7;
	}

	background: ${(props) => (props.active ? "#635fc7" : "transparent")};
`;

const Li = styled.li`
	font-size: 15px;
	line-height: 19px;

	color: ${(props) => (props.primary ? "#635fc7" : "#828fa3")};
`;

const IconBoard = styled.span`
	background-image: url(${IconBoards});
	width: 16px;
	height: 16px;
`;

const BoardDiv = styled.div`
	margin-left: -16px;
`;

function BoardsList({ setActive, active, addBoard, boards }) {
	const boardNum = boards.length;
	return (
		<div>
			<Ul>
				<li
					className="allBoards"
					style={{
						marginBottom: 19,
					}}>{`ALL BOARDS (${boardNum})`}</li>
				{boards.map((board, i) => (
					<IconAndText
						onClick={(e) => setActive(i)}
						active={active}
						style={{
							backgroundColor:
								active === i ? "#635fc7" : "transparent",
						}}
						key={`${i}`}>
						<IconBoard
							key={`${i}`}
							onClick={() => setActive(i)}
							style={{
								stroke: active === i ? "white" : "transparent",
							}}
						/>
						<Li
							key={`${board.name}_${i}`}
							onClick={() => setActive(i)}
							// style={{
							// 	color: active === i ? "white" : "",
							// }}
						>
							<BoardDiv>{board.name}</BoardDiv>
						</Li>
					</IconAndText>
				))}
				<IconAndText>
					<IconBoard />
					<Li primary onClick={() => addBoard()}>
						<BoardDiv>+ CREATE NEW BOARDS</BoardDiv>
					</Li>
				</IconAndText>
			</Ul>
		</div>
	);
}

export default BoardsList;
