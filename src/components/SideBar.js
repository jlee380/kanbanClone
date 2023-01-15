import React, { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";

import styled from "styled-components";
import "../style.css";
import response from "../data.json";
import IconBoards from "../assets/icon-board.svg";
import IconLightTheme from "../assets/icon-light-theme.svg";
import IconDarkTheme from "../assets/icon-dark-theme.svg";

const SideBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: ${(props) => props.theme.background};
`;

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

	width: 276px;
	height: 48px;
	left: 0px;
	top: 178px;

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
	font-family: "Plus Jakarta Sans";
	font-style: normal;
	font-weight: 700;
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

const SwitchAndHide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 75%;
	margin: 2rem;
	padding: 2rem;
	gap: 2rem;

	border: 1px solid;
`;

const NightModeGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	width: 25.1rem;
	height: 4.8rem;

	background: #f4f7fd;
	border-radius: 0.6rem;
`;

const IconDay = styled.div`
	background-image: url(${IconLightTheme});
	width: 1.8rem;
	height: 1.8rem;
`;
const IconNight = styled.div`
	background-image: url(${IconDarkTheme});
	width: 1.6rem;
	height: 1.6rem;
`;

const SideBar = () => {
	const [boards, setBoards] = useState([]);
	const [active, setActive] = useState(-1);

	const boardNum = boards.length;

	useEffect(() => {
		setBoards(response.boards);
	}, []);

	const addBoard = () => {
		const newBoardList = [...boards];
		newBoardList.push({ name: "new one", columns: [1, 2, 3] });
		setBoards(newBoardList);
	};

	return (
		<SideBarContainer>
			<Ul>
				<li
					className="allBoards"
					style={{
						marginBottom: 19,
					}}>{`ALL BOARDS (${boardNum})`}</li>
				{boards.map((board, i) => (
					<IconAndText
						onClick={() => setActive(i)}
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
			<SwitchAndHide>
				<NightModeGroup>
					<IconDay />
					<ToggleSwitch />
					<IconNight />
				</NightModeGroup>
				<div className="hideBar">hideBar</div>
			</SwitchAndHide>
		</SideBarContainer>
	);
};

export default SideBar;
