import React, { useContext, useEffect, useState } from "react";
import IconBoards from "../assets/icon-board.svg";

import styled from "styled-components";

import { COLORS } from "../theme/styles";
import { BoardContext } from "../App";

const Ul = styled.ul`
	display: flex;
	flex-direction: column;

	li,
	span {
		margin-left: 3.2rem;
	}
`;

const BoardsNum = styled.p`
	margin-left: 3.2rem;
	margin-bottom: 1.9rem;

	color: ${COLORS.MEDIUMGRAY};
`;

const IconAndText = styled.a`
	display: flex;
	align-items: center;

	width: 27.6rem;
	height: 4.8rem;

	border-radius: 0rem 10rem 10rem 0rem;
	border: none;

	cursor: -webkit-grab;
	cursor: grab;

	&:hover {
		background: ${COLORS.LIGHTGRAY};
	}

	background: ${(props) =>
		props.selected === props.index
			? `${COLORS.MAINPURPLE} !important`
			: "transparent"};

	&:hover li {
		color: ${(props) =>
			props.selected === props.index
				? `${COLORS.WHITE}`
				: `${COLORS.MAINPURPLE}`};
	}
`;

const AddBoard = styled(IconAndText)`
	li {
		color: ${COLORS.MAINPURPLE};
	}
`;

const Li = styled.li`
	font-size: 1.5rem;
	line-height: 1.9rem;

	color: ${(props) =>
		props.selected === props.index
			? `${COLORS.WHITE}`
			: `${COLORS.MEDIUMGRAY}`};
`;

const IconBoard = styled.span`
	background-image: url(${IconBoards});
	width: 1.6rem;
	height: 1.6rem;
`;

const BoardDiv = styled.div`
	margin-left: -1.6rem;
`;

function BoardsList({ addBoard, boards }) {
	const { active } = useContext(BoardContext);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		setSelected(active.toString());
	}, [active]);

	const boardNum = boards.length;
	return (
		<>
			<Ul>
				<BoardsNum>{`ALL BOARDS (${boardNum})`}</BoardsNum>
				{boards.map((board, i) => (
					<IconAndText
						onClick={() => setSelected(i.toString())}
						selected={selected}
						index={i.toString()}
						key={`${i}`}>
						<IconBoard
							key={`${i}`}
							onClick={() => setSelected(i.toString())}
						/>
						<Li
							key={`${board.name}_${i}`}
							onClick={() => setSelected(i.toString())}
							selected={selected}
							index={i.toString()}>
							<BoardDiv>{board.name}</BoardDiv>
						</Li>
					</IconAndText>
				))}
				<AddBoard index="no">
					<IconBoard />
					<Li primary onClick={() => addBoard()}>
						<BoardDiv>+ CREATE NEW BOARDS</BoardDiv>
					</Li>
				</AddBoard>
			</Ul>
		</>
	);
}

export default BoardsList;
