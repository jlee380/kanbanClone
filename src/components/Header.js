import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import IconDots from "../assets/icon-vertical-ellipsis.svg";

import Button from "./Button";

import { ThemeContext } from "../contexts/ThemeStore";
import { BoardContext } from "../App";

const HeaderContainer = styled.div`
	display: flex;

	background-color: white;
`;

const LeftContainer = styled.div`
	display: flex;
	width: 30rem;
`;

const LogoImg = styled.span`
	background-image: ${(props) =>
		props.theme === "light" ? `url(${LogoLight})` : `url(${LogoDark})`};

	width: 15.2rem;
	height: 2.5rem;

	margin: 3.2rem;
`;

const RightContainer = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	justify-content: space-between;

	// border: 0.1rem solid;
`;

const SelectedBoardName = styled.div`
	font-size: 2.4rem;
	padding-left: 2.4rem;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-right: 2rem;
`;

const EditButton = styled.span`
	background-image: url(${IconDots});
	width: 0.5rem;
	height: 2rem;
	cursor: pointer;
`;

function Header() {
	const { theme } = useContext(ThemeContext);
	const { boards, active, setIsModalOpen } = useContext(BoardContext);
	return (
		<>
			<HeaderContainer>
				<LeftContainer>
					<LogoImg theme={theme} />
				</LeftContainer>
				<RightContainer>
					<SelectedBoardName>
						{active || active === 0 ? boards[active].name : null}
					</SelectedBoardName>
					<Wrapper>
						<Button onClick={() => setIsModalOpen("add_new_task")}>
							+Add New Task
						</Button>
						<EditButton />
					</Wrapper>
				</RightContainer>
			</HeaderContainer>
		</>
	);
}

export default withTheme(Header);
